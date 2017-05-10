Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	devise_for :users
  	
  root to: 'hotel#index'

  get "/booking/index" =>"booking#index"
  get "/hotel/index" =>"hotel#index"
  get "/booking/new" =>"booking#new"

  resources 'hotel'
  resources 'booking'
  # resources 'booking' do
  #   collection do
  #     post 'add_booking'
  #   end
  # end

  resources 'room_inventory' do
    collection do
      post 'update_room_inventory'
      get 'get_room_inventory'
    end
  end

  resources 'room' do
    collection do
      post 'update_room_available'
      get 'get_updated_available'
    end
  end

  # resources 'hotel' do
  # 	collection do
  # 		get 'hotel_details'
  # 	end
  # end
end
