Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  get 'users/new'
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql' if Rails.env.development?
  post '/graphql', to: 'graphql#execute'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :v1 do
    mount_devise_token_auth_for 'User', at: 'auth'
  end
end
