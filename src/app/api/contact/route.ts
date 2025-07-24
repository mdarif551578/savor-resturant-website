
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Contact form submission:', body);
    
    // In a real application, you would process this data,
    // for example, by sending an email or saving it to a database.
    
    return NextResponse.json({ message: 'Message received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}
