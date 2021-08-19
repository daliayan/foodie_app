const cityApi = new CityApi('http://localhost:3000/cities')
const form = document.getElementById('restaurant-form')

//loading City data to the document
document.addEventListener('DOMContentLoaded', () => {
    cityApi.getCities();
    form.addEventListener('submit', restaurantApi.submitForm.bind(restaurantApi))
});

// anon function