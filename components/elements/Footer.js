import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'
import Newsletter from "./Newsletter";

const bg = {
    backgroundImage : "url('/images/footer.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "bottom left"
}

const Footer = () => {
    return (
        <footer className="bg-gray-50" style={bg}>
            <Newsletter></Newsletter>
            <div className="container mx-auto flex justify-center py-12">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
                            <Link href={"/"}><ImFacebook color="#888888" /></Link>
                            <Link href={"/"}><ImTwitter color="#888888" /></Link>                    
                            <Link href={"/"}><ImYoutube color="#888888" /></Link>
                    </div>
                    <p className="py-5 text-gray-400">Copyright ©2023 All rights reserved | This template is made with  by Daily Tuition</p>
                    <p className="text-gray-400 text-center">Terms & Condition</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;