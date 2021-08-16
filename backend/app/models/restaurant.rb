class Restaurant < ApplicationRecord
    belongs_to :city
    # has_one_attached :avatar
end

# https://medium.com/@anaharris/how-to-add-image-upload-functionality-to-your-rails-app-9f7fc3f3d042
#Helpful link to show me how to add images to my restaurant review submission