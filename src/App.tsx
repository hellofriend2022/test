import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

const services = [
  {
    title: 'Investment Strategy',
    description:
      'Portfolio construction and allocation designed around your time horizon, risk tolerance, and long-term objectives.',
  },
  {
    title: 'Wealth Planning',
    description:
      'Integrated planning across retirement, tax awareness, estate considerations, and liquidity for major life events.',
  },
  {
    title: 'Private Advisory',
    description:
      'Ongoing counsel for families and principals who want a clear, unhurried partnership—not a product pitch.',
  },
]

const principles = [
  {
    number: '01',
    title: 'Clarity before complexity',
    text: 'We translate markets into decisions you can stand behind—without jargon or noise.',
  },
  {
    number: '02',
    title: 'Aligned for the long term',
    text: 'Advice is structured around your goals, not quarterly product quotas or short-term trends.',
  },
  {
    number: '03',
    title: 'Measured conviction',
    text: 'We act when the thesis is sound—and stay patient when the market asks for restraint.',
  },
]

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -40px 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useReveal()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="site">
      <header className="nav">
        <a className="nav__brand" href="#top" onClick={closeMenu}>
          Northbridge
        </a>

        <nav className={`nav__links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#approach" onClick={closeMenu}>
            Approach
          </a>
          <a href="#clients" onClick={closeMenu}>
            Clients
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a className="nav__cta" href="#contact">
          Book a consultation
        </a>

        <button
          className={`nav__toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__media" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
              alt=""
            />
            <div className="hero__veil" />
          </div>

          <div className="hero__content">
            <p className="hero__brand">Northbridge</p>
            <h1 className="hero__title">
              Investment counsel with lasting clarity.
            </h1>
            <p className="hero__lede">
              Private financial services and portfolio guidance for those who
              prefer thoughtful strategy over market noise.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#contact">
                Schedule a conversation
              </a>
              <a className="btn btn--ghost" href="#services">
                Explore services
              </a>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section__inner">
            <header className="section__header reveal">
              <p className="eyebrow">Services</p>
              <h2>Advisory built around your capital, not a catalog.</h2>
              <p className="section__support">
                From portfolio design to multi-generational planning, each
                engagement is tailored—never templated.
              </p>
            </header>

            <ul className="service-list">
              {services.map((service, index) => (
                <li
                  className="service-list__item reveal"
                  style={{ transitionDelay: `${index * 90}ms` }}
                  key={service.title}
                >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section approach" id="approach">
          <div className="section__inner approach__grid">
            <header className="section__header reveal">
              <p className="eyebrow">Approach</p>
              <h2>A quieter way to grow and protect wealth.</h2>
              <p className="section__support">
                We combine rigorous analysis with plain-spoken counsel—so every
                recommendation earns its place in your plan.
              </p>
            </header>

            <ol className="principles">
              {principles.map((item, index) => (
                <li
                  className="principles__item reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                  key={item.number}
                >
                  <span className="principles__number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section clients" id="clients">
          <div className="clients__media reveal" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1800&q=80"
              alt=""
            />
          </div>
          <div className="clients__copy reveal">
            <p className="eyebrow">Who we serve</p>
            <h2>Individuals, families, and stewards of capital.</h2>
            <p>
              Northbridge works with professionals, entrepreneurs, and families
              seeking a steady advisory relationship—whether you are
              consolidating investments, preparing for a liquidity event, or
              refining an existing plan.
            </p>
            <a className="text-link" href="#contact">
              Begin a confidential inquiry
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section__inner contact__layout">
            <header className="section__header reveal">
              <p className="eyebrow">Contact</p>
              <h2>Start with a conversation.</h2>
              <p className="section__support">
                Tell us briefly about your goals. We respond within two business
                days to arrange a consultation.
              </p>
              <div className="contact__meta">
                <p>
                  <span>Email</span>
                  <a href="mailto:advise@northbridge.example">
                    advise@northbridge.example
                  </a>
                </p>
                <p>
                  <span>Phone</span>
                  <a href="tel:+12125550180">+1 (212) 555-0180</a>
                </p>
              </div>
            </header>

            <form className="contact-form reveal" onSubmit={handleSubmit}>
              {submitted ? (
                <div className="contact-form__success" role="status">
                  <h3>Thank you.</h3>
                  <p>
                    Your message has been received. A Northbridge advisor will
                    follow up shortly.
                  </p>
                </div>
              ) : (
                <>
                  <label>
                    Full name
                    <input name="name" type="text" required autoComplete="name" />
                  </label>
                  <label>
                    Email
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />
                  </label>
                  <label>
                    Interest
                    <select name="interest" defaultValue="investment">
                      <option value="investment">Investment strategy</option>
                      <option value="wealth">Wealth planning</option>
                      <option value="private">Private advisory</option>
                      <option value="other">Something else</option>
                    </select>
                  </label>
                  <label>
                    How can we help?
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Share a brief overview of your situation or questions."
                    />
                  </label>
                  <button className="btn btn--primary" type="submit">
                    Request consultation
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <p className="footer__name">Northbridge</p>
            <p>Investment consulting &amp; financial advisory.</p>
          </div>
          <div className="footer__links">
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer__note">
            © {new Date().getFullYear()} Northbridge Advisors. For illustrative
            purposes only. Not an offer of securities.
          </p>
        </div>
      </footer>
    </div>
  )
}
