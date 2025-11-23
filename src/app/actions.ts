
'use server';

import { generateCarpetStory } from '@/ai/flows/generate-carpet-story';
import { z } from 'zod';

const StorySchema = z.object({
  carpetType: z.string().min(3, "Please enter a carpet type with at least 3 characters."),
  style: z.string(),
});

export type StoryState = {
  message?: string | null;
  story?: string | null;
  errors?: {
    carpetType?: string[];
    style?: string[];
  };
};

export async function createStory(
  prevState: StoryState,
  formData: FormData
): Promise<StoryState> {
  const validatedFields = StorySchema.safeParse({
    carpetType: formData.get('carpetType'),
    style: formData.get('style'),
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
    console.error(e);
    return { message: 'An error occurred while generating the story. Please try again later.', story: null, errors: {} };
  }
}
