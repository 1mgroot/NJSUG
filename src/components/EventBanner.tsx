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

// Real event photos for banner carousel
const eventPhotos: EventPhoto[] = [
  { id: 1, src: '/images/event-photos/ChenWangHost.jpg', alt: 'Host by Chen Wang', caption: 'Host by Chen Wang' },
  { id: 2, src: '/images/event-photos/Changhong_1.jpg', alt: 'Changhong Shi Opening Remarks', caption: 'Opening Remarks by Changhong Shi' },
  { id: 3, src: '/images/event-photos/Jeff_1.jpg', alt: 'Jeff Xia Closing Remarks', caption: 'Closing Remarks by Jeff Xia' },
  { id: 4, src: '/images/event-photos/Melodie_1.jpg', alt: 'Melodie Rush Presentation', caption: 'SAS®, SQL, R, and Python: We\'re All Friends by Melodie Rush' },
  { id: 5, src: '/images/event-photos/Pavan_1.jpg', alt: 'Sri Pavan Vemuri R Shiny Presentation', caption: 'R Shiny Dev Process and Use Cases by Sri Pavan Vemuri' },
  { id: 6, src: '/images/event-photos/Group_1.jpg', alt: 'NJSUG 2025 Spring Meeting Group Photo', caption: 'NJSUG 2025 Spring Meeting' },
  { id: 7, src: '/images/event-photos/Panel_2.jpg', alt: 'Panel Discussion Session', caption: 'Panel Discussion: Navigating the Future of Statistical Programming' },
  { id: 8, src: '/images/event-photos/Panel_4.jpg', alt: 'Panel Discussion Continued', caption: 'Panel Discussion: Navigating the Future of Statistical Programming' },
  { id: 9, src: '/images/event-photos/Kevin_3.jpg', alt: 'Kevin Lee Gen AI Presentation', caption: 'Gen AI in Biometrics: Transforming Clinical Trials by Kevin Lee' },
  { id: 10, src: '/images/event-photos/3.jpg', alt: 'Coffee' },
  { id: 11, src: '/images/event-photos/4.jpg', alt: 'Interactive Session'},
  { id: 12, src: '/images/event-photos/8.jpg', alt: 'Coffee Break Networking' },
]

export function EventBanner() {
  return (
    <section className="w-screen relative left-[50%] right-[50%] mx-[-50vw]">
      <div className="relative w-full aspect-[16/9] max-h-[75vh] md:max-h-[78vh] lg:max-h-[82vh]">
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
            delay: 2000,
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
                  className="object-cover object-[center_60%] brightness-110 contrast-105 saturate-110"
                  priority={photo.id === 1}
                  sizes="100vw"
                />
                
                {/* Vignette overlays for premium depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" aria-hidden="true" />
                <div className="absolute inset-0 bg-[radial-gradient(110%_75%_at_50%_30%,transparent_0%,rgba(255,255,255,0.05)_45%,rgba(0,0,0,0.4)_100%)]" aria-hidden="true" />
                
                {/* Caption overlay */}
                {photo.caption && (
                  <div className="absolute left-4 md:left-10 bottom-6 md:bottom-12 w-[88%] max-w-2xl">
                    <div className="rounded-2xl border border-white/25 bg-white/12 backdrop-blur-md shadow-[0_16px_48px_-16px_rgba(0,0,0,0.5)] px-5 py-4 md:px-7 md:py-5 text-left">
                      <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
                        {photo.caption}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/15 hover:bg-white/25 text-white p-2 rounded-full transition-colors duration-300 border border-white/30 backdrop-blur-md shadow-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button className="swiper-button-next-custom absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/15 hover:bg-white/25 text-white p-2 rounded-full transition-colors duration-300 border border-white/30 backdrop-blur-md shadow-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 18px;
          height: 6px;
          background: rgba(255,255,255,0.5);
          border-radius: 9999px;
          margin: 0 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px -10px rgba(0,0,0,0.6);
        }
        .swiper-pagination-bullet-active-custom {
          background: rgba(255,255,255,0.98);
          transform: scale(1.1);
        }
        .swiper-pagination {
          bottom: 18px !important;
        }
        @media (min-width: 768px) {
          .swiper-pagination {
            bottom: 26px !important;
          }
        }
      `}</style>
    </section>
  )
}
