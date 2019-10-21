import utilities from '../../helpers/utilities';
import planets from '../../helpers/data/planets';
import cards from '../cards/cards';

import './info.scss';

const makeInfoCard = (obj) => {
  const domString = `
    <div id="info-card" class="card">
      <div id="close">X</div>
      <img src="${obj.imageUrl}" class="card-img-top" alt="${obj.name}">
      <div class="card-body">
      <h1 class="card-title">${obj.name}</h1>
        <p>${obj.description}</p>
      </div>
    </div>`;
  utilities.showOnPage('planet-info', domString);
};

const showInfo = (e) => {
  const planetIndex = e.target.id[6];
  utilities.showOnPage('card-container', '');
  makeInfoCard(planets.getPlanets()[planetIndex]);
};

const banishInfo = () => {
  utilities.showOnPage('planet-info', '');
  cards.showCards();
};

export default { showInfo, banishInfo };
