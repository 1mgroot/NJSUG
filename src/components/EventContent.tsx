export function EventContent() {
  return (
    <div className="py-12 md:py-24 font-mono">
      <div className="container mx-auto px-4">
        {/* Grid Layout Container */}
        <div className="grid grid-cols-4 gap-8">
          {/* Left Column - Title */}
          <div className="col-span-1">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl" >
                NJSUG 2025
              </h1>
              <h1 className='text-4xl'>
                Spring Meeting
              </h1>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-2 col-start-3 text-white/50">
            {/* Event Details */}
            <div >
              <h2 className="text-2xl font-bold">
                Date: May 13th, 2025
              </h2>
              <h2 className="text-2xl font-bold">
                Time: 9:00 AM - 1:00 PM 
              </h2>
              <h2 className="text-2xl font-bold">
                Location: Hyatt House Branchburg / Bridgewater
              </h2>
              <h2 className='text-2xl font-bold mb-2'>
                Address: 3141 US-22, Branchburg, NJ 08876
              </h2>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
} 