const cityApi = new CityApi('http://localhost:3000/cities')

document.addEventListener('DOMContentLoaded', () => {
    cityApi.getCities();
});

// const restaurantApi = new RestaurantApi('http://localhost:3000/restaurants')
restaurantApi.getRestaurants();