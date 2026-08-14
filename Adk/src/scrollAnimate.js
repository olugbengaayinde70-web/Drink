export default function initScrollAnimations() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const style = document.createElement('style')
  style.innerHTML = `
    .animate-on-scroll{opacity:0; transform:translateY(18px); transition:opacity .6s ease, transform .6s ease}
    .animate-on-scroll.in-view{opacity:1; transform:none}
  `
  document.head.appendChild(style)

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view')
    })
  }, { threshold: 0.12 })

  document.querySelectorAll('[data-animate]').forEach(el => {
    el.classList.add('animate-on-scroll')
    io.observe(el)
  })
}
