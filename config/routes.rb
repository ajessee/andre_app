Rails.application.routes.draw do
  root 'hello#home'
  
  get 'hello/home'

  get 'projects' => 'projects#projects'

  get 'projects/todo' => 'projects#todo'

  get 'projects/loan-calculator' => 'projects#calculator'

  get 'projects/number-guesser' => 'projects#number_guesser'

  get 'projects/contacts' => 'projects#contacts'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
