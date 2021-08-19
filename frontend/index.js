const cityApi = new CityApi('http://localhost:3000/cities')
const form = document.getElementById('restaurant-form')
const restaurantName = document.getElementById('restaurant-name')
const restaurantNationality = document.getElementById('restaurant-nationality')
const restaurantRating = document.getElementById('restaurant-rating')

//loading City data to the document
document.addEventListener('DOMContentLoaded', () => {
    cityApi.getCities();
});

form.addEventListener('submit', submitForm)

function submitForm(eve){
    eve.preventDefault();
    debugger
    // making a params hash to dictate the info the user can submit
    const formData = {
        name: restaurantName.value, 
        price: restaurantNationality.value, 
        description: restaurantRating.value, 
    }
}