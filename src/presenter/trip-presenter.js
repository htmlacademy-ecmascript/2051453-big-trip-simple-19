import { render, RenderPosition } from '../render.js';
import FilterView from '../view/filter.js';
import SortView from '../view/sort.js';
import EditingPointView from '../view/editing-point.js';
import PointView from '../view/point.js';
// import CreatePointView from '../view/create-point.js';

export default class TripPresenter {

  constructor(filtersPosition, containerPosition, pointModel) {
    this.filtersPosition = filtersPosition;
    this.containerPosition = containerPosition;
    this.pointModel = pointModel;
  }

  init() {
    this.points = [...this.pointModel.getPoints()];
    this.offersByType = [...this.pointModel.getOffersByType()];
    render(new FilterView(), this.filtersPosition, RenderPosition.AFTERBEGIN);
    render(new SortView(), this.containerPosition, RenderPosition.AFTERBEGIN);
    render(new EditingPointView(this.points[4], this.offersByType), this.containerPosition, RenderPosition.BEFOREEND);
    this.points.forEach((point) => render(new PointView(point), this.containerPosition, RenderPosition.BEFOREEND));
  }
}
