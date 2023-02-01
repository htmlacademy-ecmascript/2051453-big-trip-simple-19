import TripPresenter from './presenter/trip-presenter.js';
import TripModel from './model/trip-model.js';
import { getPointMock, getDestinationMock, getOffersMock, getOffersByType } from './mock/trip-mock.js';

const filtersPosition = document.querySelector('.trip-controls__filters');
const containerPosition = document.querySelector('.trip-events');
const points = getPointMock();
const destinations = getDestinationMock();
const offers = getOffersMock();
const offersByType = getOffersByType();
const tripModel = new TripModel({points, destinations, offers, offersByType});
const tripPresenter = new TripPresenter(filtersPosition, containerPosition, tripModel);
tripPresenter.init();

