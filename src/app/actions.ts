
'use server';

import { generateCarpetStory } from '@/ai/flows/generate-carpet-story';
import { z } from 'zod';

const StorySchema = z.object({
  carpetType: z.string().optional(),
  style: z.string(),
  imageDataUri: z.string().optional(),
}).refine(data => !!data.carpetType || !!data.imageDataUri, {
    message: "Please enter a carpet type or upload an image.",
    path: ["carpetType"],
});


export type StoryState = {
  message?: string | null;
  story?: string | null;
  errors?: {
    carpetType?: string[];
    style?: string[];
    imageDataUri?: string[];
  };
};

export async function createStory(
  prevState: StoryState,
  formData: FormData
): Promise<StoryState> {
  const validatedFields = StorySchema.safeParse({
    carpetType: formData.get('carpetType'),
    style: formData.get('style'),
    imageDataUri: formData.get('imageDataUri'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid input. Please check the fields.',
    };
  }

  try {
    const result = await generateCarpetStory(validatedFields.data);
    if (result.story) {
        return { story: result.story, message: null, errors: {} };
    } else {
        return { message: 'The generated story was empty. Please try a different prompt.', story: null, errors: {} };
    }
  } catch (e) {
    console.error('Error in createStory server action:', e);
    return { message: 'An error occurred while generating the story. Please try again later.', story: null, errors: {} };
  }
}
