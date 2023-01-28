export default class TripModel {

  constructor({ points, destinations, offers, offersByType }) {
    this.points = points;
    this.destinations = destinations;
    this.offers = offers;
    this.offersByType = offersByType;
  }

  getThePoints() {
    for (const point of this.points) {
      point.destination = this.destinations.find((destination) => point.destination === destination.id);
    }
    for (let offer of this.points.offers) {
      offer = this.offers.find((value) => offer === value.id);
    }
    return this.points;
  }

  getPoints() {
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].destination = this.destinations.find((destination) => this.points[i].destination === destination.id);
      for (let j = 0; j < this.points[i].offers.length; j++) {
        this.points[i].offers[j] = this.offers.find((offer) => this.points[i].offers[j] === offer.id);
      }
    }
    return this.points;
  }

  getOffersByType() {
    for (let i = 0; i < this.offersByType.length; i++) {
      for (let j = 0; j < this.offersByType[i].offers.length; j++) {
        this.offersByType[i].offers[j] = this.offers.find((offer) => this.offersByType[i].offers[j] === offer.id);
      }
    }
    return this.offersByType;
  }
}
