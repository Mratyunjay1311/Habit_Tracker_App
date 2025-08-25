

document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll("nav button");
  const sections = document.querySelectorAll("main section");

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
    
      navButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

   
      const targetId = button.getAttribute("data-target");
      sections.forEach(section => {
        section.classList.remove("active");
        if (section.id === targetId) {
          section.classList.add("active");
        }
      });
    });
  });
});
