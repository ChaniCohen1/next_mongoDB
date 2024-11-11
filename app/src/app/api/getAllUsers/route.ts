import { NextResponse } from 'next/server';
import User from '@/app/lib/models/User';
import connect from '@/app/lib/DB/mongoDB';

export async function GET() {
  try {
    // התחברות למסד הנתונים
    await connect();
    console.log("Connected to MongoDB");

    // שליפת כל המשתמשים
    const users = await User.find();

    // החזרת המשתמשים בתור JSON
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return NextResponse.json({ message: 'Failed to fetch users' }, { status: 500 });
  }
};
