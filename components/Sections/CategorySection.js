import Post from "../elements/Post"

const CategorySection = () => {
    return (
        <section className="container mx-auto md:px-20 py-16">
        <div className="grid lg:grid-cols-2">
            <div className="item">
                <h1 className="font-bold text-4xl py-12">Business</h1>
                <div className="flex flex-col gap-6">
                    <Post 
                        parentContainerSyle="flex gap-5"
                        imageContainerStyle='image flex flex-col justify-start'
                        imageStyle="rounded"
                        titleStyle="text-xl"
                        width="300"
                        height="250"
                        detailStyle='hidden'
                    />
                    <Post 
                        parentContainerSyle="flex gap-5"
                        imageContainerStyle='image flex flex-col justify-start'
                        imageStyle="rounded"
                        titleStyle="text-xl"
                        width="300"
                        height="250"
                        detailStyle='hidden'
                    />
                    <Post 
                        parentContainerSyle="flex gap-5"
                        imageContainerStyle='image flex flex-col justify-start'
                        imageStyle="rounded"
                        titleStyle="text-xl"
                        width="300"
                        height="250"
                        detailStyle='hidden'
                    />
                </div>
            </div>
            <div className="item">
                <h1 className="font-bold text-4xl py-12">Travel</h1>
                <div className="flex flex-col gap-6">
                    <Post 
                        parentContainerSyle="flex gap-5"
                        imageContainerStyle='image flex flex-col justify-start'
                        imageStyle="rounded"
                        titleStyle="text-xl"
                        width="300"
                        height="250"
                        detailStyle='hidden'
                    />
                    <Post 
                        parentContainerSyle="flex gap-5"
                        imageContainerStyle='image flex flex-col justify-start'
                        imageStyle="rounded"
                        titleStyle="text-xl"
                        width="300"
                        height="250"
                        detailStyle='hidden'
                    />
                    <Post 
                        parentContainerSyle="flex gap-5"
                        imageContainerStyle='image flex flex-col justify-start'
                        imageStyle="rounded"
                        titleStyle="text-xl"
                        width="300"
                        height="250"
                        detailStyle='hidden'
                    />
                </div>
            </div>
        </div>
    </section>
    )
}

export default CategorySection;