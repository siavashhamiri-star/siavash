
'use server';

import { generateCarpetStory } from '@/ai/flows/generate-carpet-story';
import { z } from 'zod';

const StorySchema = z.object({
  carpetType: z.string().optional(),
  style: z.string().min(1, "Style is required"),
  imageDataUri: z.string().optional(),
}).refine(data => (data.carpetType && data.carpetType.trim().length > 0) || (data.imageDataUri && data.imageDataUri.length > 0), {
    message: "لطفاً نوع فرش را وارد کنید یا یک تصویر آپلود نمایید.",
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
  const carpetType = formData.get('carpetType')?.toString();
  const style = formData.get('style')?.toString() || 'Narrative';
  const imageDataUri = formData.get('imageDataUri')?.toString();

  const validatedFields = StorySchema.safeParse({
    carpetType: carpetType || undefined,
    style,
    imageDataUri: imageDataUri || undefined,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'ورودی نامعتبر است. لطفاً فیلدها را بررسی کنید.',
    };
  }

  try {
    const result = await generateCarpetStory(validatedFields.data);
    if (result && result.story) {
        return { story: result.story, message: null, errors: {} };
    } else {
        return { message: 'داستان تولید شده خالی بود. لطفاً ورودی دیگری را امتحان کنید.', story: null, errors: {} };
    }
  } catch (e: any) {
    console.error('Error in createStory server action:', e);
    return { message: `خطایی در تولید داستان رخ داد: ${e.message}`, story: null, errors: {} };
  }
}
