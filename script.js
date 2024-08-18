document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-title");
    button.addEventListener("click", () => {
      const currentlyOpen = document.querySelector(".accordion-item.open");
      if (currentlyOpen && currentlyOpen !== item) {
        currentlyOpen.classList.remove("open");
      }
      item.classList.toggle("open");
    });
  });
});
