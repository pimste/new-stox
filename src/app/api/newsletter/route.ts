import { NextRequest, NextResponse } from 'next/server';
import { addNewsletterSubscriber, isSubscribed, deleteSubscriber } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Simple validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Voer een geldig e-mailadres in' },
        { status: 400 }
      );
    }

    // Add subscriber to database
    const result = addNewsletterSubscriber(email);

    if (result.success) {
      return NextResponse.json(
        { success: true, message: 'Bedankt voor je aanmelding!' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Er is iets misgegaan. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}

// For checking if an email is already subscribed
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email parameter is required' },
        { status: 400 }
      );
    }

    const subscribed = isSubscribed(email);

    return NextResponse.json(
      { success: true, subscribed },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription check error:', error);
    return NextResponse.json(
      { success: false, message: 'Er is iets misgegaan. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}

// For deleting a subscriber
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email parameter is required' },
        { status: 400 }
      );
    }

    const result = deleteSubscriber(email);

    if (result.success) {
      return NextResponse.json(
        { success: true, message: 'Subscriber deleted successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Subscriber deletion error:', error);
    return NextResponse.json(
      { success: false, message: 'Er is iets misgegaan. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
} 