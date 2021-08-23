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
         restaurantLi.classList.add('restaurant-data');

          // getting the values of nationality/rating for restaurant upon click
         restaurantLi.addEventListener('click', () => {
            // if (restaurantLi.id === this.click){
               restaurantLi.innerText = `Rating: ${this.rating}
                Nationality: ${this.nationality}`;
                return restaurantLi;
            //}
            // else {
            //     return restaurantLi;
            // };

            // restaurantLi.innerHTML = `<p> Restaurant Rating: ${this.rating}</p>
            //  <p>Restaurant Nationality: ${this.nationality}</p>`;
            // console.log(`${this.rating}, ${this.nationality}`)
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