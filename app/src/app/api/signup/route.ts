
import { NextResponse } from 'next/server';
import User from '@/app/lib/models/User';
import connect from '@/app/lib/DB/mongoDB';

// פונקציית ההרשמה באמצעות מתודת POST
export async function POST(request: Request) {
  try {
    await connect();
    console.log("connectDB");
    
    // קבלת נתונים מהבקשה
    const { username, email, password } = await request.json();
    console.log(username, email, password);

    // יצירת משתמש חדש
    const newUser = new User({ username, email, password });
    await newUser.save();

    console.log("connectttttttt");
    
    // תגובה עם מצב הצלחה והעברה לדף הבית
    return NextResponse.json({ message: 'User signed up successfully' }, { status: 200 });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Failed to sign up' }, { status: 500 });
  }
};
