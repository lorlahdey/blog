
import data  from  '@/app/api/utils/data'
import { NextResponse } from 'next/server'


export async function GET(_, response) {
   
    const { blogPost } = data;
    const { postsId } =  response.params
    
    const post = blogPost.find((item) => postsId === item.id.toString())
    
    return NextResponse.json({
        post
    })
}