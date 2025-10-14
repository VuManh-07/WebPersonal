document.addEventListener("DOMContentLoaded", function () {
  const skills = document.querySelectorAll(".skill-progress");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  skills.forEach(skill => observer.observe(skill));
});
