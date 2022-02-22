
const fakeProductData = [
  {
    id: '123',
    title: 'Blue Drumset"',
    brand: 'Yamaha',
    price: 89999,
    description: 'This is a great drum set you should buy it today!',
    image: 'https://img.grouponcdn.com/stores/xeedMRUK7jjx6xqd8S8mD7aNKuL/storespi892307-1000x600/v1/c870x524.jpg',
  },
  {
    id: '456',
    title: 'Red Drumset',
    brand: 'Yamaha',
    price: 99999,
    description: 'This is a great drum set you should buy it today! but this on is red',
    image: 'https://media.sweetwater.com/images/items/750/SBP8F3CR-large.jpg?v=59a77bcd3841c67a',
  },
  {
    id: '789',
    title: 'Red Guitar',
    brand: 'Gibson',
    price: 199999,
    description: 'This is a great drum set you should buy it today! but this on is red',
    image: 'https://static.gibson.com/product-images/USA/USAPRN180/Cherry/front-banner-1600_900.png',
  },
  {
    id: '111',
    title: 'Big piano',
    brand: 'Kawai',
    price: 299999,
    description: 'This is a great drum set you should buy it today! but this on is red',
    image: 'https://kawaius.com/wp-content/uploads/2020/07/Kawai-DG30-Digital-Grand.jpg',
  },
];

// Function that simulates making a network request to fetch products
export const fetchProducts = () => new Promise((resolve, reject) => {
  console.log('fetching Data from imaginary products database')
  setTimeout(() => {
      try {
          // fetchingData from imaginary database
          resolve(fakeProductData)
      } catch (error) {
          reject(error);
      }
  }, 1000);
});

//    Lab: using the mock fetch user function provided,
//    store the user in the redux store and access that
//    data from the header to show the user first name.

// - dispatch an action with the user data after the "server" returns the user data.
//     since we are now dispatching we need a reducer that can read that action and change the state accordingly.
// - Create a reducer function to handle the user part of the redux state.
// - give that reducer to redux so that redux can call/run it every time an action is dispatched. (pass the reducer to redux where you create the redux store so that redux can call it)

// - In the header component use the 'useSelector()' hook to grab the userdata from the redux store and diplay it.

const fakeUserData = {
  id: '001',
  email: 'fake@user.com',
  firstName: 'Peter',
  lastName: 'Parker',
};

// Function that simulates making a network request to fetch products
export const fetchUser = (email, password) => new Promise((resolve, reject) => {
  console.log('fetching Data from imaginary products database')
  setTimeout(() => {
      try {
          // fetchingData from imaginary database
          resolve(fakeUserData)
      } catch (error) {
          reject(error);
      }
  }, 1000);
});
