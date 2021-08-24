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
        //  const restaurantData = document.getElementByClassName('restaurants');


         restaurantLi.innerText = this.name;
         restaurantLi.classList.add('restaurant-data', 'restaurant-addition');

          // getting the values of nationality/rating for restaurant upon click
        restaurantLi.addEventListener('click', () => {
            const restdata = document.createElement('div');

            if (restaurantLi.getElementsByClassName('restaurant-addition')){
                console.log('clicked');
                restaurantLi.innerText = `Rating: ${this.rating} 
                    Nationality: ${this.nationality}`;
                
                // restaurantLi.appendChild(restdata);
            //    debugger
                // restaurantLi.appendChild(restdata);
                // debugger
            } else {
                // debugger
                // restaurantLi.appendChild(restdata);
                debugger
                restaurantLi.appendChild(restdata);
                return restaurantLi;
            }
         });

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
}