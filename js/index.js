// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const target = document.querySelector(this.getAttribute('href'))
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}
	})
})

// Add scroll effect to navigation
window.addEventListener('scroll', () => {
	const nav = document.querySelector('nav')
	if (window.scrollY > 100) {
		nav.style.background = 'rgba(15, 15, 35, 0.98)'
	} else {
		nav.style.background = 'rgba(15, 15, 35, 0.95)'
	}
})

// Animate elements on scroll
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -50px 0px',
}

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate-in')
		}
	})
}, observerOptions)

document.querySelectorAll('.project-card, .skill-category, .ai-bot-card').forEach(el => {
	observer.observe(el)
})
