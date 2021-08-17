const KEY = "5e25c641099b810b946c5d5b";

export class APIFactory {
  init = {
    headers: { "X-Api-Factory-Application-Id": KEY },
    type: "GET",
  };

  async getCars() {
    return await fetch("/car", this.init).then((r) => r.json());
  }

  async getCarsCategories() {
    return await fetch("/category", this.init).then((r) => r.json());
  }
}