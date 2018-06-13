import './styles/styles.scss';
import fontawesome from '@fortawesome/fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faCircle from '@fortawesome/fontawesome-free-regular/faCircle';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';

$('.expander').on('click', function(e){
    if($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $('.expander').removeClass('open');
      $(this).addClass('open');
    }
  });