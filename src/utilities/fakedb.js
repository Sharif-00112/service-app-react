// use local storage as your db for now
const addToDb = id => {
  const exists = getDb();
  let services_cart = {};
  if (!exists) {
    services_cart[id] = 1;
  }
  else {
    services_cart = JSON.parse(exists);
    if (services_cart[id]) {
      const newCount = services_cart[id] + 1;
      services_cart[id] = newCount;
    }
    else {
      services_cart[id] = 1;
    }
  }
  updateDb(services_cart);
}

const getDb = () => localStorage.getItem('services_cart');

const updateDb = cart => {
  localStorage.setItem('services_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const services_cart = JSON.parse(exists);
    delete services_cart[id];
    updateDb(services_cart);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
  localStorage.removeItem('services_cart');
}

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }