// accordion

// Take all faqTitles
let faqHeaders = document.querySelectorAll(".faq__item__header");

faqHeaders.forEach((faqHeader) => {

  faqHeader.addEventListener("click", () => {

    // Take parentElement
    const faqItem = faqHeader.parentElement;

    // Take arrow img and main text
    const accordionArrow = faqItem.querySelector("img");
    const accordionContent = faqItem.querySelector(".faq__item__content");
    
    accordionContent.classList.toggle("active");

    if(accordionContent.classList.contains("active")){
      accordionArrow.style.transform = `rotate(-180deg)`;
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
    else{
      accordionArrow.style.transform = `rotate(0)`;
      accordionContent.style.maxHeight = 0;
    }

  });

});


// Declare vars for modal window

let modalWindow = null;
let modalImage = null

// Fade in modal window on current image
function modalImg(id){

  // Create DOM elements
  modalWindow = document.createElement("div");
  modalImage = document.createElement("img");

  // Add class
  modalWindow.classList.add("modal__window");

  // Find current image
  modalImage.setAttribute("src", `src/img/nft ${id}.png`);

  // Add image to container
  modalWindow.append(modalImage);

  // Render modal image
  document.body.prepend(modalWindow);

  // Fade in bg in modal
  setTimeout(() => {
    modalWindow.style.opacity = 1;
  }, 100);

  // Fade in image
  setTimeout(() => {
    modalImage.style.opacity = 1;
    modalImage.style.transform = "translateY(0)";
  }, 500);
}

document.addEventListener("click", event => {

  if(event.target.classList.contains("modal__window")){
    setTimeout(() => {
      modalImage.style.opacity = 0;
      modalImage.style.transform = "translateY(-60px)";
    }, 100);

    setTimeout(() => {
      modalWindow.style.opacity = 0;
    }, 300);

    setTimeout(() => {
      modalWindow.remove();
      modalWindow = null;
      modalImage = null;
    }, 500);
  }

});



function chooseCreator(id) {

  // Delete active style in button
  document.querySelector(".creator__active").classList.remove("creator__active");

  let creatorName = document.querySelector(".creator div h3");
  let creatorText = document.querySelector(".creator div p");
  let creatorImg = document.querySelector(".creator img");

  //Fade out elements

  creatorName.style.opacity = 0;
  creatorText.style.opacity = 0;
  creatorImg.style.opacity = 0;

  //Change and fade in elements

  setTimeout(function () {

    switch (id) {

      case 0:
        creatorName.textContent = "Jack Nilson"
        creatorText.textContent = "Suspendisse ante mauris, volutpat congue sem ac, ultrices tempor lorem. Nullam eget vehicula tellus, acconsectetur urna. Mauris tincidunt, libero id ultrices tincidunt, mi leo pharetra dolor, sed luctus duiipsum et augue. Integer non quam feugiat, porttitor libero a, tempor neque. Nulla ac orci mauris. Quisque nisi nisl, rutrum ac diam et, semper commodo quam";
        creatorImg.setAttribute("src", "src/img/digital artist-0.png");
        break;

      case 1:
        creatorName.textContent = "Suni Sun"
        creatorText.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta temporibus, aperiam reprehenderit neque natus dignissimos consectetur voluptatem soluta! Itaque nostrum delectus nihil cum totam omnis distinctio voluptas reprehenderit, tempore cumque.";
        creatorImg.setAttribute("src", "src/img/digital artist-1.png");
        break;

      case 2:
        creatorName.textContent = "Colin Wong"
        creatorText.textContent = "Suspendisse ante mauris, volutpat congue sem ac, ultrices tempor lorem. Nullam eget vehicula tellus, acconsectetur urna. Mauris tincidunt, libero id ultrices tincidunt, mi leo pharetra dolor, sed luctus duiipsum et augue. Integer non quam feugiat, porttitor libero a, tempor neque. Nulla ac orci mauris. Quisque nisi nisl, rutrum ac diam et, semper commodo quam";
        creatorImg.setAttribute("src", "src/img/digital artist-2.png");
        break;
    }

    creatorName.style.opacity = 1;
    creatorText.style.opacity = 1;
    creatorImg.style.opacity = 1;

  }, 200);

  //Add active state style
  document.querySelectorAll(".creators__btns button")[id].classList.add("creator__active");

}