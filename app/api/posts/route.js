
import data  from  '@/app/api/utils/data'
import { NextResponse } from 'next/server'

export async function GET(req) {
    return NextResponse.json(data, { status: 200 });
}