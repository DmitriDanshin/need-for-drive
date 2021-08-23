const KEY = process.env.VUE_APP_API;

export class APIFactory {
  init = {
    headers: { "X-Api-Factory-Application-Id": KEY },
    type: "GET",
  };

  async getCars() {
    return await fetch("/car", this.init);
  }

  async getCarsCategories() {
    return await fetch("/category", this.init);
  }
}
