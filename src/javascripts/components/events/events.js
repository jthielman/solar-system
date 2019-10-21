import $ from 'jquery';
import info from '../info/info';

const toggleImg = (e) => {
  $(e.target).children('img').toggleClass('d-none');
  $(e.target).children('h1').toggleClass('d-none');
};

const attachEvents = () => {
  $('.card-body').hover(toggleImg);
  $('img').hover(toggleImg);
  $('body').on('click', '.planet-card', info.showInfo);
  $('body').on('click', '#close', info.banishInfo);
};

export default { attachEvents };
