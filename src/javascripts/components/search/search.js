import $ from 'jquery';
import utilities from '../../helpers/utilities';

const makeSearchBar = () => {
  const domString = '<input id="search-input" class="form-control form-control-lg" type="text" placeholder="🔍 Search">';
  utilities.showOnPage('search', domString);
};

const search = () => {
  $('#search-input').keyup(() => {
    const value = $('#search-input').val();
    $('.planet-card').hide();
    /* $(`.planet-card:contains("${value}")`).closest('.planet-card').show(); */
  });
  if ($('#search-input').val() === '🔍 Search') {
    $('.planet-card').show();
  }
};

export default { makeSearchBar, search };
