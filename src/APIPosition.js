const KEY = "e5723d45adcb1fabd22de6f587e55c1c";

export const getCoordsByAddress = async (address) => {
  const url = new URL("http://api.positionstack.com/v1/forward");
  url.searchParams.set("access_key", KEY);
  url.searchParams.set("query", address);
  return await fetch(url).then((r) => r.json());
};
