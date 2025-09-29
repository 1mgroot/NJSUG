'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface EventPhoto {
  id: number
  src: string
  alt: string
  caption?: string
}

// Event photos for banner carousel
const eventPhotos: EventPhoto[] = [
  { id: 1, src: '/images/NJSUGBanner.svg', alt: 'NJSUG Event Photo 1', caption: 'NJSUG 2025 Spring Meeting' },
  { id: 2, src: '/images/NJSUGLogo.png', alt: 'NJSUG Event Photo 2', caption: 'Networking Session' },
  { id: 3, src: '/images/committee/Changhong Shi.jpg', alt: 'NJSUG Event Photo 3', caption: 'Opening Presentations' },
  { id: 4, src: '/images/committee/Chen Wang.jpg', alt: 'NJSUG Event Photo 4', caption: 'Technical Discussions' },
  { id: 5, src: '/images/committee/jeff-xia-2024-1.jpg', alt: 'NJSUG Event Photo 5', caption: 'Panel Sessions' },
  { id: 6, src: '/images/committee/Junze.png', alt: 'NJSUG Event Photo 6', caption: 'Group Activities' },
  { id: 7, src: '/images/NJSUGBanner.svg', alt: 'NJSUG Event Photo 7', caption: 'Workshop Sessions' },
  { id: 8, src: '/images/NJSUGLogo.png', alt: 'NJSUG Event Photo 8', caption: 'Coffee Breaks' },
  { id: 9, src: '/images/committee/Changhong Shi.jpg', alt: 'NJSUG Event Photo 9', caption: 'Interactive Sessions' },
  { id: 10, src: '/images/committee/Chen Wang.jpg', alt: 'NJSUG Event Photo 10', caption: 'Closing Ceremony' },
  { id: 11, src: '/images/committee/jeff-xia-2024-1.jpg', alt: 'NJSUG Event Photo 11', caption: 'Lunch & Networking' },
  { id: 12, src: '/images/committee/Junze.png', alt: 'NJSUG Event Photo 12', caption: 'Awards & Recognition' },
  { id: 13, src: '/images/NJSUGBanner.svg', alt: 'NJSUG Event Photo 13', caption: 'Community Building' },
  { id: 14, src: '/images/NJSUGLogo.png', alt: 'NJSUG Event Photo 14', caption: 'Knowledge Sharing' },
  { id: 15, src: '/images/committee/Changhong Shi.jpg', alt: 'NJSUG Event Photo 15', caption: 'Future Planning' }
]

export function EventBanner() {
  return (
    <section className="w-screen relative left-[50%] right-[50%] mx-[-50vw]">
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          loop={true}
          className="w-full h-full"
        >
          {eventPhotos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <div className="relative w-full h-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  priority={photo.id === 1}
                  sizes="100vw"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                
                {/* Caption overlay */}
                {photo.caption && (
                  <div className="absolute bottom-8 left-8 right-8 md:bottom-16 md:left-16 md:right-16">
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 md:p-6">
                      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                        {photo.caption}
                      </h3>
                      <p className="text-sm md:text-lg text-white/90">
                        NJSUG 2025 Spring Meeting - May 13th, 2025
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: white;
          transform: scale(1.2);
        }
        
        .swiper-pagination {
          bottom: 20px !important;
        }
        
        @media (min-width: 768px) {
          .swiper-pagination {
            bottom: 30px !important;
          }
        }
      `}</style>
    </section>
  )
}
