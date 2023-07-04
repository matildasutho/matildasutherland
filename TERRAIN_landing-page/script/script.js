let gradient = document.querySelector(".mouse-cursor-gradient-tracking");
gradient.addEventListener("mousemove", (e) => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      let trail = document.createElement("div");
      trail.classList.add("trail-element");

      trail.style.left = x + "px";
      trail.style.top = y + "px";

      gradient.appendChild(trail);

      setTimeout(() => {
        gradient.removeChild(trail);
      }, 500);
    }, 10);
  }

  gradient.style.setProperty("--x", x + "px");
  gradient.style.setProperty("--y", y + "px");
});

function showSubscribe() {
  const fadeIn = [{ opacity: "0" }, { opacity: "1" }];
  const fadeout = [{ opacity: "1" }, { opacity: "0" }];

  const fadeDuration = {
    duration: 300,
    iterations: 1,
  };

  const subCont = document.getElementById("mc-container");
  const expandBtn = document.getElementById("sub-expand");
  const closeBtn = document.getElementById("close-sub");
  const footer = document.getElementById("footer");

  expandBtn.addEventListener("click", () => {
    var state = subCont.getAttribute("class");

    setTimeout(() => {
      subCont.className = "";
      subCont.animate(fadeIn, fadeDuration);
    }, 299);
    footer.style.display = "none";
  });
  closeBtn.addEventListener("click", () => {
    var state = subCont.getAttribute("class");
    console.log(state);
    setTimeout(() => {
      subCont.className = "hidden";
    }, 299);
    footer.style.display = "block";
    subCont.animate(fadeout, fadeDuration);
  });
}

showSubscribe();
