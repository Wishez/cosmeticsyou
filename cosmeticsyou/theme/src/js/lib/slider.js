import anime from 'animejs';
import Pieces from './pieces.js';


const sliderCanvas = document.querySelector('.pieces-slider__canvas');
const imagesEl = [].slice.call(document.querySelectorAll('.pieces-slider__image'));
const textEl = [].slice.call(document.querySelectorAll('.pieces-slider__text'));

const slidesLength = imagesEl.length;
let windowWidth = window.innerWidth;

let currentIndex = 0, 
  currentImageIndex, 
  currentTextIndex, 
  currentNumberIndex;
	
let textIndexes = [];
let numberIndexes = [];
let piecesSlider = {};
// Update current indexes for image, text and number
function updateIndexes() {
  currentImageIndex = currentIndex * 3;
  currentTextIndex = currentImageIndex + 1;
  currentNumberIndex = currentImageIndex + 2;
}

updateIndexes();

// Options for images
var imageOptions = {
  angle: 45, // rotate item pieces 45deg
  extraSpacing: {extraX: 100, extraY: 200}, // this extra spacing is needed to cover all the item, because angle != 0
  piecesWidth: function() { return Pieces.random(50, 200); }, // every piece will have a random width between 50px and 200px
  ty: function() { return Pieces.random(-400, 400); } // every piece will be translated in the Y axis a random distance between -400px and 400px
};

// Options for texts
var textOptions = {
  color: '#f2f2f2',
  backgroundColor: '#99303B',
  fontSize: function() { return windowWidth > 720 ? 18 : 21; },
  padding: '18 18 18 29',
  angle: 0,
  fontFamily: ["'Roboto', serif"],
  extraSpacing: {extraX: -300, extraY: -150},
  piecesWidth: function() { return Pieces.random(50, 200); },
  // h ,
  ty: function() { return Pieces.random(-200, 200); },
  translate: function() {
    if (windowWidth > 1120) return {translateX: 200, translateY: 200};
    if (windowWidth > 720) return {translateX: 0, translateY: 200};
    return {translateX: 0, translateY: 100};
  }
};

// Options for numbers
var numberOptions = {
  color: '#f2f2f2',
  backgroundColor: '#654178',
  // backgroundRadius: 600,
  fontSize: function() { return windowWidth > 720 ? 47 : 77; },
  padding: function() { return windowWidth > 720 ? '18 35 10 38' : '18 25 10 28'; },
  angle: 0,
  piecesSpacing: 2,
  fontFamily: ["'Politica', sans-serif"],
  extraSpacing: {extraX: 10, extraY: 10},
  piecesWidth: 35,
  ty: function() { return Pieces.random(-200, 200); },
  translate: function() {
    if (windowWidth > 1120) return {translateX: -340, translateY: -180};
    if (windowWidth > 720) return {translateX: -240, translateY: -180};
    return {translateX: -140, translateY: -100};
  }
};


var items = [];
var imagesReady = 0;
for (var i = 0; i < slidesLength; i++) {
  // Wait for all images to load before initializing the slider and event listeners
  var slideImage = new Image();
  slideImage.onload = function() {
    if (++imagesReady === slidesLength) {
      
      initSlider();
      initEvents();
    }
  };
  // Push all elements for each slide with the corresponding options
  items.push({type: 'image', value: imagesEl[i], options: imageOptions});
  items.push({type: 'text', value: textEl[i].innerText, options: textOptions});
  items.push({type: 'text', value: i + 1, options: numberOptions});
  // Save indexes
  
  textIndexes.push(i * 3 + 1);
  numberIndexes.push(i * 3 + 2);
  // Set image src
  slideImage.src = imagesEl[i].src;
} 


piecesSlider = new Pieces({
	  canvas: sliderCanvas, // CSS selector to get the canvas
	  items: items, // the Array of items we've built before
	  x: 'centerAll', // center all items in the X axis
	  y: 'centerAll', // center all items in the Y axis
	  piecesSpacing: 1, // default spacing between pieces
	  animation: { // animation options to use in any operation
	    duration: function() { return Pieces.random(1000, 2000); },
	    easing: 'easeOutQuint'
	  },
	  debug: false // set `debug: true` to enable debug mode
});

function initSlider() {
  	// Animate all numbers to rotate clockwise indefinitely
  
  piecesSlider.animateItems({
  	    items: numberIndexes,
  	    duration: 20000,
  	    angle: 360,
  	    loop: true
  });
  

  // Show current items: image, text and number
  showItems();
  showSliderText();

}

function showItems() {
	
  // Show image pieces
  piecesSlider.showPieces({
    items: currentImageIndex, 
    ignore: ['tx'], 
    singly: true, 
    update: (anim) => {
	        // Stop the pieces animation at 60%, and run a new indefinitely animation of `ty` for each piece
	        if (anim.progress > 60) {
	            var piece = anim.animatables[0].target;
	            var ty = piece.ty;

	            anime.remove(piece);

	            anime({
	                targets: piece,
	                ty: piece.h_ty < 300
	                    ? [{value: ty + 10, duration: 1000}, {value: ty - 10, duration: 2000}, {value: ty, duration: 1000}]
	                    : [{value: ty - 10, duration: 1000}, {value: ty + 10, duration: 2000}, {value: ty, duration: 1000}],
	                duration: 2000,
	                easing: 'linear',
	                loop: true
	            });
	        }
    }});
  // Show pieces for text and number, using alternate `ty` values
  // $()
  
  // piecesSlider.showPieces({items: currentTextIndex});
  const windowWidth = window.innerWidth; 
  if (windowWidth > 580) {
    piecesSlider.showPieces({items: currentNumberIndex, ty: function(p, i) { return p.s_ty - [-3, 3][i % 2]; }});
  }
}

// Hide current items: image, text and number
function hideItems() {
  piecesSlider.hidePieces({items: [currentImageIndex, currentTextIndex, currentNumberIndex]});
}

// Show current items: image, text and number
const $sliderText = $('#sliderText');
function switchAndAnimateSliderText() {
  $sliderText.animate({
    opacity: 0,
  }, 250, function() {
    showSliderText();

    $sliderText.css({
      opacity: 1
    });
  });
}
function showSliderText() {
  const sliderText  = $(`.pieces-slider__text[data-index="${currentIndex}"`).html();
  
  $sliderText.html(sliderText);
}

// Select the prev slide: hide current items, update indexes, and show the new current item
function prevSlide() {
  hideItems();
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slidesLength - 1;
  updateIndexes();
  switchAndAnimateSliderText();
  showItems();
}

// Select the next slide: hide current items, update indexes, and show the new current item
function nextSlide() {
  hideItems();
  currentIndex = currentIndex < slidesLength - 1 ? currentIndex + 1 : 0;
  updateIndexes();
  switchAndAnimateSliderText();
  showItems();
}

function initEvents() {
  const prevButtonEl = document.getElementById('prevButton');
  const nextButtonEl = document.getElementById('nextButton');
  // Select prev or next slide using buttons
  prevButtonEl.addEventListener('click', prevSlide);
  nextButtonEl.addEventListener('click', nextSlide);

  // Select prev or next slide using arrow keys
  document.addEventListener('keydown', function(e) {
	  if (e.keyCode === 37) { // left
	    prevSlide();
	  } else if (e.keyCode === 39) { // right
	    nextSlide();
	  }
  });


  window.addEventListener('resize', resizeStart);


}

let initial = true, hideTimer, resizeTimer;
// User starts resizing, so wait 300 ms before reinitialize the slider
function resizeStart() {
  
  
  if (initial) {
    initial = false;

    if (hideTimer) clearTimeout(hideTimer);

    sliderCanvas.classList.add('pieces-slider__canvas--hidden');
  }

  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resizeEnd, 300);
}

// User ends resizing, then reinitialize the slider
function resizeEnd() {
  initial = true;
  windowWidth = window.innerWidth;
  initSlider();
  hideTimer = setTimeout(() => {
    sliderCanvas.classList.remove('pieces-slider__canvas--hidden');
  }, 500);
}
