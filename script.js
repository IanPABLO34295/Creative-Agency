const navLinks = document.querySelectorAll('nav a[data-target]');
const slides = document.querySelectorAll('.slide');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('data-target');

    slides.forEach(slide => slide.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
  });
});
