# Rails Form REST

## SWBAT
- Discuss and Review Forms
- Implement Edit, Update, New and Create 
- form_for, form_tag, link_to, button_tag, submit_tag
- Strong params
- Checking information before creating
## REST & CRUD
| HTTP        | CRUD          | Route
| ----------- | ------------- |----------------------|
| GET         | READ          | get '/candies'            |
| GET         | READ (one)    | get '/candies/:id'        |
| GET         | READ (form)   | get '/candies/new'        |
| POST        | CREATE        | post '/candies'           |
| GET         | READ (form)   | get '/candies/:id/edit'   |
| PUT/PATCH   | UPDATE        | patch '/candies/:id'      |
| DELETE      | DESTROY       | delete '/candies/:id'     |

## CHEAT SHEET
## form

### What is pluralized?
- Everything but the Model 

### How can I find out if my word is pluralized?
```
'word'.pluralize
```

### Where are my....???
- Models
    - app/models
- Controllers
    - app/controllers
- Views
    - app/views
- Routes
    - config/routes 

- Migrations 
    - db/migrate

- Seeds
    - db/seeds

### How do I make a new rails app?
```
rails new app_name
```

### How do I use rails generators 
#### DO NOT USE
```
rails generate scaffold 
```
- this will do everything for you and you are not allowed to use it until after phase-2, you must first learn how rails works, it generates a lot of files you don't need or know how to use yet so it's very obvious when you use it. **It is forbidden on the Code  Challenges and Projects**

#### DO USE

```
rails g model NameOfModel column_name:datatype column_name2:datatype2
```
- will create model and migration
```
rails g controller name_of_controller
```
- will create migration
```
rails g migration add_new_column_name_to_table_name column_name:datatype 
```
- adds a new column
```
rails g migration remove_column_name_from_table_name column_name:datatype
```
- removes a column

```
rails g resource ModelName column_name:datatype column_name2:datatype2
```
- will create model, controller, views and routes

### Routes 
```
#method 'route', to: 'controller#action'
get '/candy_stores', to: 'candy_stores#show'

```
- custom route
```
#method 'route', to: 'controller#action', as: 'prefix'
get '/candy_stores', to: 'candy_stores#show', as: 'candy'
```
- to draw a single route _and_ create a path helper (e.g. candy_path)
```
#resources :model_name 
resources :candy_stores
```
- all routes 
```
resources :model_name. only: [:index, :show, :new, :create, :edit, :update, :delete, :destroy]
resources( :candy_stores, {only: [:index]})
```
- specific routes (use this one)


## Resources 
[Security](http://guides.rubyonrails.org/v3.2.8/security.html)
[Rails Guides](http://edgeguides.rubyonrails.org/active_record_validations.html)
[Form For](https://guides.rubyonrails.org/form_helpers.html#binding-a-form-to-an-object)
[Rails Strong Params](https://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters)

### Private Keyword
[Read this (very short) article](http://ruby-for-beginners.rubymonstas.org/advanced/private_methods.html)

> You may use the resources keyword but use the only keyword to define only the actions you will be using

- Create your controllers
```ruby

```
Create your corresponding views
```ruby

```
## Mass Assignment & Strong Params 
This lecture is also a good opportunity to dive into strong params. Because of issues with mass assignment Rails does not allow you to initialize with params therefore you must use strong params
```ruby

```
It could also be cool to show students how the return of `pet_params`. Rails changes the params to `permitted:true`

#### Refactor with before_action 
Refactor your controllers Notice the number of times `Pet.find(params[:id])` is used

We can make sure that block of code is executed before each of the controller#actions that need it like :show,:edit,:update,:destroy
```ruby
```
[Chapter 8 Filters] Or you can refactor into the `before_action :find_pet`
```ruby
```