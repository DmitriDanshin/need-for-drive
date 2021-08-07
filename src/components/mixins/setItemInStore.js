export const setItemInStore = (name, value, component) => {
  const item = component.$store.state.orderCardItems.find(item => item.name === name);
  if (item) {
    item.value = value;
  } else {
    component.$store.state.orderCardItems.push({
      'name': name,
      'value': value,
    });
  }
};