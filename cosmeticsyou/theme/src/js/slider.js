import NormalizeWheel from './lib/normwheel.js';
import 'owl.carousel';

const SLIDER = (function(factory) {
  const _state = {
    currentSlide: 1,
    $slider: '',
    isReverse: false
  };

  const _init = (selector, options) => {
    $(function() {
      _state.$slider = $(selector);
      const $slider = _state.$slider;
      
      if (!$slider.length) {
    
        return false;
      }

      $slider.owlCarousel(options);
      
      $slider.on('wheel', '.owl-stage', function(e) {
        const norm = NormalizeWheel(e.originalEvent);
    
        if (norm.spinY > 0) {
          $slider.trigger('next.owl');
          _state.isReverse = false;
        } else {
          $slider.trigger('prev.owl');
          _state.isReverse = true;
        }
        e.preventDefault();
      }); // end load
    });
  };

  const _start = sliders => {
    $(function() {
      
      sliders.forEach(slider => {
        _init(slider.selector, slider.options);
      });
      
    });
  };

  return {
    start: _start
  };

}());

SLIDER.start([
  {
    selector: '#mainSlider', 
    options: {
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      lazyLoad: true,
      items: 1,
      smartSpeed: 1000,
      autoplaySpeed: 1000,
      dots: true
    }
  },
  {
    selector: '#catalogs', 
    options: {
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
      navText: ['Сюда', 'Туда'],
      responsive: {
        480: {
          items: 2,
        }
      }
    }
  }]);

