"use client"
import { useState, useEffect } from "react"

import Post from "../elements/Post";

const LatestPosts = () => {
    const [ loading, setLoading ] = useState(false)
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetchFromApi();
    }, []);

    const fetchFromApi = async () => {
        try {
            setLoading(true)
            const res = await fetch(`/api/popular`, {
                headers: {
                    Accept: "application/json",
                    method: "GET"
                }
            })
            if (res) {
                const {Popular} = await res.json()
                if (Popular) setPost(Popular)
            }
        }catch (err) {
            return err
        }

    }

    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

            {/* grid columns */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            { post ?
                post.map((value, index) => (
                    <Post  key={index}
                        parentContainerSyle="item"
                        imageStyle="rounded"
                        titleStyle="text-xl"
                        width="500"
                        height="350"
                        img={value.img} 
                        title={value.title} 
                        description={value.description}
                        category={value.category}
                        published={value.published}
                        path={value.id}
                    />
                ))
                :
                <p className="text-center">Loading....</p>
            }
            </div>
        </section>
    )
}

export default LatestPosts;