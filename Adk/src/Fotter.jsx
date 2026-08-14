import React, { useState } from 'react'

function Fotter() {
  const [policy, setPolicy] = useState(null) // 'privacy' | 'terms' | null

  const navigate = (detail) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail }))
  }

  return (
    <footer id="footer" className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="md:w-1/3">
            <h4 className="text-2xl font-bold" style={{color: '#3A2118'}}>Adk Trading Store</h4>
            <p className="mt-2 text-sm" style={{color: '#625A54'}}>Handcrafted beverages made with real ingredients. Visit our shop for made-to-order drinks and seasonal specials.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:w-2/3">
            <div>
              <h5 className="font-semibold mb-2" style={{color: '#3A2118'}}>Shop</h5>
              <ul className="text-sm" style={{color: '#625A54'}}>
                <li>
                  <button onClick={() => { navigate({ type: 'category', category: 'all' }); navigate({ type: 'scroll', target: 'drinks-section' }); }} className="hover:underline">All Drinks</button>
                </li>
                <li>
                  <button onClick={() => { navigate({ type: 'category', category: 'all' }); navigate({ type: 'scroll', target: 'drinks-section' }); }} className="hover:underline">New</button>
                </li>
                <li>
                  <button onClick={() => { navigate({ type: 'filterBadge', badge: 'bestseller' }); navigate({ type: 'scroll', target: 'drinks-section' }); }} className="hover:underline">Bestsellers</button>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-2" style={{color: '#3A2118'}}>Company</h5>
              <ul className="text-sm" style={{color: '#625A54'}}>
                <li>
                  <button onClick={() => navigate({ type: 'scroll', target: 'about-section' })} className="hover:underline">About</button>
                </li>
                <li>
                  <a href="#" className="hover:underline">Careers</a>
                </li>
                <li>
                  <button onClick={() => navigate({ type: 'scroll', target: 'footer' })} className="hover:underline">Contact</button>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-2" style={{color: '#3A2118'}}>Contact</h5>
              <ul className="text-sm" style={{color: '#625A54'}}>
                <li>Address: no 30 ojukwu street satellite town lagos</li>
                <li>Phone: 08032821294</li>
                <li>Email: hello@adktrading.example</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Adk Trading Store. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button onClick={() => setPolicy('privacy')} className="text-sm text-gray-600 hover:text-gray-900">Privacy</button>
            <button onClick={() => setPolicy('terms')} className="text-sm text-gray-600 hover:text-gray-900">Terms</button>
          </div>
        </div>

        {policy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50">
            <div className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-2xl">
              <h3 className="text-xl font-bold mb-4" style={{color: '#3A2118'}}>{policy === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}</h3>
              <div className="text-sm text-gray-600 mb-6" style={{color: '#625A54'}}>
                {policy === 'privacy' ? 'This is a short privacy summary. Replace with real policy content.' : 'These are the terms. Replace with your terms and conditions.'}
              </div>
              <div className="flex justify-end">
                <button onClick={() => setPolicy(null)} className="px-4 py-2 bg-gray-100 rounded">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Fotter