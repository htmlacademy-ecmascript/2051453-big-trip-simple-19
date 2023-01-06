import { NewTaskFormView } from '../view/create-form.js';
import { NewTaskEditFormView } from '../view/editing-form.js';
import { NewTaskFilterView } from '../view/filter.js';
import { NewTaskSortView } from '../view/sort';
import { NewTaskWaypointView } from '../view/waypoint.js';
import { render, RenderPosition } from '../render.js';

const filterContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');

export default class Presenter {
  init() {
    render(new NewTaskFilterView, filterContainer, RenderPosition.AFTERBEGIN);
    render(new NewTaskSortView, pointsContainer, RenderPosition.AFTERBEGIN);
    render(new NewTaskFormView(), pointsContainer, RenderPosition.BEFOREEND);
    for (let i = 0; i < 3; i++) {
      render(new NewTaskWaypointView(), pointsContainer, RenderPosition.BEFOREEND);
    }
    render(new NewTaskEditFormView(), pointsContainer, RenderPosition.BEFOREEND);
  }
}
