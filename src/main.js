import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { injectIcons } from './icons.js'

gsap.registerPlugin(ScrollTrigger)

let hoverAnimations = new Map();
let heroTimelineFinished = false;

document.addEventListener('DOMContentLoaded', () => {
  injectIcons()
  initThemeToggle()
  initHeroAnimation()
  initContactForm()
  initResumeAnimation()
  initAIBot()
})

function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle')
  const moonIcon = document.getElementById('moon-icon')
  const sunIcon = document.getElementById('sun-icon')
  const body = document.body

  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    body.classList.add('light-mode')
    body.classList.remove('dark-mode')
    sunIcon.classList.add('hidden')
    moonIcon.classList.remove('hidden')
  } else {
    body.classList.add('dark-mode')
    body.classList.remove('light-mode')
    moonIcon.classList.add('hidden')
    sunIcon.classList.remove('hidden')
  }

  themeBtn.addEventListener('click', () => {
    gsap.fromTo(themeBtn,
      { rotation: -180, scale: 0.5 },
      { rotation: 0, scale: 1, duration: 0.6, ease: 'back.out(1.5)' }
    );

    body.classList.toggle('light-mode')
    body.classList.toggle('dark-mode')

    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light')
      sunIcon.classList.add('hidden')
      moonIcon.classList.remove('hidden')
    } else {
      localStorage.setItem('theme', 'dark')
      moonIcon.classList.add('hidden')
      sunIcon.classList.remove('hidden')
    }
  })
}

function initHeroAnimation() {
  const tl = gsap.timeline({
    onComplete: () => {
      heroTimelineFinished = true;
      startRandomFlips();
    }
  })
  const wrappers = document.querySelectorAll('.letter-wrapper')

  tl.to('.greeting', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    startAt: { y: 20 }
  })

  const icons = document.querySelectorAll('.icon-svg')
  tl.to(icons, {
    opacity: 1,
    scale: 1,
    y: 0,
    rotation: 0,
    duration: 0.8,
    stagger: 0.05,
    ease: 'back.out(1.5)',
    startAt: { opacity: 0, scale: 0.2, y: -50, rotation: -45 }
  }, '-=0.5')

  tl.to(icons, {
    opacity: 0,
    scale: 0.5,
    rotation: 90,
    duration: 0.5,
    stagger: 0.05,
    ease: 'power2.in'
  }, '+=1.5')

  const letters = document.querySelectorAll('.actual-letter')
  tl.to(letters, {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    stagger: 0.05,
    ease: 'back.out(2)'
  }, '<0.2')

  tl.to('.subtitle', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    startAt: { y: 20 }
  }, '-=0.5')

  wrappers.forEach(wrapper => {
    const icon = wrapper.querySelector('.icon-svg')
    const letter = wrapper.querySelector('.actual-letter')

    let hoverAnim = gsap.timeline({ paused: true })
      .to(letter, { opacity: 0, scale: 0.5, duration: 0.2, ease: 'power1.inOut' })

    if (wrapper.dataset.id === 'I') {
      const dot = icon.querySelector('.anim-dot')
      const line = icon.querySelector('.anim-line')
      hoverAnim
        .to(icon, { opacity: 1, scale: 1, rotation: 180, color: '#ef4444', duration: 0.5, ease: 'back.out(1.5)' }, '<0.1')
        .to(dot, { scale: 1.4, transformOrigin: 'center', duration: 0.25, yoyo: true, repeat: 1, ease: 'power2.out' }, '<')
        .to(line, { scaleY: 0.7, transformOrigin: 'center', duration: 0.25, yoyo: true, repeat: 1, ease: 'power2.out' }, '<')
    } else {
      hoverAnim.to(icon, { opacity: 1, scale: 1, rotation: 0, duration: 0.3, ease: 'back.out(1.5)' }, '<0.1')
    }

    hoverAnimations.set(wrapper, hoverAnim);

    wrapper.addEventListener('mouseenter', () => {
      if (heroTimelineFinished) hoverAnim.play()
    })

    wrapper.addEventListener('mouseleave', () => {
      if (heroTimelineFinished) hoverAnim.reverse()
    })
  })

  const sections = document.querySelectorAll('.section-content')
  sections.forEach(content => {
    gsap.fromTo(content, 
      { 
        y: 60, 
        opacity: 0, 
        filter: 'blur(8px)'
      },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: content.parentElement,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  // Contact Subtitle Slide-in Animation
  const contactSubtitle = document.querySelector('.contact-subtitle');
  if (contactSubtitle) {
    gsap.fromTo(contactSubtitle,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }
}
  // ==========================================
  // ReactBits Pixel Card Logic
  // ==========================================
  const pixelCard = document.getElementById('pixel-profile-card');
  const pixelCanvas = document.getElementById('pixel-canvas');
  if (pixelCard && pixelCanvas) {
    class Pixel {
      constructor(canvas, context, x, y, color, speed, delay) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.ctx = context;
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = (Math.random() * 0.8 + 0.1) * speed;
        this.size = 0;
        this.sizeStep = Math.random() * 0.4;
        this.minSize = 0.5;
        this.maxSizeInteger = 2;
        this.maxSize = (Math.random() * (this.maxSizeInteger - this.minSize)) + this.minSize;
        this.delay = delay;
        this.counter = 0;
        this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
        this.isIdle = false;
        this.isReverse = false;
        this.isShimmer = false;
      }
      draw() {
        const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
      }
      appear() {
        this.isIdle = false;
        if (this.counter <= this.delay) {
          this.counter += this.counterStep;
          return;
        }
        if (this.size >= this.maxSize) {
          this.isShimmer = true;
        }
        if (this.isShimmer) {
          this.shimmer();
        } else {
          this.size += this.sizeStep;
        }
        this.draw();
      }
      disappear() {
        this.isShimmer = false;
        this.counter = 0;
        if (this.size <= 0) {
          this.isIdle = true;
          return;
        } else {
          this.size -= 0.1;
        }
        this.draw();
      }
      shimmer() {
        if (this.size >= this.maxSize) {
          this.isReverse = true;
        } else if (this.size <= this.minSize) {
          this.isReverse = false;
        }
        if (this.isReverse) {
          this.size -= this.speed;
        } else {
          this.size += this.speed;
        }
      }
    }

    let pixels = [];
    let animationFrame;
    let timePrevious = performance.now();
    const ctx = pixelCanvas.getContext('2d');
    
    // Config matching ReactBits 'default' variant, but using your theme colors
    const gap = 5;
    const speed = 35 * 0.001;
    const colorsArray = ['#4ade80', '#3b82f6', '#8b5cf6'];

    function initPixels() {
      const rect = pixelCard.getBoundingClientRect();
      const width = Math.floor(rect.width);
      const height = Math.floor(rect.height);
      pixelCanvas.width = width;
      pixelCanvas.height = height;

      pixels = [];
      for (let x = 0; x < width; x += gap) {
        for (let y = 0; y < height; y += gap) {
          const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
          const dx = x - width / 2;
          const dy = y - height / 2;
          const distance = Math.sqrt(dx * dx + dy * dy);
          pixels.push(new Pixel(pixelCanvas, ctx, x, y, color, speed, distance));
        }
      }
    }

    function doAnimate(fnName) {
      animationFrame = requestAnimationFrame(() => doAnimate(fnName));
      const timeNow = performance.now();
      const timePassed = timeNow - timePrevious;
      const timeInterval = 1000 / 60;

      if (timePassed < timeInterval) return;
      timePrevious = timeNow - (timePassed % timeInterval);

      ctx.clearRect(0, 0, pixelCanvas.width, pixelCanvas.height);
      let allIdle = true;
      for (let i = 0; i < pixels.length; i++) {
        pixels[i][fnName]();
        if (!pixels[i].isIdle) allIdle = false;
      }
      if (allIdle) {
        cancelAnimationFrame(animationFrame);
      }
    }

    function handleAnimation(name) {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => doAnimate(name));
    }

    // Initialize
    initPixels();
    window.addEventListener('resize', () => {
      cancelAnimationFrame(animationFrame);
      initPixels();
    });

    // Hover interactions
    pixelCard.addEventListener('mouseenter', () => handleAnimation('appear'));
    pixelCard.addEventListener('mouseleave', () => handleAnimation('disappear'));
  }

function startRandomFlips() {
  const wrappers = Array.from(document.querySelectorAll('.letter-wrapper'));
  setInterval(() => {
    const randomWrapper = wrappers[Math.floor(Math.random() * wrappers.length)];
    const anim = hoverAnimations.get(randomWrapper);
    anim.play();
    setTimeout(() => { anim.reverse(); }, 1500);
  }, 4000);
}

// AI Bot Observer Logic
function initAIBot() {
  const bot = document.getElementById('ai-bot');
  const eyes = bot.querySelectorAll('.bot-eye');
  const tooltip = bot.querySelector('.bot-tooltip');

  // Eye tracking movement (observing cursor)
  document.addEventListener('mousemove', (e) => {
    const rect = bot.getBoundingClientRect();
    const botX = rect.left + rect.width / 2;
    const botY = rect.top + rect.height / 2;

    // Calculate angle
    const angle = Math.atan2(e.clientY - botY, e.clientX - botX);

    // Limit eye distance within the orb
    const distance = Math.min(4, Math.hypot(e.clientX - botX, e.clientY - botY) / 10);
    const eyeX = Math.cos(angle) * distance;
    const eyeY = Math.sin(angle) * distance;

    eyes.forEach(eye => {
      eye.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
    });
  });

  // Reaction on touch/click
  bot.addEventListener('click', () => {
    tooltip.classList.remove('hidden');
    tooltip.classList.add('show');

    gsap.fromTo(bot, { scale: 0.8 }, { scale: 1.2, duration: 0.3, yoyo: true, repeat: 1 });

    setTimeout(() => {
      tooltip.classList.remove('show');
    }, 2000);
  });
}

// Contact Form EmailJS Integration
function initContactForm() {
  const form = document.getElementById('contact-form');
  const result = document.getElementById('form-result');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const submitBtn = form.querySelector('.submit-btn span');
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'Sending...';

      const templateParams = {
        user_name:  form.user_name.value,
        user_email: form.user_email.value,
        message:    form.message.value,
        to_email:   'rakeshkannepelli@gmail.com',
        to_name:    'Rakesh Kannepelli',
        reply_to:   form.user_email.value,
      };

      emailjs.send('service_hjtojrl', 'template_na60239', templateParams)
        .then(() => {
          result.innerHTML = "Message sent successfully! ✅";
          result.className = "form-result success";
          form.reset();
        }, (error) => {
          console.log('FAILED...', error);
          result.innerHTML = "Something went wrong! " + (error.text || JSON.stringify(error));
          result.className = "form-result error";
        })
        .finally(() => {
          submitBtn.innerText = originalText;
          result.classList.remove('hidden');
          setTimeout(() => {
            result.classList.add('hidden');
          }, 5000);
        });
    });
  }
}

// Resume Button Animation
function initResumeAnimation() {
  const btn = document.getElementById('resume-btn');
  const iconSpan = btn.querySelector('.resume-icon');

  btn.addEventListener('click', (e) => {
    gsap.timeline()
      .to(iconSpan, { y: 20, opacity: 0, duration: 0.2, ease: 'power1.in' })
      .call(() => {
        iconSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
      })
      .to(iconSpan, { y: 0, opacity: 1, duration: 0.3, ease: 'back.out(2)' })
      .call(() => {
        setTimeout(() => {
          gsap.to(iconSpan, {
            opacity: 0, duration: 0.2, onComplete: () => {
              iconSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>';
              gsap.to(iconSpan, { opacity: 1, duration: 0.2 });
            }
          });
        }, 3000);
      })
  });
}
