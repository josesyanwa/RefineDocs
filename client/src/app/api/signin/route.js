import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const data = await req.json();
    console.log('Received signin data:', data); // Debug log

    // Send signin data to your Flask backend
    const response = await fetch('http://127.0.0.1:5555/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('Flask response status:', response.status); // Debug log

    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }
      throw new Error(`Error signing in: ${response.status}`);
    }

    const result = await response.json();
    console.log('Flask response data:', result); // Debug log

    // Check if token exists
    if (!result.token) {
      throw new Error('Token not found in the response');
    }

    // Return the JWT token in the response
    return NextResponse.json({ success: true, token: result.token });
  } catch (error) {
    console.error('Error signing in:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}