'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const venuePhotos = [
  {
    src: '/images/event-photos/njha-conference-room.jpg',
    alt: 'Meeting room at the NJHA Conference and Event Center',
  },
  {
    src: '/images/event-photos/njha-reception.jpg',
    alt: 'Reception area at the NJHA Conference and Event Center',
  },
]

export function VenuePhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % venuePhotos.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + venuePhotos.length) % venuePhotos.length)
  }

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % venuePhotos.length)
  }

  return (
    <div
      aria-label="NJHA Conference and Event Center venue photos"
      aria-roledescription="carousel"
      className="relative min-h-64 overflow-hidden lg:min-h-80"
    >
      {venuePhotos.map((photo, index) => (
        <div
          key={photo.src}
          aria-hidden={index !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/55 to-transparent p-4">
        <span className="rounded-full bg-black/35 px-3 py-1 text-xs font-medium text-white">
          {activeIndex + 1} / {venuePhotos.length}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Show previous venue photo"
            onClick={showPrevious}
            className="inline-flex size-9 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Show next venue photo"
            onClick={showNext}
            className="inline-flex size-9 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
