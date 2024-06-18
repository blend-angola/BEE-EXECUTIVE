import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"

const heroImages = ["/hero/hero-1.png", "/hero/hero-2.png"]

const HeroSection = () => {
  return (
    <section className="w-full h-[calc(100vh-112px)]">
      <Swiper
        autoplay
        pagination
        slidesPerGroup={1}
        modules={[Autoplay, Pagination]}
        className="relative h-full flex items-center justify-center"
      >
        {heroImages.map((img, i) => (
          <SwiperSlide key={i} className="relative w-full h-full">
            <img
              src={img}
              alt="banner"
              loading="lazy"
              className="absolute w-full h-full object-cover inset-0"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSection
