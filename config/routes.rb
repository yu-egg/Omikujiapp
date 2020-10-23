Rails.application.routes.draw do
  get 'omikujis/index'
  root to: 'omikujis#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
