import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import PdfCard from "./PdfCard"

export default function Carousel({ items, onOpen }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
      spaceBetween={20}
      className="w-full"
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <PdfCard item={item} onOpen={onOpen} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}