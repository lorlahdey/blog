import Image from "next/image"
import Link from "next/link"
import Author from "./Author";

const Slide = () => {
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}><Image src={"/images/img1.jpg"} width={600} height={600} /></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- July 3, 2022</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"> most unhappy customers are your greatest source of learning</Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}

export default Slide;