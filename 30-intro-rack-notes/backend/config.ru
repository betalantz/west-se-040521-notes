require "rack"
require "rack/cors"
require "json"
require "pry"
require_relative "./app"

use Rack::Cors do
    allow do
        origins '*'
        resource '/*', headers: :any, methods: :get
    end
end

run App.new