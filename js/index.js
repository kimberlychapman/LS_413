
// This variable will always hold the "active" photo element (the div)
let activeCard = null;

// PART 1: Make the showPhoto function work
const showPhoto = (e) => {
    // Hint: figure out which element the user clicked from the event object:
    activeCard = e.target;
    console.log('the active element is:', activeCard);


    // Hint: figure out what its background image is:
    // const imgURL = activeCard.style.backgroundImage;
    // console.log('the background image of the active element is:', imgURL);

    // Your turn:
    // 1. set the .featured_image's background image to the imgURL (above), and
    const clickedImageBackground = activeCard.style.backgroundImage;
    document.querySelector('.featured_image').style.backgroundImage=clickedImageBackground;
    // 2. update the .preview_box's class to include the "active" class.

    document.querySelector('.preview').className = 'preview active';
    };

    // activeCard = e.target.nextElementSibling;
    // const clickedImageBackground = activeCard.style.backgroundImage
    // document.querySelector('.featured_image').style.backgroundImage=clickedImageBackground;

// PART 2: Replace this code with what's commented below.
//         Instead of just applying the event handler to
//         the first .card element, you want to apply it to
//         all of the card elements
// document.querySelector('.card').onclick = showPhoto;
const cards = document.querySelectorAll('.card');
for (card of cards) {
    card.onclick = showPhoto;
}

// PART 3: Close functionality
const close = () => {
  document.querySelector('.preview').className= 'preview';

    // a. This function should remove the “active” class from the
    //    “.preview_box” element.
    // b. Attach your newly created “close” function to the onclick
    //    event handler of the close button (in the upper right-hand corner).
};

document.querySelector('.close').onclick = close;


// PART 4: Next functionality:
// a. Modify the “next” function (below) so that that it replaces
//    the “.featured_image” background image to the next image in the list.
// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).
// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.
const next = () => {
  activeCard = activeCard.nextElementSibling;
  if (!activeCard) {
    activeCard=cards[0];

  }
  console.log(activeCard.nextElementSibling);
  const clickedImageBackground = activeCard.style.backgroundImage;
  document.querySelector('.featured_image').style.backgroundImage=clickedImageBackground;
    // HINTS:
    // 1. update the "activeCard" variable so that it's now the
    //    next card in the list.
    // 2. Then do the same steps as before (in the showPhoto).
    
};

document.querySelector('.next').onclick = next;



// PART 5: Previous functionality:
const prev = () => {
  activeCard = activeCard.previousElementSibling;
  if (!activeCard) {
  activeCard=cards[cards.length-1];

  }
  console.log(activeCard.previousElementSibling);
  const clickedImageBackground = activeCard.style.backgroundImage;
  document.querySelector('.featured_image').style.backgroundImage=clickedImageBackground;
//     // HINTS:
//     // 1. update the "activeCard" variable so that it's now the
//     //    next card in the list.
//     // 2. Then do the same steps as before (in the showPhoto).

};
//
document.querySelector('.prev').onclick = prev;
// // a. Create a “previous” function that switches out the
// //    “.featured_image” background image to the previous image
// //    in the list.
// // b. Attach your newly created “previous” function to the onclick
// //    event handler of the “.prev” button (in the upper right-hand corner).
