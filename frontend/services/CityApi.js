class CityApi {

    constructor(baseURL){
        this.baseURL = baseURL;
    };

    getCities(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        // .then(json => json.forEach(citObj => {
        //     let cit = City.findOrCreateBy(citObj)
        //     cit.render()
        // }))
        .then(cities => 
            console.log(cities))
        
            // json => 
            //     json.forEach(cityObj => {
            //     let cit = City.findOrCreateBy(cityObj)
            //     cit.render()
            // })
    };

};