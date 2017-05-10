class ApplicationController < ActionController::Base
	before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    # devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:email, :password, :name, :mobile,:panNumber,:gender,:maritalStatus,:ifsccode,:accountno) }
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :name, :city, :state, :country, :phone_number, :id_proof])
  end
end
