import { createElement } from '../render.js';

export default class FilterView {

  createNewFilterTemplate() {
    return (
      `              <form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future" disabled>
      <label class="trip-filters__filter-label" for="filter-future">Future</label>
    </div>

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
    );
  }

  getTemplate() {
    return this.createNewFilterTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
