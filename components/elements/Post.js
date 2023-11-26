import Link from "next/link"
import Image from "next/image"
import Author from "./Author";


const Post = ({parentContainerSyle, img, title, path, description, category, published, width, height, imageContainerStyle, imageStyle, titleStyle, detailStyle }) => {
    return (
        <div className={`item ${parentContainerSyle}`}>
            <div className={` images ${imageContainerStyle}`}>
                <Link href={"/"}><Image src={img} className={` ${imageStyle}`} width={width} height={height} /></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/posts/${path}`} className="text-orange-600 hover:text-orange-800">{category}</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- {published}</Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${path}`} className={`${titleStyle} font-bold text-gray-800 hover:text-gray-600`}>{title}</Link>
                </div>
                <p className={`text-gray-500 py-3 ${detailStyle}`}>
                    {description}
                </p>
                <Author></Author>
            </div>
        </div>
    )
}

export default Post;