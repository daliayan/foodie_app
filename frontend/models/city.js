class City {

    constructor({id, name, restaurants}){
        this.name = name;
        this.id = id;
        this.restaurants = restaurants;
    };

    getCity() {
        const cityList = document.getElementById('city-list');
        const cityDiv = document.createElement('div');
        cityDiv.classList.add('city-list');

        const cityInfo = this.getCityInfo();
        
        const restaurants = this.getCityRestaurants();
            // debugger
        cityDiv.appendChild(cityInfo);
        cityList.appendChild(cityDiv);
        cityList.appendChild(restaurants);
        
    };

    getCityInfo(){
        const cityData = document.createElement('div');

        cityData.innerHTML = `
        <h1 style="font-size: 25px"> ${this.name}</h1>
        `; 
        return cityData;
    }

    getCityRestaurants(){
        const restaurantUl = document.createElement('ul');
        restaurantUl.classList.add('restaurants');
        
        this.restaurants.forEach(restaurant => {
            const newRestaurant = new Restaurant(restaurant); // destructuring

            const li = newRestaurant.getRestaurant();
            // debugger
            restaurantUl.appendChild(li);
        });
        return restaurantUl;
    };

};