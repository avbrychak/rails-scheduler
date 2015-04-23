RailsDhtmlxscheduler::Application.routes.draw do
  match 'events/save' => 'events#save', as: :save, via: [:get, :post]
  resources :events
  root :to => 'pages#index'
end
