class RestaurantApi {

    constructor(baseURL){
        this.baseURL = baseURL;
    };

    createRestaurant(city_id){
        const restaurantInfo = {
            restaurant: {
                name: this.city_id.value,
                nationality: this.city_id.value,
                rating: this.city_id.value,
                avatar: this.city_id.value
            }
        }
        console.log(restaurantInfo);
    }


    deleteRestaurant(id){
        const config = {
            method: 'DELETE'  
        };

        fetch(`${this.baseURL}/${id}`, config)
        .then(resp => resp.json())
        .then(info => console.log(info.message))
    };
};