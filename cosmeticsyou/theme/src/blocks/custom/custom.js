import NormalizeWheel from './../../js/lib/normwheel.js';
import { TimelineMax, TweenLite } from 'gsap';

let cmt = (function() {
  return {};
}());

const _ = (function() {
  const _screwed = props => {
    const event = typeof props.event === 'undefined' ? 
      'click' : props.event;

    $(document).on(event, props.selector, props.callback);
  };

  function _setPosition($this, $tooltip) {
    var windowWidth = window.innerWidth,
      windowHeight = window.innerHeight,
      tooltipWidth = $tooltip.width(),
      tooltipHeight = $tooltip.height(),
      itemWidth = $this.width(),
      itemHeight = $this.height(),
      offset = $this.offset(),
      leftPosition = offset.left,
      // topPosition = offset.top,
      // verticalTooltipVector = topPosition + tooltipHeight,
      horizontalTooltipVector = leftPosition + itemWidth + 100,
      props = {};

    
    if (horizontalTooltipVector + tooltipWidth > windowWidth) {
      leftPosition = -itemWidth - ( tooltipWidth / 2) + 18;
    } else if (horizontalTooltipVector + tooltipWidth < 0) {
      leftPosition = 0;
    } else {
      leftPosition = '95%';
    }
    props.zIndex = '2';
    props.left = leftPosition;

    $tooltip
      .css(props);
  }

  const _showElement = $node => {

    $node
      .addClass('shown_element')
      .removeClass('visible-hidden');
  };
  const _hideElement = $node => {
    
    $node
      .removeClass('shown_element');
      
    setTimeout(() => {
      $node
        .addClass('visible-hidden')
        .css('zIndex', -1);

    }, 310);
  };

  let _popupStates = {};
  
  const _hideOther = () => {
    const lastOpenedPopup = _popupStates.lastOpenedPopup;

    for ( const popupId in _popupStates ) {
      const popup = _popupStates[popupId];
      if (popupId !== lastOpenedPopup &&
          popup.opened) {
        _hideElement($(popupId));
        popup.opened = false;
      }
    }
  };
  const _animatePopup = () => {
    
    $(document).on(
      'click', 
      '.showPopup', 
      function() {
        const $this = $(this);
        
        const popupId = $this.data('popupId');
        let elementState = _popupStates[popupId] || {};
        
        if (!(popupId in _popupStates)) {
          _popupStates[popupId] = elementState;
          elementState = _popupStates[popupId];
          elementState.opened = false;
        } 
        
        const $displayedElement = $(popupId);
        
        if (!elementState.opened) {
          _setPosition($this, $displayedElement);
          _showElement($displayedElement);
          _popupStates.lastOpenedPopup = popupId;
          _hideOther();
          elementState.opened = true;
        } else {
          _hideElement($displayedElement);
          elementState.opened = false;
        }
        
      });
    
    // $(document).on(
    //   'blur', 
    //   displayedElementId, 
    //   () => {
        
    //     if (elementState.opened) {
    //       _hideElement($displayedElement);
    //       elementState.opened = false;
    //     }
        
    //   }
    // );
    
    $(document).on(
      'click', 
      '.closeButton', 
      function() {
        const $this = $(this);
        const popupId = $this.data('popupId');
        const elementState = _popupStates[popupId];
        const $displayedElement = $(popupId);

        if (elementState.opened) {
          _hideElement($displayedElement);
          elementState.opened = false;
        }


        
      });
  };
  return {
    screwed: _screwed,
    show: _showElement,
    hide: _hideElement,
    animatePopup: _animatePopup
  };
}());

const SLIDER = (function() {
  const _state = {
    currentSlide: 1,
    $slider: '',
    isReverse: false
  };
  

  const _init = (sliderSelector, options, isAnimatedSlides=false) => {
    $(function() {
      _state.$slider = $(sliderSelector);
      const $slider = _state.$slider;
      if (!$slider.length) {
        return false;
      }

      $slider.owlCarousel(options);

      $(document).on('keydown', function(e) {
        e.preventDefault();
        // const now = Date.now();
          
        switch (event.key) {
          case 'ArrowLeft':
            $slider.trigger('prev.owl');
            break;
          case 'ArrowRight':
            $slider.trigger('next.owl');
            break;
          default:
            return; // Quit when this doesn't handle the key event.
        };
      });
      
      $slider.on('wheel', '.owl-stage', function(e) {
        const norm = NormalizeWheel(e.originalEvent);
    
        if (norm.spinY > 0) {
          $slider.trigger('next.owl');
          _state.isReverse = false;
        } else {
          $slider.trigger('prev.owl');
          _state.isReverse = true;
        }

        // _animate();
    
        e.preventDefault();
      }); // end load

      // if (isAnimatedSlides) {
      //   _animate();
      // }
    });
  };

  // function _animate() {
  //   const reverse = _state.isReverse;
  //   const $slider = _state.$slider;
  //   const $slide = $($slider.find('.active')[0]).find('.slide');
    
  //   let addClass = '';
  //   let removeClass = '';
  //   let leftTransition = $slide.width() / 2;
  //   let isAppend = true;
 
  //   if (!reverse) {
  //     addClass = 'slide_hidden';
  //     removeClass = 'slide_shown';
  //   } else {
  //     leftTransition = 0;
  //     isAppend = false;
  //     addClass = 'slide_shown';
  //     removeClass = 'slide_hidden';
  //   }

  //   console.log($slide, addClass, removeClass);

  //   $slide
  //     .addClass(addClass)
  //     .removeClass(removeClass);
        
  //   if (addClass === 'slide_hidden')
  //     setTimeout(() => {
  //       TweenLite.to($slide, 0, {
  //         opacity: 0 
  //       });
  //     }, 510);
  //   else
  //     TweenLite.to($slide, 0, {
  //       opacity: 1
  //     });

  //   TweenLite.to($slide, 0.5, {
  //     left: leftTransition 
  //   });

    // if (_state.isReverse) {
    // setTimeout(() => {
    //   animate(0.5, -5);
    // }, 250);
    // } else {
    // animate();
    // }
  // }

  return {
    start: _init
  };
}());

SLIDER.start('#mainSlider', {
  loop: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplayHoverPause: true,
  lazyLoad: true,
  items: 1,
  smartSpeed: 1000,
  autoplaySpeed: 1000,
  dots: true
});
SLIDER.start('#catalogs', {
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplayHoverPause: true,
  lazyLoad: true,
  items: 1,
  smartSpeed: 1000,
  autoplaySpeed: 1000,
  dots: false,
  nav: true,
  navText: ['&#8592;', '&#8594;'],
  responsive: {
    480: {
      items: 2,
    }
  }
}, true);

$(function() {
  $('.preloader, .curtains').css({
    'opacity': 0,
    'zIndex': -10000
  });

  const $mainSlider = $('#mainSlider');
  const $catalogs = $('#catalogs');

  _.animatePopup();

  $(document).on('click', '#checkReady', () => {
    let $checkReady = $('#checkReady');
    let $subButton = $('#registrataionSubmitButton');

    if ($checkReady.prop('checked'))
      $subButton.prop('disabled', false);
    else 
      $subButton.prop('disabled', true);  
  }); // end click
 

  // $catalogs.owlCarousel({
  // loop: true,
  // autoplay: true,
  // autoplayTimeout: 6000,
  // autoplayHoverPause: true,
  // lazyLoad: true,
  // items: 2,
  // smartSpeed: 1000,
  // autoplaySpeed: 1000,
  // dots: false,
  // arrow: true
  // });

  // $mainSlider.owlCarousel({
  	// loop: true,
  //  autoplay: true,
  //  autoplayTimeout: 6000,
  //  autoplayHoverPause: true,
  //  lazyLoad: true,
  //  items: 1,
  //  smartSpeed: 1000,
  //  autoplaySpeed: 1000,
  //  dots: true
  // });

  $(document).on('click', '.choice__button', function(e) {
    const data = $(this).data();
    const popupId = data.popupId;
    const url = data.src;

    const $figure = $('#figureWithChoice');

    $figure
      .animate({
        opacity: 0
      }, 300, () => {
        $figure
          .css('backgroundImage', `url('${url}')`)
          .data('popupId', popupId)
          .click()
          .animate({
            opacity: 1
          }, 300);
        

      });

      
  }); // end click
  $(document).on('click', '.not-follow', function(e) {
	  const url = $(this).attr('href');
	  
	  window.open(url);
	  
	  e.preventDefault();

  }); // end click
});

// if (!Modernizr.placeholder) {
//    $.html5support();
//    $.placeholder(); 
// }

