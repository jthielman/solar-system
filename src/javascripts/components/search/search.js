import $ from 'jquery';
import cards from '../cards/cards';
import planets from '../../helpers/data/planets';
import utilities from '../../helpers/utilities';

const makeSearchBar = () => {
  const domString = '<input id="search-input" class="form-control form-control-lg" type="text" placeholder="🔍 Search">';
  utilities.showOnPage('search', domString);
};

const search = () => {
  $('#search-input').keyup(() => {
    utilities.showOnPage('planet-info', '');
    const value = $('#search-input').val().toLowerCase(); // grabs the input contents
    const planetsArr = planets.getPlanets();
    const searchResults = [];
    planetsArr.forEach((planet) => {
      // I need to compare value to the planet.name and planet.description strings
      if (planet.name.toLowerCase().includes(value) || planet.description.toLowerCase().includes(value)) {
        // and then put the matching objects into their own array
        searchResults.push(planet);
      }
    });
    // and then print that new array to the DOM
    cards.makeCards(searchResults);
  });
  if ($('#search-input').val() === '🔍 Search') {
    $('.planet-card').show();
  }
};

export default { makeSearchBar, search };
