const KEY = "5e25c641099b810b946c5d5b";

export class APIFactory {
  init = {
    headers: { "X-Api-Factory-Application-Id": KEY },
    type: "GET",
  };

  async getCities() {
    return await fetch("/city", this.init).then((r) => r.json());
  }

  async getPoints() {
    return await fetch("/point", this.init).then((r) => r.json());
  }
}
