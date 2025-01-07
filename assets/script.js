const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const input4 = document.querySelector("#input4");
const shape = document.querySelector("#shape");
const btn = document.querySelector("#btn");

input1.addEventListener("input", (e) => changeValueInput(1, e.target.value));
input2.addEventListener("input", (e) => changeValueInput(2, e.target.value));
input3.addEventListener("input", (e) => changeValueInput(3, e.target.value));
input4.addEventListener("input", (e) => changeValueInput(4, e.target.value));
btn.addEventListener("click", () =>
  copyToClipboard(
    `border-radius: ${input1.value || 0}px ${input3.value || 0}px ${input4.value || 0}px ${input2.value || 0}px`
  )
);

function changeValueInput(v, valueInput) {
  switch (v) {
    case 1:
      shape.style.borderTopLeftRadius = `${valueInput}px`;
      break;
    case 2:
      shape.style.borderBottomLeftRadius = `${valueInput}px`;
      break;
    case 3:
      shape.style.borderTopRightRadius = `${valueInput}px`;
      break;
    case 4:
      shape.style.borderBottomRightRadius = `${valueInput}px`;
      break;
  }
}

function copyToClipboard(value) {
  return navigator.clipboard.writeText(value);
}
