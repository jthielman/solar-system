import $ from 'jquery';
import info from '../info/info';

const showImg = (e) => {
  $(e.target).children('img').removeClass('d-none');
  $(e.target).children('h1').addClass('d-none');
};

const hideImg = (e) => {
  $(e.target).children('h1').removeClass('d-none');
  $(e.target).children('img').addClass('d-none');
};

const attachEvents = () => {
  $('#card-container').on('mouseleave', '.card-body', hideImg);
  $('#card-container').on('mouseenter', '.card-body', showImg);
  $('body').on('click', '.planet-card', info.showInfo);
  $('body').on('click', '#close', info.banishInfo);
};

export default { attachEvents };
