 // Dark Mode Toggle
 const modeToggle = document.getElementById('mode-toggle');
 const body = document.body;
 
 // Check for saved theme preference
 if(localStorage.getItem('darkMode') === 'true') {
     body.classList.add('dark-mode');
     modeToggle.textContent = '☀️';
 }


 
 
 modeToggle.addEventListener('click', () => {
     body.classList.toggle('dark-mode');
     
     if(body.classList.contains('dark-mode')) {
         modeToggle.textContent = '☀️';
         localStorage.setItem('darkMode', 'true');
     } else {
         modeToggle.textContent = '🌙';
         localStorage.setItem('darkMode', 'false');
     }
 });
 
 // Smooth Scrolling for Anchor Links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });
 
 // Skill Bars Animation
 const skillBars = document.querySelectorAll('.skill-bar');
 
 function animateSkills() {
     skillBars.forEach(bar => {
         const progress = bar.querySelector('.skill-progress');
         const width = progress.style.width;
         
         progress.style.width = '0';
         
         setTimeout(() => {
             progress.style.transition = 'width 1s ease-in-out';
             progress.style.width = width;
         }, 100);
     });
 }
 
 // Trigger skill animation when skills section is in view
 const skillsSection = document.querySelector('#skills');
 
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             animateSkills();
             observer.unobserve(entry.target);
         }
     });
 }, { threshold: 0.1 });
 
 observer.observe(skillsSection);


 const contactForm = document.getElementById('contact-form');

 contactForm.addEventListener('submit', function(e) {
   e.preventDefault();
 
   emailjs.sendForm('service_rp9lzjd', 'template_p030com', this)
     .then(() => {
       // Show submission confirmation (in a real app, you'd check for server response)
     alert('Thank you for your message! I will get back to you soon.');
       contactForm.reset();
     }, (error) => {
       alert("Failed to send message: " + JSON.stringify(error));
     });
 });
 



 
 // Form Submission
//  const contactForm = document.getElementById('contact-form');
 
//  contactForm.addEventListener('submit', function(e) {
//      e.preventDefault();
     
//      const name = document.getElementById('name').value;
//      const email = document.getElementById('email').value;
//      const subject = document.getElementById('subject').value;
//      const message = document.getElementById('message').value;
     
//      // You would typically send this data to your server
//      console.log('Form Submitted:', { name, email, subject, message });
     
//      // Show submission confirmation (in a real app, you'd check for server response)
//      alert('Thank you for your message! I will get back to you soon.');
     
//      // Reset form
//      contactForm.reset();
//  });
 
 // Update copyright year
 const yearSpan = document.querySelector('.copyright');
 const currentYear = new Date().getFullYear();
 yearSpan.textContent = `© ${currentYear} Manas Pandey. All Rights Reserved.`;
 
 // Element fade-in on scroll
 const fadeElements = document.querySelectorAll('.fadeIn');
 
 const fadeObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.style.opacity = 1;
             entry.target.style.transform = 'translateY(0)';
             fadeObserver.unobserve(entry.target);
         }
     });
 }, { threshold: 0.1 });
 
 fadeElements.forEach(element => {
     element.style.opacity = 0;
     element.style.transform = 'translateY(20px)';
     element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
     fadeObserver.observe(element);
 });



let menuButton = document.querySelector('#menu-toggle');
let navbar = document.querySelector('.nav-links');

menuButton.onclick = () => {
    navbar.classList.toggle('active');

    // Toggle icon between hamburger and cross
    if (navbar.classList.contains('active')) {
        menuButton.textContent = '✖'; // Cross icon
    } else {
        menuButton.textContent = '☰'; // Hamburger icon
    }
};

// Optional: reset to hamburger when scrolling
window.onscroll = () => {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuButton.textContent = '☰';
    }
};



  
