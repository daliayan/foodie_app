class RestaurantApi {

    constructor(baseURL){
        this.baseURL = baseURL;
    };

    getRestaurants(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        // .then(json => json.forEach(restObj => {
        //     Restaurant.findOrCreateBy(restObj)
        // }))
        .then(restaurants => 
            console.log(restaurants))
    }
    // fetch requests of API from Rails backend
    // .then (resp => resp.json())
    // . then


    deleteRestaurant(id){
        const config = {
            method: 'DELETE'  
        };

        fetch(`${this.baseURL}/${id}`, config)
        .then(resp => resp.json())
        .then(info => console.log(info.message))
    };
};