import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"
import Container from "../global/container"

const HeroSection = () => {
  return (
    <section className="w-full h-[calc(100vh-112px)] pb-4 border-b-[2px] border-b-beeBlack-secondary bg-beeBlack-primary">
      <Swiper
        autoplay
        pagination
        slidesPerGroup={1}
        modules={[Autoplay, Pagination]}
        className="relative h-full p-4 flex items-center justify-center"
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <SwiperSlide
            key={i}
            className="flex items-center justify-center flex-col absolute top-1/2 !-translate-y-1/2 !h-[200px]"
          >
            <Container className="w-full h-full flex items-center justify-center">
              <p className="text-2xl text-beeWhiteSmoke">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              </p>
              <p className="text-xl text-beeYellow-secondary">{i + 1}</p>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSection
