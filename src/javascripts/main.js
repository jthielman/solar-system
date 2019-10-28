import '../styles/main.scss';
import 'bootstrap';
import cards from './components/cards/cards';
import events from './components/events/events';
import search from './components/search/search';

const init = () => {
  cards.showCards();
  search.makeSearchBar();
  search.search();
  events.attachEvents();
};

init();
