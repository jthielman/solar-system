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
  $('body').on('mouseenter', '.card-body', showImg);
  $('body').on('mouseleave', '.card-body', hideImg);
  $('body').on('click', '.planet-card', info.showInfo);
  $('body').on('click', '#close', info.banishInfo);
};

export default { attachEvents };
