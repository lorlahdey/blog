// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper';
// import { Autoplay } from 'swiper/modules'
// Import Swiper styles
// import 'swiper/css';
import Slide from "../elements/Slide";

const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right"
}

const TrendingSection = () => {
    // Initialize SwiperCore
    // SwiperCore.use([Autoplay]);
    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending Post</h1>
                <Slide></Slide>
                {/* <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay= {{
                        delay: 2000
                    }}
                >
                    <SwiperSlide><Slide></Slide></SwiperSlide>
                    <SwiperSlide><Slide></Slide></SwiperSlide>
                    <SwiperSlide><Slide></Slide></SwiperSlide>
                    <SwiperSlide><Slide></Slide></SwiperSlide>
                    <SwiperSlide><Slide></Slide></SwiperSlide>
                </Swiper> */}
            </div>
        </section>
    )
}

export default TrendingSection;