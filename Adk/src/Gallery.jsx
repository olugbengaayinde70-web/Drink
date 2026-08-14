import React, { useState, useEffect } from 'react'

function Gallery({ items = [] }) {
  const [active, setActive] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!items.length) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [items.length])

  const currentItem = items[currentIndex] || items[0]

  useEffect(() => {
    if (items.length > 0) {
      setActive(items[currentIndex])
    }
  }, [currentIndex, items])

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  return (
    <section id="gallery-section" data-animate className="max-w-6xl mx-auto px-4 md:px-8 py-12" aria-labelledby="gallery-heading">
      <div className="text-center mb-8">
        <h2 id="gallery-heading" className="text-3xl md:text-4xl font-extrabold" style={{color: '#3A2118'}}>Gallery & Showcase</h2>
        <p className="mx-auto max-w-2xl text-sm md:text-base mt-2" style={{color: '#625A54'}}>A rotating showcase of our full product range — fresh, vibrant, and ready for every order.</p>
      </div>

      {currentItem && (
        <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-red-100 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="relative h-[420px] md:h-[520px] bg-gradient-to-br from-orange-50 via-white to-red-50">
              <img src={currentItem.image} alt={currentItem.name} className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

              <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8 max-w-md">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white bg-red-600/80 mb-3">
                  {currentItem.badge || 'Featured'}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2">{currentItem.name}</h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed">{currentItem.description}</p>
              </div>

              <div className="absolute right-4 top-4 md:right-6 md:top-6 flex gap-3">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="flex items-center justify-center h-11 w-11 rounded-full bg-white/85 text-xl font-bold text-red-600 shadow-lg hover:bg-white transition"
                  aria-label="Previous product"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="flex items-center justify-center h-11 w-11 rounded-full bg-white/85 text-xl font-bold text-red-600 shadow-lg hover:bg-white transition"
                  aria-label="Next product"
                >
                  ›
                </button>
              </div>

              <div className="absolute left-6 right-6 bottom-6 md:left-8 md:right-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {items.map((item, index) => (
                    <button
                      key={`${item.id}-dot`}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === currentIndex ? 'w-10 bg-white' : 'w-2.5 bg-white/60 hover:bg-white/80'
                      }`}
                      aria-label={`Go to product ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {currentIndex + 1} / {items.length}
                </div>
              </div>
            </div>

            <div className="p-5 md:p-6 bg-[#fffaf5] flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-2">Showcase</p>
                <h4 className="text-2xl font-black mb-4" style={{color: '#3A2118'}}>All Products</h4>
              </div>

              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                {items.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`w-full flex items-center gap-3 rounded-2xl p-3 text-left transition-all ${
                      index === currentIndex ? 'bg-gradient-to-r from-red-500 to-orange-400 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-red-50'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/50 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-bold truncate">{item.name}</p>
                        <span className={`text-[10px] font-bold uppercase tracking-wide ${index === currentIndex ? 'text-white/80' : 'text-red-500'}`}>
                          {item.badge || 'Hot'}
                        </span>
                      </div>
                      <p className={`text-xs ${index === currentIndex ? 'text-white/80' : 'text-gray-500'}`}>
                        {item.category?.replace('-', ' ') || 'Product'}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
