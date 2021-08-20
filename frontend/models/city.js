class City {

    // constructing my city data
    constructor({id, name, restaurants}){
        this.name = name;
        this.id = id;
        this.restaurants = restaurants;
    };

    // gettign city data and setting up information
    getCity(){
        const cityList = document.getElementById('city-list');
        const cityDiv = document.createElement('div');
        cityDiv.classList.add('city-list');

        const cityInfo = this.getCityInfo();
        const restaurants = this.getCityRestaurants();
        
        // {    name: this.name,
        //     rating: this.rating,
        //     nationality: this.nationality,
        // }
    
        cityDiv.appendChild(cityInfo);
        cityList.appendChild(cityDiv);
        cityList.appendChild(restaurants);
        // append child returns the appended child of a parent node
    };

    // formatting my city data to be displayed
    getCityInfo(){
        const cityData = document.createElement('div');

        cityData.innerHTML = `${this.name}`; 
        return cityData;
    }

    // extracting the restaurant data to display beneath my city data
    getCityRestaurants(){
        const restaurantUl = document.createElement('ul');
        restaurantUl.id = `city-${this.id}`;
        restaurantUl.classList.add('restaurants');
        
        this.restaurants.forEach(restaurant => {
            const newRestaurant = new Restaurant(restaurant); // destructuring

            const li = newRestaurant.getRestaurant();
            restaurantUl.appendChild(li);
        });
        return restaurantUl;
    };

    // getting the values of nationality/rating for restaurant upon click
    getRestaurantContent(){

        const restaurantData = document.getElementByTagName('li');
        const restaurantDiv = document.createElement('div');
         
        restaurantDiv.classList.add('li');
        restaurantDiv.addEventListener('click', () => {
            restaurantApi.getRestaurant(restaurantData.data);
        });
    }

};