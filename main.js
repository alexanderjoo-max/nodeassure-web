const form = document.getElementById('emailForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const subject = encodeURIComponent('NodeAssure Early Access Request');
  const body = encodeURIComponent(`Early access request from: ${email}`);
  window.location.href = `mailto:info@nodeassure.ai?subject=${subject}&body=${body}`;
  form.hidden = true;
  note.textContent = `Thanks! We'll be in touch at ${email}.`;
});
