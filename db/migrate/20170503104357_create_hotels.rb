class CreateHotels < ActiveRecord::Migration[5.0]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :city
      t.string :state
      t.string :country
      t.string :website
      t.string :phonenumber

      t.timestamps
    end
  end
end
