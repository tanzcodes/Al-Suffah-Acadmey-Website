document.addEventListener("DOMContentLoaded", (event) => {
  // Register GSAP Plugin
  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero Text Entrance
  gsap.from(".carousel-item.active .carousel-caption *", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // 2. Vision & Mission (reveal-up) Animation
  const revealElements = gsap.utils.toArray(".reveal-up");
  revealElements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%", // Scroll section screen mein aate hi trigger hoga
          toggleActions: "play none none none"
        }
      }
    );
  });

  // 3. Why Choose Us (reveal-left / reveal-right)
  gsap.utils.toArray(".reveal-left").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%" }
      }
    );
  });

  gsap.utils.toArray(".reveal-right").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%" }
      }
    );
  });

  // 4. Counter Animation for Stats
  document.querySelectorAll('.counter').forEach(counter => {
    const target = +counter.getAttribute('data-count');

    ScrollTrigger.create({
      trigger: counter,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power1.out",
          onUpdate: function () {
            counter.innerText = Math.floor(counter.innerText) + (target >= 1000 ? "+" : "");
          }
        });
      }
    });
  });
});

