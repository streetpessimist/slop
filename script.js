const sections = document.querySelectorAll(".left-panel section");
const rightContents = document.querySelectorAll(".right-panel .right-content");

let currentIndex = 1;

function showRightContent(index) {
  rightContents.forEach((content) => {
    content.style.display =
      content.getAttribute("data-match") == index ? "block" : "none";
  });
}

// Scroll-based detection
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentIndex = [...sections].indexOf(entry.target) + 1;
        showRightContent(currentIndex);
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => observer.observe(section));

// Hover override
sections.forEach((section, index) => {
  section.addEventListener("mouseenter", () => {
    showRightContent(index + 1);
  });
  section.addEventListener("mouseleave", () => {
    showRightContent(currentIndex);
  });
});

const triggers = document.querySelectorAll(".hover-trigger");

triggers.forEach((trigger) => {
  trigger.addEventListener("mouseenter", () => {
    const key = trigger.getAttribute("data-match");
    rightContents.forEach((content) => {
      content.style.display =
        content.getAttribute("data-match") == key ? "block" : "none";
    });
  });

  trigger.addEventListener("mouseleave", () => {
    showRightContent(currentIndex);
  });
});
