import React, { useState } from 'react'

function Gallery({ items = [] }) {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery-section" data-animate className="max-w-6xl mx-auto px-4 md:px-8 py-12" aria-labelledby="gallery-heading">
      <div className="text-center mb-8">
        <h2 id="gallery-heading" className="text-3xl md:text-4xl font-extrabold" style={{color: '#3A2118'}}>Gallery & Showcase</h2>
        <p className="mx-auto max-w-2xl text-sm md:text-base mt-2" style={{color: '#625A54'}}>A visual taste of our top creations — handcrafted and beautifully presented.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <button
            key={item.id}
            data-animate
            onClick={() => setActive(item)}
            className="group text-left p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform bg-white"
            aria-label={`Open details for ${item.name}`}
          >
            <div className="mb-4 rounded-xl overflow-hidden w-full h-48 bg-gray-50 flex items-center justify-center">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold" style={{color: '#3A2118'}}>{item.name}</h3>
            <p className="text-sm mt-2" style={{color: '#625A54'}}>{item.description}</p>
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mb-4 rounded-2xl overflow-hidden w-full h-56 bg-gray-50 flex items-center justify-center">
                  <img src={active.image} alt={active.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-extrabold mb-2" style={{color: '#3A2118'}}>{active.name}</h3>
                <p className="text-sm" style={{color: '#625A54'}}>{active.description}</p>
              </div>
              <div className="text-right">
                <p className="text-sm mb-4" style={{color: '#625A54'}}>Price</p>
                <p className="text-3xl font-black text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(to right, #D91E18, #F59E0B)'}}>${active.price.toFixed(2)}</p>
                <button onClick={() => setActive(null)} className="mt-6 px-6 py-3 bg-gray-100 rounded-lg">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
