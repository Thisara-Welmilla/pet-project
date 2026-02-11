import './App.css'

const features = [
  {
    title: 'Guided storytelling',
    description:
      'Answer a few prompts about your business and we assemble an on-brand webpage that feels handcrafted.',
  },
  {
    title: 'Polished visuals',
    description:
      'Our layout engine balances typography, imagery, and color so your brand looks premium without a designer.',
  },
  {
    title: 'Zero price tag',
    description:
      'Launch as many pages as you need—hosting, SSL, and updates are included at no cost to you.',
  },
]

const steps = [
  { label: '01', title: 'Describe your business', body: 'Share what you do, who you serve, and your tone of voice.' },
  { label: '02', title: 'Pick a vibe', body: 'Choose from curated styles that highlight products, services, or testimonials.' },
  { label: '03', title: 'Go live for free', body: 'Publish instantly on a secure link and keep iterating whenever inspiration hits.' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="hero-nav" aria-label="Primary">
          <span className="brand">BrightLaunch</span>
          <button className="ghost-btn" type="button">Join waitlist</button>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Free webpages for growing businesses</p>
          <h1>Launch a confident web presence without paying a cent.</h1>
          <p className="lede">
            BrightLaunch assembles modern, mobile-ready landing pages for local shops, solo founders, and community
            projects—completely free so you can focus on momentum instead of budgets.
          </p>
          <div className="cta-row">
            <button className="primary-btn" type="button">Start a page</button>
            <button className="secondary-btn" type="button">See example</button>
          </div>
          <div className="hero-footnote">No credit card • No hidden upsells • Publish in under five minutes</div>
        </div>
      </header>

      <main>
        <section className="feature-section" aria-labelledby="feature-heading">
          <div className="section-heading">
            <p className="eyebrow">Why it matters</p>
            <h2 id="feature-heading">Built-in strategy. Zero learning curve.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="steps" aria-labelledby="steps-heading">
          <div className="section-heading">
            <p className="eyebrow">How BrightLaunch works</p>
            <h2 id="steps-heading">From idea to published page in three simple moves.</h2>
          </div>
          <ol className="step-list">
            {steps.map((step) => (
              <li key={step.label} className="step-card">
                <span className="step-label">{step.label}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="cta-panel">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>Tell us about your business and we will craft the page—totally free.</h2>
            <p>
              The fastest way to explain what you do is to show it. BrightLaunch turns your story into a clean, credible
              web page with hosting, analytics-ready tracking, and future updates baked in.
            </p>
          </div>
          <form className="cta-form">
            <label htmlFor="email">Stay in the loop</label>
            <div className="input-row">
              <input id="email" name="email" type="email" placeholder="you@business.com" required />
              <button className="primary-btn" type="submit">Notify me</button>
            </div>
            <p className="privacy-note">We only send product updates and launch news.</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} BrightLaunch — Free business webpages, crafted with care.</p>
      </footer>
    </div>
  )
}

export default App
