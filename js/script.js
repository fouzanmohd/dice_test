// defining all the required css classes
const slider = document.querySelector(".slide");
const activity = document.querySelectorAll(".activity");
const revealInfo = document.querySelectorAll(".reveal_info");
const revealBtn = document.querySelector(".reveal_btn");
const footerText = document.querySelector(".footer_text");
const modal = document.querySelector(".modal");
const sidebarItem = document.querySelectorAll(".sidebar_item");
const leftInfo = document.querySelector(".left_info");
const title = document.querySelector(".title");

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
  slider.value = 2.2;
  revealInfo.forEach((ele) => {
    let targetData = ele.getAttribute("data-target");
    if (targetData && slider.value == targetData) {
      ele.style.display = "flex";
      footerText.style.display = "block";
      revealBtn.style.display = "none";
    } else {
      ele.style.display = "none";
    }
  });
  const classes = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 11];
  for (let i = 0; i <= classes.length; i++) {
    if (classes[i] <= slider.value) {
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

  leftInfo.innerHTML = "The recommended number of activites:"
  title.innerHTML = "2. Recommendations for daily activities."
}

//function for showing reference in a modal box
function showReference() {
  let reference = document.querySelector(".reference");
  modal.classList.add("modal_active");
  reference.classList.add("active");
  console.log(reference.classList);
}

//function for closing the modal box
function closeReference() {
  let reference = document.querySelector(".reference");
  modal.classList.remove("modal_active");
  reference.classList.remove("active");
}
