import $ from 'jquery';

const showOnPage = (divId, toShow) => {
  $(`#${divId}`).html(toShow);
};

export default { showOnPage };
