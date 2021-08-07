const KEY = "5e25c641099b810b946c5d5b";
export const getCities = async () => {
  const url = "https://api-factory.simbirsoft1.com/api/db/city/";
  return await fetch(url, {
    headers: { "X-Api-Factory-Application-Id": KEY },
    type: "GET",
  }).then((r) => r.json());
};

export const getPoints = async () => {
  const url = "https://api-factory.simbirsoft1.com/api/db/point/";
  return await fetch(url, {
    headers: { "X-Api-Factory-Application-Id": KEY },
    type: "GET",
  }).then((r) => r.json());
};
