import React from 'react'

function About() {
  return (
    <section id="about-section" data-animate className="max-w-6xl mx-auto px-4 md:px-8 py-16" aria-labelledby="about-heading">
      <div className="text-center">
        <h2 id="about-heading" className="text-4xl md:text-5xl font-extrabold mb-4" style={{color: '#3A2118'}}>About Adk Trading Store</h2>
        <p className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed" style={{color: '#625A54'}}>
          Born from a simple love of fresh flavors and warm hospitality, Adk Trading Store crafts small-batch beverages using real fruit, whole spices, and sustainably sourced ingredients. We blend reliable recipes with careful preparation to deliver bright, balanced, and memorable drinks — whether you want a cooling lemonade, a creamy milkshake, or an energizing cold brew.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2" style={{color: '#3A2118'}}>Our Promise</h3>
          <p className="text-sm leading-relaxed" style={{color: '#625A54'}}>Real ingredients, transparent sourcing, and handcrafted recipes. We never use concentrates or artificial additives.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2" style={{color: '#3A2118'}}>Sustainability</h3>
          <p className="text-sm leading-relaxed" style={{color: '#625A54'}}>Packaging and supply choices are made to reduce waste — from recyclable bottles to partnerships with local farmers.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2" style={{color: '#3A2118'}}>Community</h3>
          <p className="text-sm leading-relaxed" style={{color: '#625A54'}}>We support neighbourhood events and donate a portion of seasonal proceeds to local food programs.</p>
        </div>
      </div>
    </section>
  )
}

export default About