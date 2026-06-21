
'use server';

/**
 * @fileOverview A Genkit flow to convert carpet stories and symbol decodings into audio (TTS).
 * 
 * - textToSpeech - Converts text to a base64 encoded WAV data URI.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import wav from 'wav';

const TTSInputSchema = z.object({
  text: z.string().describe('The text to convert to speech.'),
  language: z.string().default('en').describe('The language code for the voice.'),
});

const TTSOutputSchema = z.object({
  audioDataUri: z.string().describe('The generated audio as a WAV data URI.'),
});

export async function textToSpeech(input: z.infer<typeof TTSInputSchema>) {
  return textToSpeechFlow(input);
}

const textToSpeechFlow = ai.defineFlow(
  {
    name: 'textToSpeechFlow',
    inputSchema: TTSInputSchema,
    outputSchema: TTSOutputSchema,
  },
  async (input) => {
    // Map languages to available voices
    const voiceMap: Record<string, string> = {
      fa: 'Algenib',
      en: 'Charon',
      ar: 'Puck',
      zh: 'Fenrir',
      ru: 'Aoede',
      fr: 'Cassiopeia',
      ja: 'Achernar',
      de: 'Algenib',
      es: 'Charon',
      hi: 'Puck',
      tr: 'Fenrir',
      az: 'Aoede',
      ku: 'Algenib'
    };

    const voiceName = voiceMap[input.language] || 'Algenib';

    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName },
          },
        },
      },
      prompt: input.text,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate audio');
    }

    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );

    const wavBase64 = await toWav(audioBuffer);

    return {
      audioDataUri: 'data:audio/wav;base64,' + wavBase64,
    };
  }
);

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    let bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', (d) => bufs.push(d));
    writer.on('end', () => resolve(Buffer.concat(bufs).toString('base64')));

    writer.write(pcmData);
    writer.end();
  });
}
