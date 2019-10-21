import '../styles/main.scss';
import 'bootstrap';
import cards from './components/cards/cards';
import events from './components/events/events';

const init = () => {
  cards.showCards();
  events.attachEvents();
};

init();
