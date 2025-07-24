'use server';

/**
 * @fileOverview A sentiment summarizer for user reviews.
 *
 * - summarizeSentiment - A function that handles the sentiment analysis and summarization process.
 * - SentimentSummarizerInput - The input type for the summarizeSentiment function.
 * - SentimentSummarizerOutput - The return type for the summarizeSentiment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SentimentSummarizerInputSchema = z.object({
  reviews: z
    .string()
    .describe('A collection of user reviews about the restaurant.'),
});
export type SentimentSummarizerInput = z.infer<typeof SentimentSummarizerInputSchema>;

const SentimentSummarizerOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the sentiments expressed in the reviews.'),
});
export type SentimentSummarizerOutput = z.infer<typeof SentimentSummarizerOutputSchema>;

export async function summarizeSentiment(input: SentimentSummarizerInput): Promise<SentimentSummarizerOutput> {
  return summarizeSentimentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'sentimentSummarizerPrompt',
  input: {schema: SentimentSummarizerInputSchema},
  output: {schema: SentimentSummarizerOutputSchema},
  prompt: `You are an AI that analyzes restaurant reviews and provides a concise sentiment summary.

  Reviews: {{{reviews}}}

  Provide a short summary of the overall sentiment expressed in the reviews. Focus on the key positive and negative points, and conclude with an overall assessment of customer feedback.`,
});

const summarizeSentimentFlow = ai.defineFlow(
  {
    name: 'summarizeSentimentFlow',
    inputSchema: SentimentSummarizerInputSchema,
    outputSchema: SentimentSummarizerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
