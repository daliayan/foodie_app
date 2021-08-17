class City {
    static container = document.getElementById('city-list');
    constructor({id, name, restaurants}){
        this.name = name;
        this.id = id;
        this.restaurants = restaurants;
        
        
         // New elements to add to the array.
        // Appends new elements to the end of an array, and returns the new length of the array.
    };

    getCity() {
        const cityDiv = document.createElement('div');

        cityDiv.classList.add('city-list');

        // const cityName = document.createElement('h1');
        // cityName.innerText = this.name;

        const cityInfo = this.getCityInfo();
        
        const restaurants = this.getCityRestaurants();
        // debugger
        cityDiv.appendChild(cityInfo);
        // cityList.appendChild(restaurants);
        // City.container.appendChild(restaurants);
    };

    getCityInfo(){
        const cityData = document.createElement('div');

        cityData.innerHTML = `
        <h1> ${this.name}</h1>
        <p>Restaurants: ${this.restaurants}<p>
        `; 
        return cityData;
    }

    getCityRestaurants(){
        const restaurantUl = document.createElement('li');
        restaurantUl.classList.add('restaurants');
        this.restaurants.forEach(restaurant => {
            const newRestaurant = new Restaurant(restaurant);

            const li = newRestaurant.getRestaurant();
            restaurantUl.appendChild(li);
        });
        return restaurantUl;
    };

    // getRestaurantForm(){

    // };

};