const KEY = "5e25c641099b810b946c5d5b";
export const getCities = async () => {
  return await fetch("/city", {
    headers: {"X-Api-Factory-Application-Id": KEY},
    type: "GET",
  }).then((r) => r.json());
};

export const getPoints = async () => {
  return await fetch("/point", {
    headers: {"X-Api-Factory-Application-Id": KEY},
    type: "GET",
  }).then((r) => r.json());
};
