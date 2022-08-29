import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/swiper.scss"; // core Swiper
// import "swiper/modules/navigation/navigation.scss"; // Navigation module
// import "swiper/css";
// import "swiper/css/navigation";
import Image from "next/image";

import styles from "../styles/slider.module.scss";

export default function Slider() {
  return (
    <div className={styles.container_slider}>
      <Swiper
        modules={[Navigation, Autoplay]}
        centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          clickable: true,
          /* nextEl: ".swiperButtonPrev",
            prevEl: ".swiperButtonNext", */
        }}
        className={styles.Swiper}
        loop={true}
        breakpoints={{
          1445: {
            spaceBetween: 71,
            slidesPerView: 2,
          },
          950: {
            spaceBetween: 71,
            slidesPerView: 2,
          },
          760: {
            spaceBetween: 90,
            slidesPerView: 1.5,
          },
          400: {
            spaceBetween: 20,
            slidesPerView: 1.1,
          },
        }}
      >
        <SwiperSlide>
          <Image
            className={styles.imageSlide}
            class={styles.images}
            src="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1660753331/rent/_explore_xzwukj.jpg"
            alt=""
            width={610}
            height={397}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1660753331/rent/_explore_xzwukj.jpg"
            className={styles.images}
            alt="slide2"
            width={610}
            height={397}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1660753331/rent/_explore_xzwukj.jpg"
            className={styles.images}
            alt="slide3"
            width={610}
            height={397}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
