import { render, RenderPosition } from '../render.js';
import FilterView from '../view/filter.js';
import SortView from '../view/sort.js';
import PointView from '../view/point.js';

export default class TripPresenter {

  #filtersPosition = null;
  #containerPosition = null;
  #pointModel = null;

  #points = [];

  constructor(filtersPosition, containerPosition, pointModel) {
    this.#filtersPosition = filtersPosition;
    this.#containerPosition = containerPosition;
    this.#pointModel = pointModel;
  }

  init() {
    this.#points = [...this.#pointModel.points];
    render(new FilterView(), this.#filtersPosition, RenderPosition.AFTERBEGIN);
    render(new SortView(), this.#containerPosition, RenderPosition.AFTERBEGIN);
    this.#points.forEach((point) => render(new PointView(point), this.#containerPosition, RenderPosition.BEFOREEND));
  }
}
