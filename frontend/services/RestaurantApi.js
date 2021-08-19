class RestaurantApi {

    constructor(baseURL){
        this.baseURL = baseURL;
    };

    //deleting restuarant function
    deleteRestaurant(id){
        const config = {
            method: 'DELETE'  
        };

        fetch(`${this.baseURL}/${id}`, config)
        .then(resp => resp.json())
        .then(info => console.log(info.message))
    };
};