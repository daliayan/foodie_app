class RestaurantApi {

    constructor(baseURL){
        this.baseURL = baseURL;
    };

    getRestaurants(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(restObj => {
            let rest = new Restaurant(restObj)
            rest.getCityRestaurants();
            })  
    };


    deleteRestaurant(id){
        const config = {
            method: 'DELETE'  
        };

        fetch(`${this.baseURL}/${id}`, config)
        .then(resp => resp.json())
        .then(info => console.log(info.message))
    };
};