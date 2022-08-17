// defining all the required css classes
const slider = document.querySelector(".slide");
const activity = document.querySelectorAll(".activity");
const revealInfo = document.querySelectorAll(".reveal_info");
const revealBtn = document.querySelector(".reveal_btn");
const footerText = document.querySelector(".footer_text");
const modal = document.querySelector(".modal");
const sidebarItem = document.querySelectorAll(".sidebar_item");

// function for enabling slider functionality
function activateSlider(value) {
  revealBtn.style.display = "block";
  revealInfo.forEach((ele) => {
    ele.style.display = "none";
  });
  footerText.style.display = "none";
  let intValue = parseFloat(value);
  const classes = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 11];

  for (let i = 0; i <= classes.length; i++) {
    if (classes[i] <= intValue) {
      activity.forEach((ele) => {
        if (ele.classList.contains(classes[i])) {
          ele.classList.add("selected_activity");
        }
      });
    } else {
      activity.forEach((ele) => {
        if (ele.classList.contains(classes[i])) {
          ele.classList.remove("selected_activity");
        }
      });
    }
  }
}

//function for showing data when reveal button is clicked
function showData() {
  let sliderValue = slider.value;
  revealInfo.forEach((ele) => {
    let targetData = ele.getAttribute("data-target");
    if (targetData && sliderValue == targetData) {
      ele.style.display = "flex";
      footerText.style.display = "block";
      revealBtn.style.display = "none";
    } else {
      ele.style.display = "none";
    }
  });
}

//function for showing reference in a modal box
function showReference() {
  modal.classList.add("modal_active");
}

//function for closing the modal box
function closeReference() {
  let reference = document.querySelector(".reference");
  modal.classList.remove("modal_active");
  reference.classList.remove("active");
}

//activating the sidebar icon on click
sidebarItem.forEach((el) => {
  el.addEventListener("click", function () {
    var current = document.querySelector(".active");
    if (current) {
      current.classList.remove("active");
    }
    this.classList.add("active");
  });
});
