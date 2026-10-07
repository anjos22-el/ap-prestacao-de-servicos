document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");
  const menuToggle = document.querySelector("#menuToggle");
  const navigation = document.querySelector("#navigation");

  function updateHeader() {
    if (!header) return;

    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  updateHeader();

  window.addEventListener("scroll", updateHeader, { passive: true });

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen = navigation.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Abrir menu"
        );
      });
    });
  }
});
