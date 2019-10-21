import utilities from '../../helpers/utilities';
import planets from '../../helpers/data/planets';

import './cards.scss';

const makeCards = (arr) => {
  let stringToShow = '<div class="row">';
  for (let i = 0; i < arr.length; i += 1) {
    stringToShow += `
    <div class="col">
      <div id="card${i}" class="card planet-card">
        <div class="card-body">
          <h1>${arr[i].name}</h1>
          <img id="planet${i}" src="${arr[i].imageUrl}" alt="${arr[i].name}" class="d-none">
        </div>
      </div>
    </div>
    `;
  }
  stringToShow += '</div>';
  utilities.showOnPage('card-container', stringToShow);
};

const showCards = () => {
  makeCards(planets.getPlanets());
};

export default { showCards };
