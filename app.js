window.addEventListener("load", () => {
  const upColumn = document.getElementById("column-up");
  const downColumn = document.getElementById("column-down");
  const upImages = Array.from(upColumn.querySelectorAll("img"));
  const downImages = Array.from(downColumn.querySelectorAll("img"));

  function animateUp(column, images) {
    images.forEach((img, index) => {
      let position = img.offsetTop;

      function move() {
        position -= 1; // Adjust speed by changing this value
        if (position < -img.height) {
          position = column.clientHeight;
        }
        img.style.top = `${position}px`;
        requestAnimationFrame(move);
      }

      move();
    });
  }

  function animateDown(column, images) {
    images.forEach((img, index) => {
      let position = img.offsetTop;

      function move() {
        position += 1; // Adjust speed by changing this value
        if (position > column.clientHeight) {
          position = -img.height;
        }
        img.style.top = `${position}px`;
        requestAnimationFrame(move);
      }

      move();
    });
  }

  upImages.forEach((img, index) => {
    img.style.top = `${index * (img.height + 10)}px`; // Initial positioning
  });

  downImages.forEach((img, index) => {
    img.style.top = `${index * (img.height + 10)}px`; // Initial positioning
  });

  animateUp(upColumn, upImages);
  animateDown(downColumn, downImages);
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("news-container");
  const items = Array.from(document.querySelectorAll(".news-item"));

  let currentIndex = 0;

  function scrollNews() {
    if (currentIndex >= items.length) {
      currentIndex = 0;
    }
    container.scrollTo({
      top: items[currentIndex].offsetTop,
      behavior: "smooth",
    });
    currentIndex++;
  }

  setInterval(scrollNews, 2000); // Adjust the interval as needed
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".download-button");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const url = event.target.getAttribute("data-url");
      window.open(url, "_blank");
    });
  });
});
