'use server';

/**
 * @fileOverview A flow to generate stories about carpets, highlighting their history, artistry, and cultural relevance.
 *
 * - generateCarpetStory - A function that generates a carpet story.
 * - GenerateCarpetStoryInput - The input type for the generateCarpetStory function.
 * - GenerateCarpetStoryOutput - The return type for the generateCarpetStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCarpetStoryInputSchema = z.object({
  carpetType: z
    .string()
    .describe('The type of carpet to generate a story about.'),
  style: z
    .string()
    .optional()
    .describe('The writing style of the story.'),
});
export type GenerateCarpetStoryInput = z.infer<typeof GenerateCarpetStoryInputSchema>;

const GenerateCarpetStoryOutputSchema = z.object({
  story: z.string().describe('A story about the specified type of carpet.'),
});
export type GenerateCarpetStoryOutput = z.infer<typeof GenerateCarpetStoryOutputSchema>;

export async function generateCarpetStory(input: GenerateCarpetStoryInput): Promise<GenerateCarpetStoryOutput> {
  return generateCarpetStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCarpetStoryPrompt',
  input: {schema: GenerateCarpetStoryInputSchema},
  output: {schema: GenerateCarpetStoryOutputSchema},
  prompt: `You are a storyteller specializing in the history and artistry of carpets.

  Generate a story about a carpet of type {{{carpetType}}}.

  The style of the story should be {{{style}}}.

  The story should highlight the carpet's history, artistry, and cultural relevance.`,
});

const generateCarpetStoryFlow = ai.defineFlow(
  {
    name: 'generateCarpetStoryFlow',
    inputSchema: GenerateCarpetStoryInputSchema,
    outputSchema: GenerateCarpetStoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
