class CitiesController < ApplicationController

    def index 
        cities = City.all
        render json: cities , include: [:restaurants]
    end

    def show
        city = City.find(params[:id])
        render json: city 
    end

end
