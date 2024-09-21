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

    //Add active state style
    document.querySelectorAll(".creators__btns button")[id].classList.add("creator__active");


  }, 200);


}