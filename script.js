document.querySelector('.animate-btn').addEventListener('click', () => {
  // Анимация заголовка
  gsap.fromTo(".title", { y: -50, opacity: 0 }, { duration: 2, y: 0, opacity: 1, ease: "bounce" });

  // Анимация круга
  gsap.to(".circle", {
      duration: 2,
      x: 200,
      backgroundColor: "#e74c3c",
      scale: 1.5,
      rotation: 360,
      yoyo: true,
      repeat: 1,
      ease: "elastic"
  });
});