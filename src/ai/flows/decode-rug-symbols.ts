'use server';

/**
 * @fileOverview A flow to decode the symbolic meanings of patterns in Iranian rugs and handicrafts.
 *
 * - decodeRugSymbols - A function that analyzes rug patterns and explains their symbolic meanings.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DecodeSymbolsInputSchema = z.object({
  imageDataUri: z.string().describe("A photo of a carpet or handicraft, as a data URI."),
  language: z.string().default('fa').describe('The language for the explanation.'),
});
export type DecodeSymbolsInput = z.infer<typeof DecodeSymbolsInputSchema>;

const DecodeSymbolsOutputSchema = z.object({
  symbolsFound: z.array(z.object({
    name: z.string().describe('The name of the symbol (e.g., Tree of Life, Boteh).'),
    meaning: z.string().describe('The spiritual or cultural meaning of this symbol.'),
  })),
  overallStory: z.string().describe('A poetic summary of what this rug represents as a whole.'),
  authenticityNote: z.string().describe('A note about the artistic heritage of such designs.'),
});
export type DecodeSymbolsOutput = z.infer<typeof DecodeSymbolsOutputSchema>;

export async function decodeRugSymbols(input: DecodeSymbolsInput): Promise<DecodeSymbolsOutput> {
  return decodeRugSymbolsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'decodeRugSymbolsPrompt',
  input: {schema: DecodeSymbolsInputSchema},
  output: {schema: DecodeSymbolsOutputSchema},
  prompt: `You are an expert iconographer and art historian specializing in Persian rugs and Iranian handicrafts.
  
  Analyze the provided image: {{media url=imageDataUri}}
  
  Identify the key symbols and patterns (like Medallions, Boteh, Eslimi, Shah Abbasi, Hunting scenes, etc.).
  Explain their deep spiritual, historical, and cultural meanings in the requested language: {{{language}}}.
  
  Output a poetic and professional analysis that would make a buyer feel the soul of the artwork.
  Mention that this analysis is provided by the Alimiri & Sons Heritage Lab.`,
});

const decodeRugSymbolsFlow = ai.defineFlow(
  {
    name: 'decodeRugSymbolsFlow',
    inputSchema: DecodeSymbolsInputSchema,
    outputSchema: DecodeSymbolsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
