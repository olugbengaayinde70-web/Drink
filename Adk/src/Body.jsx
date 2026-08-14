import React, { useState, useEffect } from 'react'
import Gallery from './Gallery'

function Body() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cartItems, setCartItems] = useState([])
  const [hoveredId, setHoveredId] = useState(null)
  const [showCheckout, setShowCheckout] = useState(false)
  const [badgeFilter, setBadgeFilter] = useState(null)

  const formatNaira = (value) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(value)

  const drinks = [
    {
      id: 1,
      name: 'Fanta',
      image: '/fanta.jpeg',
      category: 'soft-drinks',
      emoji: '🍋',
      description: 'Fanta is a refreshing, fruity, and fizzy drink bursting with vibrant flavor.',
      price: 4500,
      rating: 4.8,
      badge: 'bestseller',
      reviews: 128
    },
    {
      id: 2,
      name: 'American Cola',
      image: '/am%20cola.jpeg',
      category: 'soft-drinks',
      emoji: '🥭',
      description: 'American Cola is a refreshing, bold, and fizzy cola with a classic taste.',
      price: 4000,
      rating: 4.9,
      badge: 'popular',
      reviews: 156
    },
    {
      id: 3,
      name: 'Fearless Energy',
      image: '/fearless.jpeg',
      category: 'energy',
      emoji: '⚡',
      description: 'Fearless Energy Drink is a fast-boosting drink made to keep you active and alert.',
      price: 4500,
      rating: 4.7,
      badge: 'healthy',
      reviews: 92
    },
    {
      id: 4,
      name: 'Pepsi',
      image: '/pepsi.jpeg',
      category: 'soft-drinks',
      emoji: '🧃',
      description: 'Pepsi is a refreshing, crisp cola with a bold and delicious taste.',
      price: 4300,
      rating: 4.6,
      badge: null,
      reviews: 87
    },
    {
      id: 5,
      name: 'Rc',
      image: '/rc.jpeg',
      category: 'soft-drinks',
      emoji: '🍉',
      description: 'Rc is a refreshing, fruity, and fizzy drink bursting with vibrant flavor.',
      price: 2400,
      rating: 4.8,
      badge: 'summer',
      reviews: 143
    },
    {
      id: 6,
      name: 'Fanta (Bottled)',
      image: '/Fanta.jfif',
      category: 'soft-drinks',
      emoji: '🍓',
      description: 'Bottle Fanta is a refreshing, fruity soda with a bold and bubbly taste.',
      price: 7000,
      rating: 4.9,
      badge: 'popular',
      reviews: 201
    },
    {
      id: 7,
      name: 'Chikki Chikki Noodles',
      image: '/chicki.jfif',
      category: 'food',
      emoji: '🍜',
      description: 'Quick, tasty noodles with a savory flavor that is perfect for a fast meal.',
      price: 11000,
      rating: 4.8,
      badge: 'premium',
      reviews: 112
    },
    {
      id: 8,
      name: 'Smoov Chapman',
      image: '/Smoov.jfif',
      category: 'soft-drinks',
      emoji: '🍊',
      description: 'Smoov Chapman is a fruity and refreshing drink with a sweet, vibrant taste.',
      price: 2400,
      rating: 4.7,
      badge: null,
      reviews: 178
    },
    {
      id: 9,
      name: 'Mr V Table Water',
      image: '/mrv.jpg',
      category: 'water',
      emoji: '💧',
      description: 'Mr V Water is clean, refreshing bottled water for everyday hydration.',
      price: 1800,
      rating: 4.6,
      badge: 'healthy',
      reviews: 64
    },
    {
      id: 10,
      name: 'Hollandia Yogurt',
      image: '/Yogurt.jpg',
      category: 'water',
      emoji: '🥛',
      description: 'Hollandia Yoghurt is a smooth, creamy, and refreshing dairy drink.',
      price: 11000,
      rating: 4.9,
      badge: 'popular',
      reviews: 189
    },
    {
      id: 11,
      name: 'Malta Guinness',
      image: '/guiness.jpg',
      category: 'soft-drinks',
      emoji: '🍺',
      description: 'Malta Guinness is a rich, sweet, and satisfying energy drink with a smooth finish.',
      price: 15000,
      rating: 4.5,
      badge: null,
      reviews: 76
    },
    {
      id: 12,
      name: 'Indomie Table',
      image: '/indomie-table.jpg',
      category: 'food',
      emoji: '🍲',
      description: 'Indomie Table is a tasty and convenient noodle meal for a quick, satisfying serving.',
      price: 15000,
      rating: 4.8,
      badge: 'bestseller',
      reviews: 134
    },
    {
      id: 13,
      name: 'Groundnut Oil',
      image: '/ORORO.jpg',
      category: 'cooking',
      emoji: '🥥',
      description: 'Groundnut Oil is a versatile cooking oil for frying, seasoning, and everyday meals.',
      rating: 4.4,
      badge: 'Food',
      reviews: 100
    },
    {
      id: 14,
      name: 'Rice',
      image: '/Bagofrice.jpg',
      category: 'cooking',
      emoji: '🍚',
      description: 'Rice is a staple food for hearty meals, soups, and family-sized dishes.',
      rating: 4.9,
      badge: 'Food',
      reviews: 174
    },
    {
      id: 15,
      name: 'Red Oil',
      image: '/Palmoil.jpg',
      category: 'cooking',
      emoji: '🫒',
      description: 'Red Oil adds rich flavor and is ideal for traditional meals and cooking staples.',
      rating: 4.7,
      badge: 'Food',
      reviews: 134
    },
    {
      id: 16,
      name: 'Frozen Foods',
      image: '/Frozen.jpg',
      category: 'food',
      emoji: '🧊',
      description: 'Frozen Foods are a convenient, tasty option for quick meals and family snacks.',
      rating: 4.1,
      badge: 'Food',
      reviews: 191
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
    { id: 'all', label: 'All Items' },
    { id: 'soft-drinks', label: 'Soft Drinks' },
    { id: 'energy', label: 'Energy Drinks' },
    { id: 'water', label: 'Water & Dairy' },
    { id: 'food', label: 'Meals & Snacks' },
    { id: 'cooking', label: 'Cooking Essentials' }
  ]

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const deliveryFee = cartItems.length > 0 ? (cartTotal >= 25000 ? 0 : 1500) : 0
  const orderTotal = cartTotal + deliveryFee

  const filteredDrinks = drinks
    .filter(d => (selectedCategory === 'all' ? true : d.category === selectedCategory))
    .filter(d => (badgeFilter ? d.badge === badgeFilter : true))

  const handleAddToCart = (drink) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === drink.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === drink.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...drink, quantity: 1 }]
    })
    setShowCheckout(true)
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
                          {formatNaira(drink.price)}
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
        <Gallery items={drinks} />

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
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold" style={{color: '#3A2118'}}>Your Order</h3>
                <button onClick={() => setShowCheckout(false)} className="px-3 py-1.5 bg-gray-100 rounded-full text-sm">Close</button>
              </div>

              <div className="space-y-4 mb-5">
                {cartItems.length === 0 ? (
                  <p className="text-sm" style={{color: '#625A54'}}>Your cart is empty. Add a few items to place an order.</p>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 p-3">
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover" />
                        <div>
                          <p className="font-bold text-sm" style={{color: '#3A2118'}}>{item.name}</p>
                          <p className="text-xs" style={{color: '#625A54'}}>{item.quantity} item{item.quantity > 1 ? 's' : ''}</p>
                        </div>
                      </div>
                      <p className="font-bold" style={{color: '#3A2118'}}>{formatNaira(item.price * item.quantity)}</p>
                    </div>
                  ))
                )}
              </div>

              <div className="rounded-2xl p-4" style={{backgroundColor: '#FFF8F3'}}>
                <div className="flex justify-between text-sm mb-2" style={{color: '#625A54'}}>
                  <span>Subtotal</span>
                  <span>{formatNaira(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-sm mb-2" style={{color: '#625A54'}}>
                  <span>Delivery</span>
                  <span>{deliveryFee === 0 ? 'Free' : formatNaira(deliveryFee)}</span>
                </div>
                <div className="flex justify-between text-lg font-black pt-2 border-t border-red-100" style={{color: '#3A2118'}}>
                  <span>Total</span>
                  <span>{formatNaira(orderTotal)}</span>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-5">
                <button onClick={() => setShowCheckout(false)} className="px-4 py-2 bg-gray-100 rounded-lg">Continue Shopping</button>
                <a
                  href={cartItems.length > 0 ? `https://wa.me/2348032821294?text=${encodeURIComponent(`Hello Adk Trading Store, I would like to place this order:\n${cartItems.map(item => `- ${item.name} x${item.quantity} = ${formatNaira(item.price * item.quantity)}`).join('\n')}\n\nSubtotal: ${formatNaira(cartTotal)}\nDelivery: ${deliveryFee === 0 ? 'Free' : formatNaira(deliveryFee)}\nTotal: ${formatNaira(orderTotal)}`)}` : 'https://wa.me/2348032821294'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-white font-bold"
                  style={{background: 'linear-gradient(to right, #D91E18, #F04438)'}}
                >
                  Place Order
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Body