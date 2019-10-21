import '../styles/main.scss';
import 'bootstrap';
import cards from './components/cards/cards';
import hover from './components/hover/hover';

const init = () => {
  cards.showCards();
  hover.attachEvents();
};

init();
