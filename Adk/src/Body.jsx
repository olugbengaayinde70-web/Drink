import React, { useState, useEffect } from 'react'
import Gallery from './Gallery'

function Body() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cartCount, setCartCount] = useState(0)
  const [hoveredId, setHoveredId] = useState(null)
  const [showCheckout, setShowCheckout] = useState(false)
  const [badgeFilter, setBadgeFilter] = useState(null)

  const drinks = [
    {
      id: 1,
      name: 'Classic Lemonade',
      image: '/fanta.jpeg',
      category: 'refreshing',
      emoji: '🍋',
      description: 'Fresh squeezed lemon juice with sugar and ice',
      price: 3.99,
      rating: 4.8,
      badge: 'bestseller',
      reviews: 128
    },
    {
      id: 2,
      name: 'Tropical Mango',
      image: '/am%20cola.jpeg',
      category: 'tropical',
      emoji: '🥭',
      description: 'Sweet mango puree blended with coconut cream',
      price: 5.49,
      rating: 4.9,
      badge: 'popular',
      reviews: 156
    },
    {
      id: 3,
      name: 'Berry Blast',
      image: '/fearless.jpeg',
      category: 'fruity',
      emoji: '🍓',
      description: 'Mixed berries smoothie with yogurt',
      price: 5.99,
      rating: 4.7,
      badge: 'healthy',
      reviews: 92
    },
    {
      id: 4,
      name: 'Iced Coffee',
      image: '/pepsi.jpeg',
      category: 'coffee',
      emoji: '☕',
      description: 'Cold brew espresso with creamy milk',
      price: 4.49,
      rating: 4.6,
      badge: null,
      reviews: 87
    },
    {
      id: 5,
      name: 'Watermelon Cooler',
      image: '/rc.jpeg',
      category: 'refreshing',
      emoji: '🍉',
      description: 'Refreshing watermelon juice with mint',
      price: 4.99,
      rating: 4.8,
      badge: 'summer',
      reviews: 143
    },
    {
      id: 6,
      name: 'Strawberry Milkshake',
      image: new URL('./assets/drink-6.svg', import.meta.url).href,
      category: 'milkshake',
      emoji: '🍓',
      description: 'Creamy strawberry ice cream shake',
      price: 5.99,
      rating: 4.9,
      badge: 'popular',
      reviews: 201
    },
    {
      id: 7,
      name: 'Pineapple Paradise',
      image: new URL('./assets/drink-7.svg', import.meta.url).href,
      category: 'tropical',
      emoji: '🍍',
      description: 'Tropical pineapple blend with rum (virgin option)',
      price: 6.49,
      rating: 4.8,
      badge: 'premium',
      reviews: 112
    },
    {
      id: 8,
      name: 'Chocolate Dream',
      image: new URL('./assets/drink-8.svg', import.meta.url).href,
      category: 'milkshake',
      emoji: '🍫',
      description: 'Rich dark chocolate with whipped cream',
      price: 5.49,
      rating: 4.7,
      badge: null,
      reviews: 178
    },
    {
      id: 9,
      name: 'Green Tea Zen',
      image: new URL('./assets/drink-9.svg', import.meta.url).href,
      category: 'tea',
      emoji: '🍵',
      description: 'Organic green tea with lemon and honey',
      price: 4.99,
      rating: 4.6,
      badge: 'healthy',
      reviews: 64
    },
    {
      id: 10,
      name: 'Passion Fruit Punch',
      image: new URL('./assets/drink-10.svg', import.meta.url).href,
      category: 'tropical',
      emoji: '🍷',
      description: 'Exotic passion fruit with ginger kick',
      price: 5.99,
      rating: 4.9,
      badge: 'popular',
      reviews: 189
    },
    {
      id: 11,
      name: 'Vanilla Frosted',
      image: new URL('./assets/drink-11.svg', import.meta.url).href,
      category: 'milkshake',
      emoji: '🥛',
      description: 'Classic vanilla ice cream milkshake',
      price: 4.99,
      rating: 4.5,
      badge: null,
      reviews: 76
    },
    {
      id: 12,
      name: 'Citrus Sunrise',
      image: new URL('./assets/drink-12.svg', import.meta.url).href,
      category: 'refreshing',
      emoji: '🍊',
      description: 'Fresh orange, tangerine and carrot blend',
      price: 4.99,
      rating: 4.8,
      badge: 'bestseller',
      reviews: 134
    }
  ]

  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'bestseller': return 'bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900'
      case 'popular': return 'bg-gradient-to-r from-rose-400 to-pink-500 text-rose-900'
      case 'healthy': return 'bg-gradient-to-r from-green-400 to-emerald-500 text-green-900'
      case 'premium': return 'bg-gradient-to-r from-purple-400 to-indigo-500 text-purple-900'
      case 'summer': return 'bg-gradient-to-r from-blue-400 to-cyan-500 text-blue-900'
      default: return ''
    }
  }

  const categories = [
    { id: 'all', label: 'All Drinks' },
    { id: 'refreshing', label: 'Refreshing' },
    { id: 'tropical', label: 'Tropical' },
    { id: 'fruity', label: 'Fruity' },
    { id: 'milkshake', label: 'Milkshakes' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'tea', label: 'Tea' }
  ]

  const filteredDrinks = drinks
    .filter(d => (selectedCategory === 'all' ? true : d.category === selectedCategory))
    .filter(d => (badgeFilter ? d.badge === badgeFilter : true))

  const handleAddToCart = (drink) => {
    setCartCount(cartCount + 1)
  }

  useEffect(() => {
    const handler = (e) => {
      const d = e.detail || {}
      if (!d.type) return
      if (d.type === 'scroll') {
        const el = document.getElementById(d.target)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      if (d.type === 'category') {
        setBadgeFilter(null)
        setSelectedCategory(d.category || 'all')
      }
      if (d.type === 'filterBadge') {
        setBadgeFilter(d.badge || null)
        setSelectedCategory('all')
      }
      if (d.type === 'openCart') {
        setShowCheckout(true)
      }
    }
    window.addEventListener('navigate', handler)
    return () => window.removeEventListener('navigate', handler)
  }, [])

  return (
    <div className='w-full py-16 md:py-24 min-h-screen relative overflow-hidden' style={{backgroundColor: '#FFF9F2'}}>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse' style={{backgroundColor: 'rgba(217, 30, 24, 0.1)'}}></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse' style={{backgroundColor: 'rgba(245, 158, 11, 0.08)', animationDelay: '2s'}}></div>
        <div className='absolute top-1/2 left-1/3 w-96 h-96 rounded-full blur-3xl animate-pulse' style={{backgroundColor: 'rgba(132, 204, 22, 0.06)', animationDelay: '4s'}}></div>
      </div>

      <div className='relative z-10'>
        {/* Hero Section */}
        <div className='max-w-6xl mx-auto px-4 md:px-8 mb-20'>
          <div className='text-center mb-8'>
            <div className='inline-block px-6 py-2 rounded-full mb-6 backdrop-blur-sm' style={{backgroundColor: 'rgba(217, 30, 24, 0.1)', border: '1px solid rgba(217, 30, 24, 0.3)'}}>
              <span className='text-sm font-semibold text-transparent bg-clip-text' style={{backgroundImage: 'linear-gradient(to right, #D91E18, #F59E0B)'}}>✨ Premium Selection</span>
            </div>
            <h2 className='text-5xl md:text-6xl font-black mb-6 leading-tight text-transparent bg-clip-text' style={{backgroundImage: 'linear-gradient(to right, #D91E18, #F59E0B, #D91E18)'}}>
              Adk Trading Store
            </h2>
            <p className='text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed' style={{color: '#625A54'}}>
              Discover our handcrafted collection of refreshing beverages. Each sip is crafted with love and the finest ingredients.
            </p>
          </div>
        </div>

        {/* Category Filter with Modern Design */}
        <div className='max-w-6xl mx-auto px-4 md:px-8 mb-16'>
          <div className='flex flex-wrap justify-center gap-3 md:gap-4'>
            {categories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-6 md:px-8 py-3 font-bold text-sm md:text-base rounded-full transition-all duration-500 group overflow-hidden ${
                  selectedCategory === cat.id
                    ? 'text-white'
                    : 'transition-colors duration-300'
                }`}
                style={{ transitionDelay: `${idx * 50}ms`, color: selectedCategory === cat.id ? '#FFFFFF' : '#3A2118' }}
              >
                {/* Background */}
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  selectedCategory === cat.id
                    ? 'shadow-lg'
                    : ''
                }`}
                  style={{
                    background: selectedCategory === cat.id ? 'linear-gradient(to right, #D91E18, #F04438)' : 'rgba(255, 255, 255, 0.1)',
                    boxShadow: selectedCategory === cat.id ? '0 0 20px rgba(217, 30, 24, 0.4)' : 'none'
                  }}
                ></div>
                {/* Shine effect */}
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  selectedCategory === cat.id ? '' : ''
                }`}
                  style={{
                    background: selectedCategory === cat.id ? 'linear-gradient(to right, rgba(255,255,255,0.2), transparent)' : ''
                  }}
                ></div>
                <span className='relative'>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Drinks Grid */}
        <div className='max-w-6xl mx-auto px-4 md:px-8 mb-16'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {filteredDrinks.map((drink, idx) => (
              <div
                key={drink.id}
                data-animate
                onMouseEnter={() => setHoveredId(drink.id)}
                onMouseLeave={() => setHoveredId(null)}
                className='group relative h-full'
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {/* Glassmorphism Card */}
                <div className='relative h-full rounded-3xl p-8 overflow-hidden shadow-2xl transition-all duration-500 transform hover:scale-105' style={{backgroundColor: '#FFFFFF', boxShadow: '0 10px 30px rgba(217, 30, 24, 0.1)', border: '2px solid rgba(217, 30, 24, 0.1)'}}>
                  
                  {/* Gradient background on hover */}
                  <div className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' style={{background: 'linear-gradient(135deg, rgba(217, 30, 24, 0.05), rgba(245, 158, 11, 0.05))'}}></div>

                  {/* Badge */}
                  {drink.badge && (
                    <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transform transition-all duration-500 ${hoveredId === drink.id ? 'scale-110 -rotate-3' : ''}`} style={{color: '#FFFFFF', background: drink.badge === 'bestseller' ? 'linear-gradient(to right, #F59E0B, #D91E18)' : drink.badge === 'popular' ? 'linear-gradient(to right, #F04438, #D91E18)' : drink.badge === 'healthy' ? '#84CC16' : drink.badge === 'premium' ? '#D91E18' : '#F59E0B'}}>
                      {drink.badge}
                    </div>
                  )}

                  {/* Drink Emoji */}
                  <div className='relative text-center mb-6 pt-4'>
                    <div className={`inline-block w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden transition-all duration-500 transform ${hoveredId === drink.id ? 'scale-110 drop-shadow-2xl' : 'scale-100'}`}>
                      <img src={drink.image} alt={drink.name} className='w-full h-full object-cover' />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='relative'>
                    <h3 className='text-2xl md:text-3xl font-bold mb-2 line-clamp-2' style={{color: '#3A2118'}}>
                      {drink.name}
                    </h3>
                    <p className='text-sm md:text-base mb-6 line-clamp-2 leading-relaxed' style={{color: '#625A54'}}>
                      {drink.description}
                    </p>

                    {/* Rating and Reviews */}
                    <div className='flex items-center gap-2 mb-6 pb-6 transition-colors duration-300' style={{borderColor: '#D91E18', borderBottomWidth: '2px'}}>
                      <div className='flex items-center gap-1'>
                        <span className='text-lg'>★</span>
                        <span className='font-bold' style={{color: '#3A2118'}}>{drink.rating}</span>
                      </div>
                      <span className='text-sm' style={{color: '#625A54'}}>({drink.reviews} reviews)</span>
                    </div>

                    {/* Price and Action */}
                    <div className='flex items-end justify-between gap-4'>
                      <div>
                        <p className='text-xs mb-1' style={{color: '#625A54'}}>Price</p>
                        <p className='text-3xl md:text-4xl font-black text-transparent bg-clip-text' style={{backgroundImage: 'linear-gradient(to right, #D91E18, #F59E0B)'}}>
                          ${drink.price.toFixed(2)}
                        </p>
                      </div>
                      <button 
                        onClick={() => handleAddToCart(drink)}
                        className='relative px-8 py-3 text-white font-bold rounded-xl overflow-hidden group/btn transition-all duration-300 hover:shadow-lg active:scale-95'
                        style={{background: 'linear-gradient(to right, #D91E18, #F04438)'}}
                      >
                        <span className='relative z-10 flex items-center gap-2'>
                          🛒 Add
                        </span>
                        <div className='absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300' style={{background: 'linear-gradient(to right, #B91814, #D91E18)'}}></div>
                      </button>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className='absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none'></div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredDrinks.length === 0 && (
            <div className='text-center py-20'>
              <p className='text-3xl font-bold' style={{color: '#3A2118'}}>No drinks in this category yet!</p>
            </div>
          )}
        </div>

        {/* Gallery Showcase */}
        <Gallery items={drinks.slice(0, 6)} />

        {/* Bottom CTA Section */}
        <div className='text-center mt-20 pt-12 transition-colors duration-300' style={{borderColor: '#D91E18', borderTopWidth: '2px'}}>
          <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
            <div className='text-left'>
              <p className='text-sm mb-2' style={{color: '#625A54'}}>Cart Items</p>
              <p className='text-4xl font-black text-transparent bg-clip-text' style={{backgroundImage: 'linear-gradient(to right, #D91E18, #F59E0B)'}}>{cartCount}</p>
            </div>
            <button onClick={() => setShowCheckout(true)} className='px-10 py-4 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-110 active:scale-95' style={{background: 'linear-gradient(to right, #D91E18, #F04438)', boxShadow: '0 10px 30px rgba(217, 30, 24, 0.3)'}}>
              Checkout Now
            </button>
          </div>
        </div>

        {/* Checkout Modal */}
        {showCheckout && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl">
              <h3 className="text-xl font-bold mb-4" style={{color: '#3A2118'}}>Your Cart</h3>
              <p className="text-sm mb-4" style={{color: '#625A54'}}>Items in cart: {cartCount}</p>
              <div className="flex justify-end gap-3">
                <button onClick={() => setShowCheckout(false)} className="px-4 py-2 bg-gray-100 rounded">Close</button>
                <button onClick={() => { setShowCheckout(false); alert('Checkout is a demo — implement payment flow.'); }} className="px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 font-bold rounded">Proceed</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Body