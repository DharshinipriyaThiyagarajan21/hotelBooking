class AddIdProofToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :id_proof, :string
  end
end
