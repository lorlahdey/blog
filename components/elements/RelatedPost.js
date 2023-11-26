import Post from "./Post";


const RelatedPost = () => {
    return (
        <section className="pt-20">
             <h1 className="font-bold text-3xl py-10">Related</h1>

             <div className="flex flex-col gap-10">
                <Post 
                    parentContainerSyle="flex gap-5"
                    imageContainerStyle='image flex flex-col justify-start'
                    imageStyle="rounded"
                    titleStyle="text-xl"
                    width="300"
                    height="200"
                    detailStyle='hidden'
                />
                <Post 
                    parentContainerSyle="flex gap-5"
                    imageContainerStyle='image flex flex-col justify-start'
                    imageStyle="rounded"
                    titleStyle="text-xl"
                    width="300"
                    height="200"
                    detailStyle='hidden'
                />
                <Post 
                    parentContainerSyle="flex gap-5"
                    imageContainerStyle='image flex flex-col justify-start'
                    imageStyle="rounded"
                    titleStyle="text-xl"
                    width="300"
                    height="200"
                    detailStyle='hidden'
                />
             </div>
        </section>
    )
}

export default RelatedPost;