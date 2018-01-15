import NormalizeWheel from './../../js/lib/normwheel.js';


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

$(function() {
  $('.preloader, .curtains').css({
    'opacity': 0,
    'zIndex': -10000
  });

  const $mainSlider = $('#mainSlider');

  _.animatePopup();



  $(document).on('keydown', function(e) {
    e.preventDefault();
    // const now = Date.now();
      
    switch (event.key) {
      case 'ArrowLeft':
        $mainSlider.trigger('prev.owl');
        break;
      case 'ArrowRight':
        $mainSlider.trigger('next.owl');
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  });
  
  $mainSlider.on('wheel', '.owl-stage', function(e) {
    const norm = NormalizeWheel(e.originalEvent);

    if (norm.spinY > 0) {
      $mainSlider.trigger('next.owl');
    } else {
      $mainSlider.trigger('prev.owl');
    }

    e.preventDefault();
  });

  $mainSlider.owlCarousel({
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

