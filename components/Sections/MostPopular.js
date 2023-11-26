"use client"

import Post from "../elements/Post"

const MostPopular = () => {

    return (
        <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
        <div className="flex gap-6">
            <Post 
                parentContainerSyle="grid"
                titleStyle="text-3xl"
                width="500"
                height="400"
            />
            <Post 
                parentContainerSyle="grid"
                titleStyle="text-3xl"
                width="500"
                height="400"
            />
        </div>    
    </section>
    )
}

export default MostPopular