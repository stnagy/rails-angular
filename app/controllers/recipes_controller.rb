class RecipesController < ApplicationController
  def index
  	@recipes = if params[:keywords]
  								if Rails.env.development? || Rails.env.test?
  									Recipe.where("name like ?", "%#{params[:keywords]}%" )
  								elsif Rails.env.production? || Rails.env.staging?
										Recipe.where("name ilike ?", "%#{params[:keywords]}%")
  								end
								else
									[]
								end
  end
end
