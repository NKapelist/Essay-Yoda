import './styles/styles.scss';
import fontawesome from '@fortawesome/fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faCircle from '@fortawesome/fontawesome-free-regular/faCircle';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import '@fortawesome/fontawesome/styles.css'
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$('.expander').on('click', function(e){
    if($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $('.expander').removeClass('open');
      $(this).addClass('open');
    }
  });

  var indexToGet = $('.slider .slick-slide').index( $('#center_on_me') );

  $('.slider-nav').slick({
  slidesToShow: 3,
  infinite: true,
  centerMode: true,
  slidesToScroll: 1,
  initialSlide: indexToGet,
  dots: true,
  focusOnSelect: true,
});
