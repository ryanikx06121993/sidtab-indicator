let arrays = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div");

// console.log(arrays, tabContents);

arrays.forEach((array, index) => {
  array.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
      //   console.log(content);
    });
    arrays.forEach((array) => {
      array.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    arrays[index].classList.add("active");
  });
});
