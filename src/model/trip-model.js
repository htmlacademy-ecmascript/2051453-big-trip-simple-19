export default class TripModel {
  // Объявляем приватные свойства
  #points = null;
  #destinations = null;
  #offers = null;
  #offersByType = null;

  // Инициализируем приватные свойства
  constructor({ points, destinations, offers, offersByType }) {
    this.#points = points;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#offersByType = offersByType;
  }


  // Геттер для получение точек маршрута
  get points() {
    return this.#points;
  }

  // Геттер для получение офферов
  get offersByType() {
    for (let i = 0; i < this.#offersByType.length; i++) {
      for (let j = 0; j < this.#offersByType[i].offers.length; j++) {
        this.#offersByType[i].offers[j] = this.#offers.find((offer) => this.#offersByType[i].offers[j] === offer.id);
      }
    }
    return this.#offersByType;
  }
}
