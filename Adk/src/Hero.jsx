import React, { useState, useEffect } from 'react'

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div id="home" data-animate className='w-full min-h-screen flex items-center justify-center px-4 py-12 md:py-0 relative overflow-hidden' style={{backgroundColor: '#FFF9F2'}}>
      {/* Decorative Background Elements */}
      <div className='absolute top-10 right-10 w-40 h-40 rounded-full blur-3xl' style={{backgroundColor: 'rgba(217, 30, 24, 0.15)'}}></div>
      <div className='absolute bottom-20 left-10 w-52 h-52 rounded-full blur-3xl' style={{backgroundColor: 'rgba(245, 158, 11, 0.12)'}}></div>
      <div className='absolute top-1/3 left-1/4 w-32 h-32 rounded-full blur-2xl' style={{backgroundColor: 'rgba(132, 204, 22, 0.12)'}}></div>

      <div className='max-w-7xl mx-auto w-full relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
          {/* Left Column - Content */}
          <div className='flex flex-col justify-center space-y-8'>
            {/* Badge */}
            <div
              className={`inline-flex w-fit items-center gap-2 px-6 py-2 rounded-full border-2 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{backgroundColor: '#FFF1E5', borderColor: '#D91E18'}}
            >
              <span className='text-lg'>✨</span>
              <span className='font-bold text-transparent bg-clip-text' style={{backgroundImage: 'linear-gradient(to right, #D91E18, #F59E0B)'}}>
                Fresh. Natural. Delicious.
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{color: '#3A2118'}}
            >
              Adk Trading Store
              <span className='block text-lg font-medium text-gray-600 mt-2' style={{color: '#625A54'}}>Refreshing drinks, handcrafted daily</span>
            </h1>

            {/* Description */}
            <p
              className={`text-lg md:text-xl leading-relaxed max-w-xl transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{color: '#625A54'}}
            >
              Enjoy a wide variety of tasty, hygienic and affordable drinks made from the finest ingredients. 🥗 🍊
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Primary Button */}
              <a
                href='https://wa.me/2348032821294'
                target='_blank'
                rel='noopener noreferrer'
                className='group relative px-10 py-4 text-white font-bold text-lg rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95'
                style={{background: 'linear-gradient(to right, #D91E18, #F04438)'}}
              >
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  🛒 Order Now
                </span>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' style={{background: 'linear-gradient(to right, #B91814, #D91E18)'}}></div>
              </a>

              {/* Secondary Button */}
              <button
                onClick={() => scrollToSection('drinks-section')}
                className='group relative px-10 py-4 text-white font-bold text-lg rounded-xl border-3 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95'
                style={{color: '#D91E18', borderColor: '#D91E18', backgroundColor: '#FFFFFF'}}
              >
                <span className='relative z-10 flex items-center justify-center gap-2 transition-colors duration-300'>
                  👀 View Our Drinks
                </span>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' style={{backgroundColor: '#FFF1E5'}}></div>
              </button>
            </div>

            {/* Trust Features */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {[
                { icon: '🌱', title: 'Fresh Ingredients', desc: 'Sourced daily' },
                { icon: '✅', title: 'Hygienically Prepared', desc: 'Quality assured' },
                { icon: '💰', title: 'Affordable Prices', desc: 'Best value' }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className='group relative p-4 rounded-xl border-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
                  style={{backgroundColor: '#FFFFFF', borderColor: '#D91E18'}}
                >
                  <div className='flex items-start gap-3'>
                    <span className='text-2xl group-hover:scale-125 transition-transform duration-300'>{feature.icon}</span>
                    <div>
                      <p className='font-bold text-sm' style={{color: '#3A2118'}}>{feature.title}</p>
                      <p className='text-xs' style={{color: '#625A54'}}>{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Drinks & Fruits Visual */}
          <div
            className={`relative h-96 md:h-screen md:min-h-screen md:-my-12 md:-mr-8 transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Background Container */}
            <div className='absolute inset-0 rounded-3xl' style={{background: 'linear-gradient(135deg, rgba(217, 30, 24, 0.05), rgba(245, 158, 11, 0.03), rgba(132, 204, 22, 0.05))'}}></div>

            {/* Decorative Leaves */}
            <div className='absolute -top-10 right-0 text-6xl animate-float'>🍃</div>
            <div className='absolute top-1/3 -left-5 text-5xl animate-float' style={{ animationDelay: '2s' }}>🌿</div>
            <div className='absolute bottom-20 right-10 text-4xl animate-float' style={{ animationDelay: '1s' }}>🍂</div>

            {/* Fruits - Surrounding the drinks */}
            <div className='absolute top-5 left-5 text-6xl animate-bounce-slow'>🍊</div>
            <div className='absolute top-1/4 right-10 text-5xl animate-float' style={{ animationDelay: '3s' }}>🍓</div>
            <div className='absolute bottom-32 left-8 text-6xl animate-bounce-slow' style={{ animationDelay: '2s' }}>🍍</div>
            <div className='absolute bottom-20 right-1/4 text-5xl animate-float' style={{ animationDelay: '1.5s' }}>🍇</div>
            <div className='absolute top-1/2 -left-3 text-4xl animate-float' style={{ animationDelay: '4s' }}>🍌</div>

            {/* Center Container for Drinks */}
            <div className='absolute inset-0 flex items-center justify-center perspective'>
              <div className='relative w-full h-full flex items-center justify-center'>
                {/* Drink Bottles - Arranged in a showcase */}
                <div className='relative w-full h-full max-w-sm'>
                  {/* Bottle 1 - Center Back */}
                  <div
                    className='absolute left-1/2 top-1/4 -translate-x-1/2 z-30 animate-float'
                    style={{
                      animationDelay: '0s',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))'
                    }}
                  >
                    <div className='relative w-20 h-40 md:w-28 md:h-56 rounded-3xl overflow-hidden bg-gradient-to-b from-orange-300 via-orange-400 to-orange-600 shadow-2xl transform -rotate-12'>
                      {/* Bottle Cap */}
                      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 md:w-12 md:h-6 bg-gradient-to-b from-red-900 to-red-950 rounded-t-2xl shadow-lg'></div>
                      {/* Liquid Fill - Pineapple Juice */}
                      <div className='absolute bottom-0 w-full h-3/4 bg-gradient-to-b from-orange-400 to-orange-600 opacity-80'></div>
                      {/* Shine Effect */}
                      <div className='absolute top-2 left-3 w-1/3 h-1/2 bg-white/30 rounded-full blur-xl'></div>
                      {/* Label */}
                      <div className='absolute inset-x-2 top-1/2 text-center'>
                        <p className='text-xs md:text-sm font-bold text-white drop-shadow'>🍍</p>
                        <p className='text-xs text-white/80'>Pineapple</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottle 2 - Left */}
                  <div
                    className='absolute left-5 top-1/3 z-20 animate-float'
                    style={{
                      animationDelay: '1s',
                      filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.12))'
                    }}
                  >
                    <div className='relative w-18 h-36 md:w-24 md:h-48 rounded-2xl overflow-hidden bg-gradient-to-b from-red-400 via-red-500 to-red-700 shadow-xl transform rotate-6'>
                      {/* Bottle Cap */}
                      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-6 h-3 md:w-10 md:h-5 bg-gradient-to-b from-amber-800 to-amber-950 rounded-t-xl shadow-lg'></div>
                      {/* Liquid Fill - Zobo */}
                      <div className='absolute bottom-0 w-full h-4/5 bg-gradient-to-b from-red-500 to-red-700 opacity-85'></div>
                      {/* Shine Effect */}
                      <div className='absolute top-1 left-2 w-1/4 h-2/5 bg-white/25 rounded-full blur-lg'></div>
                      {/* Label */}
                      <div className='absolute inset-x-1 top-1/2 text-center'>
                        <p className='text-xs md:text-sm font-bold text-white drop-shadow'>🌸</p>
                        <p className='text-xs text-white/80'>Zobo</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottle 3 - Right */}
                  <div
                    className='absolute right-5 top-1/4 z-20 animate-float'
                    style={{
                      animationDelay: '2s',
                      filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.12))'
                    }}
                  >
                    <div className='relative w-18 h-36 md:w-24 md:h-48 rounded-2xl overflow-hidden bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600 shadow-xl transform -rotate-6'>
                      {/* Bottle Cap */}
                      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-6 h-3 md:w-10 md:h-5 bg-gradient-to-b from-amber-700 to-amber-900 rounded-t-xl shadow-lg'></div>
                      {/* Liquid Fill - Mango Juice */}
                      <div className='absolute bottom-0 w-full h-4/5 bg-gradient-to-b from-yellow-400 to-yellow-600 opacity-85'></div>
                      {/* Shine Effect */}
                      <div className='absolute top-1 right-2 w-1/4 h-2/5 bg-white/25 rounded-full blur-lg'></div>
                      {/* Label */}
                      <div className='absolute inset-x-1 top-1/2 text-center'>
                        <p className='text-xs md:text-sm font-bold text-white drop-shadow'>🥭</p>
                        <p className='text-xs text-white/80'>Mango</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottle 4 - Front Left */}
                  <div
                    className='absolute left-0 bottom-10 md:bottom-20 z-40 animate-float'
                    style={{
                      animationDelay: '1.5s',
                      filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.2))'
                    }}
                  >
                    <div className='relative w-20 h-44 md:w-28 md:h-56 rounded-3xl overflow-hidden bg-gradient-to-b from-pink-300 via-pink-400 to-pink-600 shadow-2xl transform -rotate-3'>
                      {/* Bottle Cap */}
                      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 md:w-12 md:h-6 bg-gradient-to-b from-red-900 to-red-950 rounded-t-2xl shadow-lg'></div>
                      {/* Liquid Fill - Chapman */}
                      <div className='absolute bottom-0 w-full h-3/4 bg-gradient-to-b from-pink-400 to-pink-600 opacity-85'></div>
                      {/* Shine Effect */}
                      <div className='absolute top-3 left-4 w-1/3 h-1/2 bg-white/30 rounded-full blur-xl'></div>
                      {/* Label */}
                      <div className='absolute inset-x-2 top-1/2 text-center'>
                        <p className='text-xs md:text-sm font-bold text-white drop-shadow'>🍊</p>
                        <p className='text-xs text-white/80'>Chapman</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottle 5 - Front Right */}
                  <div
                    className='absolute right-0 bottom-10 md:bottom-20 z-40 animate-float'
                    style={{
                      animationDelay: '2.5s',
                      filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.2))'
                    }}
                  >
                    <div className='relative w-20 h-44 md:w-28 md:h-56 rounded-3xl overflow-hidden bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 shadow-2xl transform rotate-3'>
                      {/* Bottle Cap */}
                      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 md:w-12 md:h-6 bg-gradient-to-b from-orange-900 to-orange-950 rounded-t-2xl shadow-lg'></div>
                      {/* Liquid Fill - Tiger Nut */}
                      <div className='absolute bottom-0 w-full h-3/4 bg-gradient-to-b from-amber-400 to-amber-600 opacity-85'></div>
                      {/* Shine Effect */}
                      <div className='absolute top-3 right-4 w-1/3 h-1/2 bg-white/30 rounded-full blur-xl'></div>
                      {/* Label */}
                      <div className='absolute inset-x-2 top-1/2 text-center'>
                        <p className='text-xs md:text-sm font-bold text-white drop-shadow'>🥜</p>
                        <p className='text-xs text-white/80'>Tiger Nut</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes via style tag */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-bounce-slow {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Hero
