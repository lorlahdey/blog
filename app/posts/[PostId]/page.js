"use client"

// import { useParams } from "next/navigation"

import Image from "next/image"
import Author from '@/components/elements/Author';
import RelatedPost from "@/components/elements/RelatedPost";
import { useState, useEffect } from "react";


const  PostId = ({ params }) => {
    const [post, setPost] = useState(null)
    const baseURL = "http://localhost:3000";

    const getPostById = async () => {
        try {
            const res = await fetch(`/api/posts/${params.PostId}`, {
                method: "GET"
            })
            if (res) {
                const { post } = await res.json()
                if (post) setPost(post)
            }
        }catch (err) {
            return err
        }
    }
    console.log(post)
    useEffect(() => {
        getPostById();
    }, []);

    return (
        <>
        { post ? 
            <section className='container mx-auto md:px-2 py-16 w-1/2'>
                <div className='flex justify-center'>
                    <Author />
                </div>

                <div className="post py-10">
                    <h1 className='font-bold text-4xl text-center pb-5'>{post.title || "No Title"}</h1>

                    <p className='text-gray-500 text-xl text-center'>{post.subtitle || "No Title"}</p>

                    <div className="py-10">
                        <Image src={post.img || "/"} width={900} height={600}></Image>
                    </div>

                    <div className="content text-gray-600 text-lg flex flex-col gap-4">
                        {post.description || "No Description"}
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur 
                        </p>
                        
                    </div>
                </div>  
                {/* <RelatedPost /> */}
            </section>
            :
            <p className="text-center py-3 ">Loading....</p>
        }
        </>
    )
}

export default PostId;
