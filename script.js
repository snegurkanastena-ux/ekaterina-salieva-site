const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('.lightbox-image');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
const closeButton = lightbox.querySelector('.lightbox-close');

function openLightbox(src, caption, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt || caption || 'Фото работы';
  lightboxCaption.textContent = caption || '';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  lightboxCaption.textContent = '';
}

function clickHandler(event) {
  const button = event.target.closest('.work-button');
  if (!button) return;
  openLightbox(button.dataset.src, button.dataset.caption, button.querySelector('.work-image').alt);
}

function overlayClick(event) {
  if (event.target === lightbox || event.target === lightbox.querySelector('.lightbox-backdrop')) {
    closeLightbox();
  }
}

function keyHandler(event) {
  if (event.key === 'Escape' && lightbox.classList.contains('open')) {
    closeLightbox();
  }
}

document.querySelector('.works-grid').addEventListener('click', clickHandler);
closeButton.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', overlayClick);
document.addEventListener('keydown', keyHandler);

// Read more functionality
const readMoreBtn = document.querySelector('.read-more');
const fullText = document.querySelector('.full-text');

if (readMoreBtn && fullText) {
  readMoreBtn.addEventListener('click', () => {
    fullText.classList.toggle('hidden');
    readMoreBtn.textContent = fullText.classList.contains('hidden') ? 'Читать полностью' : 'Свернуть';
  });
}
