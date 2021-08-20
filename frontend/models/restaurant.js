const restaurantApi = new RestaurantApi('http://localhost:3000/restaurants');

class Restaurant {

    //constructing my restaurant data
    constructor({id, name, nationality, rating, city_id}){
        this.id = id;
        this.name = name;
        this.nationality = nationality;
        this.rating = rating;
        this.cityId = city_id;
    };
    
    // getting the restaurant data from CityApi
     getRestaurant(){
         const restaurantLi = document.createElement('li');
         const deleteRes = document.createElement('button');

         restaurantLi.innerText = this.name;

         deleteRes.classList.add('delete-btn');
         deleteRes.innerText = 'x';

         deleteRes.addEventListener('click', () => {
             restaurantApi.deleteRestaurant(this.id);
             restaurantLi.remove();
         });

         restaurantLi.appendChild(deleteRes);
         // Adds a new child node to an element as the last child node
        return restaurantLi;
     };

     // getting the values of nationality/rating for restaurant upon click
    //  getRestaurantContent(){

    //     const restaurantData = document.getElementByTagName('li');
    //     const restaurantDiv = document.createElement('div');
         
    //     restaurantDiv.classList.add('li');
    //     restaurantDiv.addEventListener('click', () => {
    //         restaurantApi.getRestaurant(restaurantData.data);
    //     });
    // }

}