nyc = City.create(name: 'New York City')
boston = City.create(name: 'Boston')
miami = City.create(name: 'Miami')
losangeles = City.create(name: 'Los Angeles')


Restaurant.create(name: "Kochi", nationality: "Korean", rating: 8, city: nyc)
Restaurant.create(name: "Gran Gusto", nationality: "Italian", rating: 7, city: boston)
Restaurant.create(name: "Puerto Sagua", nationality: "Cuban", rating: 9 , city: miami)
Restaurant.create(name: "Guelaguetza Restaurant", nationality: "Mexican", rating: 7, city: losangeles)
Restaurant.create(name: "Xelaju", nationality: "Guatemalan", rating: 8, city: nyc)

# avatar: "https://cititour.com/NYC_Restaurants/photos/17475_Kochi%2C%20Korean%2C%20Hell%27s%20Kitchen%2C%20NYC%201.jpg"
# avatar: "https://tinyurbankitchen.com/wp-content/uploads/2010/06/4708258758_f0d54ebd71_b.jpg" 
# , avatar: "https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2018/10/26/0/CI_Havana-1957_Miami-best-cuban-restaurants-4.jpg.rend.hgtvcom.1280.853.suffix/1540566302040.jpeg"
# , avatar: "https://d1ralsognjng37.cloudfront.net/129512af-eb33-4b5b-a4a9-58fa772002a1" 
# , avatar: "https://duyt4h9nfnj50.cloudfront.net/resized/d8d07154a52cc81df050ca959993cff1-w2880-7f.jpg" 