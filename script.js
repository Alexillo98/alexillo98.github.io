document.addEventListener("DOMContentLoaded", () => {
  const cursorGlow = document.getElementById("cursorGlow");

  if (cursorGlow) {
    window.addEventListener("pointermove", (event) => {
      cursorGlow.style.left = `${event.clientX}px`;
      cursorGlow.style.top = `${event.clientY}px`;
    });
  }

  const menuButton = document.getElementById("menuButton");
  const navLinks = document.getElementById("navLinks");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const copyEmailButton = document.getElementById("copyEmail");

  if (copyEmailButton) {
    copyEmailButton.addEventListener("click", async () => {
      const email = "musateduardalexandru@gmail.com";

      try {
        await navigator.clipboard.writeText(email);
        copyEmailButton.textContent = "Email copied ✓";

        setTimeout(() => {
          copyEmailButton.textContent = "Copy email";
        }, 1800);
      } catch (error) {
        window.location.href = `mailto:${email}`;
      }
    });
  }
});