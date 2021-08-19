const restaurantApi = new RestaurantApi('http://localhost:3000/restaurants');

class Restaurant {

    constructor({id, name, nationality, rating, avatar, city_id}){
        this.id = id;
        this.name = name;
        this.nationality = nationality;
        this.rating = rating;
        this.avatar = avatar;
        this.cityId = city_id;
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

     deleteRestaurant(id){
        const config = {
            method: 'DELETE'  
        };

        fetch(`${this.baseURL}/${id}`, config)
        .then(resp => resp.json())
        .then(info => console.log(info.message))
    };

}