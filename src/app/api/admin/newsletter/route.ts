import { NextRequest, NextResponse } from 'next/server';
import { getAllSubscribers } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // In a real application, you would add authentication here
    // to verify the request is coming from an admin
    
    const subscribers = getAllSubscribers();
    
    return NextResponse.json(
      { success: true, subscribers },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
} 