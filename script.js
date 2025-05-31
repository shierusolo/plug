<script>
  let lastScrollTop = 0;
  const header = document.getElementById("scrollHeader");

  window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll < lastScrollTop) {
      // scrolling up
      header.style.display = "block";
    } else {
      // scrolling down
      header.style.display = "none";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
</script>
