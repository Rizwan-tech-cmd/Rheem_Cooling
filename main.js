//getting all required elements
const gallery = document.querySelectorAll(".gallery-image"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  currentImg = previewBox.querySelector(".current-img"),
  totalImg = previewBox.querySelector(".total-img"),
  shadow = document.querySelector(".shadow");
window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length;
    let newIndex = i;
    let clickedImgIndex;

    gallery[i].onclick = () => {
      clickedImgIndex = i;
      function preview() {
        currentImg.textContent = newIndex + 1;
        let imageURL = gallery[newIndex].querySelector("img").src;
        previewImg.src = imageURL;
      }
      preview(); //calling above function

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if (newIndex == 0) {
        prevBtn.style.display = "none";
      }
      if (newIndex >= gallery.length - 1) {
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = () => {
        newIndex--; //decrement index
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      };
      nextBtn.onclick = () => {
        newIndex++; //increment index
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      };
      document.querySelector("body").style.overflow = "hidden";
      previewBox.classList.add("show");
      shadow.style.display = "block";
      closeIcon.onclick = () => {
        newIndex = clickedImgIndex;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
      };
    };
  }
};

///Cards///
// Function to open popup
function openPopup(id) {
  const popup = document.getElementById(id);
  if (popup) {
    popup.style.display = "flex";
  }
}

// Function to close popup
function closePopup(id) {
  const popup = document.getElementById(id);
  if (popup) {
    popup.style.display = "none";
  }
}

// Close popup when clicking outside the content
window.onclick = function (event) {
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
};
