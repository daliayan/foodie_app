const restaurantApi = new RestaurantApi('http://localhost:3000/restaurants');

class Restaurant {

    constructor({id, name, nationality, rating, avatar, city_id}){
        this.id = id;
        this.name = name;
        this.nationality = nationality;
        this.rating = rating;
        this.avatar = avatar;
        this.cityId = city_id;

        // this.li = document.createElement('li');
        // this.li.dataset.id = id;
        // this.li.addEventListener('click', this.handleDelete);
    };
    
     getRestaurant(){
         const li = document.createElement('li');
         const deleteRes = document.createElement('button');

         li.innerText = this.name;

         deleteRes.classList.add('delete-btn');
         deleteRes.innerText = 'x';

         deleteRes.addEventListener('click', () => {
             restaurantApi.deleteRestaurant(this.id);
             li.remove();
         });

         li.appendChild(deleteRes);

         return li;
     };

    //  handleDelete(){
    //      this.remove();
    //      restaurantApi.deleteRestaurant(this.dataset.id);
    //  }
}