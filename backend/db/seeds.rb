nyc = City.create(name: 'New York City')
madrid = City.create(name: 'Madrid')
rincon = City.create(name: 'Rincón')
tangier = City.create(name: 'Tangier')


Restaurant.create(name: "Misti's", nationality: "Peruvian", rating: 10, city: nyc)
Restaurant.create(name: "Malvy's Shakes", nationality: "Spanish", rating: 8, city: madrid)
Restaurant.create(name: "Ricomimi Bakery", nationality: "Puerto Rican", rating: 9 , city: rincon)
Restaurant.create(name: "Restaurant Ali Baba", nationality: "Moroccan", rating: 9, city: tangier)
Restaurant.create(name: "Maman", nationality: "French", rating: 8, city: nyc)
