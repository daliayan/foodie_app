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

        //  const restaurantData = document.getElementById('restaurant-data');
        // const restaurantDiv = document.createElement('div');
        //  restaurantDiv.classList.add(restaurant-data);

         restaurantLi.innerText = this.name;

         deleteRes.classList.add('delete-btn');
         deleteRes.innerText = 'x';

         deleteRes.addEventListener('click', () => {
             restaurantApi.deleteRestaurant(this.id);
             restaurantLi.remove();
         });

         restaurantLi.appendChild(deleteRes);
        //  restaurantLi.appendChild(restaurantData);
        //  restaurantLi.appendChild(newres);
         // Need to append newres element to li in restaurantapi/restaurant
         return restaurantLi;
     };

}