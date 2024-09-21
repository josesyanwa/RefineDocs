// File: src/app/api/signup/route.js

import { NextResponse } from 'next/server';

export function POST(req) {
  return req.json().then((data) => {
    return fetch('http://127.0.0.1:5555/users/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 409) {
            return NextResponse.json({ error: 'Username already exists' }, { status: 409 });
          }
          throw new Error('Error registering user: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        return NextResponse.json({ success: true, data });
      })
      .catch((error) => {
        console.error('Error registering user:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
      });
  });
}
