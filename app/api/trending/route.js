
import data  from  '@/app/api/utils/data'
import { NextResponse } from 'next/server'

export async function GET() {
    const { blogPost } = data;
    
    return NextResponse.json({
        Trending: blogPost
    })
}