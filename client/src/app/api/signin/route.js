// File: src/app/api/signin/route.js

import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Parse incoming JSON data from the request
    const data = await req.json();

    // Send the signin data to your Flask backend
    const response = await fetch('http://127.0.0.1:5555/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Check if the response from the Flask backend is not OK (e.g., wrong credentials)
    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }
      throw new Error('Error signing in: ' + response.status);
    }

    // Parse the successful response from the backend
    const result = await response.json();

    // Return success response to the client
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    // Handle any errors and return a 500 status with the error message
    console.error('Error signing in:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
