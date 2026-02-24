import './App.css'
import { useState } from 'react'

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
  { label: '01', title: 'Pick a vibe', body: 'Choose from curated styles that highlight products, services, or testimonials.' },
  { label: '02', title: 'Describe your business', body: 'Share what you do, who you serve, and your tone of vibe.' },
  { label: '03', title: 'Go live for free', body: 'We’ll deliver your fully published, launch-ready webpage.' },
]

function App() {
  const [showToast, setShowToast] = useState(false);
  const openWhatsApp = () => {
    const url = 'https://wa.me/0714346977?text=Hi%2C%20I%27d%20like%20help%20getting%20started';
    window.open(url, '_blank', 'noopener');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-image-background">
          <div className="hero-overlay"></div>
        </div>
        
        <nav className="hero-nav" aria-label="Primary">
          <span className="brand">WebbXy</span>
        </nav>
        <div className="hero-body">
          <div className="hero-content">
            <h1>Create your web page for FREE!!!</h1>
            <p className="lede">
              WebbXy assembles modern, mobile-ready landing pages for local shops, solo founders, and community
              projects. It is completely free so you can focus on momentum instead of budgets.
            </p>
            <div className="hero-footnote">No credit card/payment required</div>
          </div>
        </div>
      </header>
      <section className="how-it-works">
        <div className="section-content">
          <h2>It's as simple as 1-2-3</h2>
          <p className="section-intro section-intro--black">
            Select your preferred template, provide your business details, and launch.
          </p>
          
          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.label} className="step-card">
                <div className="step-label">{step.label}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {step.label === '01' && (
                  <a 
                    href="/webbxy" 
                    className="secondary-btn secondary-btn--red"
                  >
                    See example templates
                  </a>
                )}
                {step.label === '02' && (
                  <a 
                    href="https://form.jotform.com/thisarawelmilla/web-page-configurations" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="secondary-btn secondary-btn--red"
                  >
                    Fill out the form
                  </a>
                )}
              </div>
            ))}
          </div>
          <div style={{marginTop: 18, display: 'flex', alignItems: 'center', gap: 12}}>
            <p className="section-intro section-intro--black" style={{margin: 0}}>Need help getting started? WhatsApp us, we're here to assist.</p>
            <button
              onClick={openWhatsApp}
              className="secondary-btn secondary-btn--green"
              aria-label="Need help getting started? WhatsApp us — 0714346977"
              style={{padding: 10, borderRadius: 999, cursor: 'pointer', background: '#25D366', color: '#fff', border: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48}}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M20.52 3.48A11.86 11.86 0 0012 .5C6.21.5 1.5 5.21 1.5 11c0 1.94.5 3.74 1.45 5.34L1 23l6.4-1.67A11.86 11.86 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5 0-2.82-1.1-5.45-3.98-7.52z" fill="#fff"/>
                <path d="M17.2 14.02c-.28-.14-1.64-.8-1.9-.89-.26-.09-.45-.14-.64.14s-.73.89-.9 1.07c-.16.18-.33.2-.61.07-.28-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.78-.15-.29-.02-.45.12-.6.12-.12.28-.32.42-.48.14-.17.19-.28.28-.46.09-.19.05-.35-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 1.01-1 2.46s1.02 2.86 1.16 3.05c.13.19 2.02 3.13 4.9 4.32 2.4.94 2.95.74 3.47.69.53-.05 1.69-.69 1.93-1.36.24-.67.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33z" fill="#25D366"/>
              </svg>
            </button>
            {showToast && (
              <div style={{position: 'fixed', right: 20, bottom: 20, background: 'rgba(15,23,32,0.92)', color: '#fff', padding: '10px 14px', borderRadius: 8, boxShadow: '0 6px 20px rgba(0,0,0,0.2)'}}>
                Opening WhatsApp...
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="templates-showcase" id="templates">
        <div className="section-content">
          <h2>Choose Your Template</h2>
          <p className="section-intro section-intro--black">
            Browse our professionally designed templates and pick the one that best fits your business style.
          </p>
          
          <div className="templates-grid">
            <div className="template-preview">
              <h3>Template 1</h3>
              <div className="iframe-wrapper">
                <iframe 
                  src="/webbxy/template1.html" 
                  title="Template 1 Preview"
                  scrolling="yes"
                />
              </div>
              <a 
                href="/webbxy/template1.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="secondary-btn secondary-btn--red"
              >
                View Full Template
              </a>
            </div>
            
            <div className="template-preview">
              <h3>Template 2</h3>
              <div className="iframe-wrapper">
                <iframe 
                  src="/webbxy/template2.html" 
                  title="Template 2 Preview"
                  scrolling="yes"
                />
              </div>
              <a 
                href="/webbxy/template2.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="secondary-btn secondary-btn--red"
              >
                View Full Template
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} WebbXy — Free business webpages, crafted with care.</p>
      </footer>
    </div>
  )
}

export default App
