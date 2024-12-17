const textarea = document.querySelector("textarea");

textarea.addEventListener("keyup", (e) => {
  textarea.style.height = `60px`;
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});
