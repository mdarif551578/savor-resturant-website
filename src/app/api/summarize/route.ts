
import { NextRequest, NextResponse } from 'next/server';
import { summarizeSentiment } from '@/ai/flows/sentiment-summarizer';

export async function POST(req: NextRequest) {
  try {
    const { reviews } = await req.json();

    if (!reviews) {
      return NextResponse.json({ message: 'Reviews are required.' }, { status: 400 });
    }

    const result = await summarizeSentiment({ reviews });
    
    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error('Error in sentiment summarization route:', error);
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}
