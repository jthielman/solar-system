import $ from 'jquery';

const toggleImg = (e) => {
  $(e.target).children('img').toggleClass('d-none');
  $(e.target).children('h1').toggleClass('d-none');
};

const attachEvents = () => {
  $('.card-body').hover(toggleImg);
  $('img').hover(toggleImg);
};

export default { attachEvents };
