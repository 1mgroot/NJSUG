import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Banner() {
  return (
    <section className="w-screen relative left-[50%] right-[50%] mx-[-50vw]">
      <div className="relative w-full h-[30vh]">
        <Image
          src="/images/NJSUGBanner.svg"
          alt="NJSUG Banner"
          fill
          className={cn(
            "object-cover",
            "transition-opacity duration-300"
          )}
          priority
        />
      </div>
    </section>
  )
} 