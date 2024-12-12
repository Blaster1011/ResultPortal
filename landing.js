 // Menu Popup Toggle
 const menuBtn = document.getElementById('menuBtn');
 const menuPopup = document.getElementById('menuPopup');

 menuBtn.addEventListener('click', () => {
     menuPopup.classList.toggle('show');
 });

 document.addEventListener('click', (e) => {
     if (!menuBtn.contains(e.target) && !menuPopup.contains(e.target)) {
         menuPopup.classList.remove('show');
     }
 });

 // Image Slider
 let currentSlide = 0;
 const slides = document.querySelectorAll('.slide');

 function showSlide(n) {
     slides.forEach(slide => slide.classList.remove('active'));
     currentSlide = (n + slides.length) % slides.length;
     slides[currentSlide].classList.add('active');
 }

 function nextSlide() {
     showSlide(currentSlide + 1);
 }

 function prevSlide() {
     showSlide(currentSlide - 1);
 }

 // Auto-advance slides
 setInterval(nextSlide, 5000);