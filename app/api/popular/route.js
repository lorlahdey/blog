
import data  from  '@/app/api/utils/data'
import { NextResponse } from 'next/server'

export async function GET() {
    const { Popular } = data;
    
    return NextResponse.json({
        Popular,
    })
}