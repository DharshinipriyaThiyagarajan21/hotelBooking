Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	devise_for :users
  	
  root to: 'hotels#index'

  get "/bookings/index" =>"bookings#index"
  get "/hotels/index" =>"hotels#index"
  get "/bookings/new" =>"bookings#new"

  resources 'hotels'
  resources 'bookings'
  resources 'room_inventories'
  resources 'rooms'
  # resources 'booking' do
  #   collection do
  #     post 'add_booking'
  #   end
  # end

  resources 'room_inventories' do
    collection do
     get 'get_details'
    end
  end

  # resources 'rooms' do
  #   collection do
  #     post 'update_room_available'
  #     get 'get_updated_available'
  #   end
  # end
end
