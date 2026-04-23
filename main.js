// Mobile nav toggle
const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('nav--open');
});

// Close mobile nav on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('nav--open'));
});

// Contact form — sends via mailto
const form = document.getElementById('contactForm');
const successEl = document.getElementById('formSuccess');
const confirmedEmail = document.getElementById('confirmedEmail');

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const company = document.getElementById('company').value.trim();
  const nodes   = document.getElementById('nodes').value;
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(`NodeAssure Early Access Request — ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nNodes managed: ${nodes || 'N/A'}\n\nMessage:\n${message || 'N/A'}`
  );

  window.location.href = `mailto:info@nodeassure.ai?subject=${subject}&body=${body}`;

  // Show success state
  if (confirmedEmail) confirmedEmail.textContent = email;
  form.hidden = true;
  successEl.hidden = false;
});

// Scroll-reveal: fade-in sections as they enter viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.feature-card, .step, .testimonial-card, .pricing-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Inject reveal CSS dynamically (avoids FOUC if CSS loads late)
const style = document.createElement('style');
style.textContent = `
  .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
  .reveal.visible { opacity: 1; transform: none; }
`;
document.head.appendChild(style);
