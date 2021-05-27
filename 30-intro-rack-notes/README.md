# Phase-3-ruby-intro-to-rack

You can start with an empty rb file. You'll want to use Pry in some way to run/debug your code, so maybe have a Gemfile with `gem "Pry"`.

## SWBATs

- [ ]  Review the client-server model and the request-response lifecycle
- [ ] Practice making a web server with Rack
- [ ] Utilize Postman to make a basic GET request from a Rack server
- [ ] Utilize react to make a request and see a response


## Outline

```text
10m Review client-server and request-response
20m Building with Rack
10m Making Requests from Postman Client
15m Making Request from a React Client
===
 1h Total
```

### Review client-server and request-response
HTTP (Hypertext Transfer Protocol) is the language of the web and describes how webpages and files are sent over the internet. The protocol is based on a model of client and server: the client is either a program or a browser, and the server is the computer that has information about the web page.

The server that we make this request to is always located using a URL or URI which is composed of a few parts. Consider this URI: https://flatironschool.com/career-courses. The first part is the protocol http:// or https:// at the beginning of the URI, which describes the language that we're using to communicate with this website. The next is the domain which can either be an IP address or a string like go.flatironschool.com. When the domain is formatted as a string, we can divide each part of the string into separate parts: com is the top-level domain, flatironschool is the second-level domain, and we can continue with subdomains like go in the example above. Following the domain is a port address which is formatted like go.flatironschool.com:80, but these ports are implicit when accessing servers over either HTTP or HTTPS. And lastly is the resource that you want from this domain. In our example, it's the /career-courses resource.

As we are browsing the internet and we click a link or type an address to our address bar, we say that a request is being made to a server. We're asking another computer somewhere else in the world to send us the webpage (a document) or some other information over the internet so that our browser can read it and present it to us. What exactly our browser gets back from the server is what we call a response, and this entire cycle is called the request-response lifecycle. When we make a request, we should get a response.

There's actually a bunch of stuff that happens after the request is fired off and before the server even knows about the request. This whole process is called DNS lookup and is how we translate a domain name (or a string of text) into an IP address which is the permanent address of a web server.

When the browser receives the response, it has some information about the response itself, like its status, as well as a response body. The response body in the case of webpages is the actual HTML of the page. When the browser begins to read this HTML, it sometimes sees that other resources need to be requested for the webpage to be complete. These are usually things like images, fonts, data, or scripts.

In a very specific order, the browser loads all the assets it needs and begins to render the page. The HTML defines the structure as well as most of the external assets needed. The CSS defines how the page should look. The JavaScript defines how the page will behave once loaded and how the user can interact with it.

### Building with Rack
Rack is one of the easiest tools that we can use to build a web server and it's what web server frameworks like Rails and Sinatra use to take in requests and send responses back.

The first that we need for our application is a new directory, and in that directory we'll need a Gemfile which will load the rack gem into our project.
```bash
touch Gemfile
```

The second thing that we need is a config.ru file. This file tells Rack how to run our webserver. It is both configuration and executable code. We will use it to tell Rack how to start our web application. In this file, we will require the rack gem. Let's leave this here while we set up our actual application.
```bash
touch config.ru
```
```ruby
# config.ru
require "rack"
```


The third thing that we need to do is to create an app.rb file which will hold all of our business logic (meaning the logic that the server will use to receive and respond to requests). Create an App class with a call instance method that accepts an environment hash and returns an array of a status code (as a number or string), some headers (as a hash), and a body (as an enumerable).
```bash
touch app.rb
```
```ruby
# app.rb
class App
  def call(env)
    
      return [200, { "Content-Type" => "application/json" }, [{ :message => "hello world!" }.to_json]]

  end
end
```

Lastly, we will require the app.rb file in our config.ru file and add the line run App.new. Now our application is ready to run, so we'll go to our Terminal and use the rackup command to run the server and navigate to localhost:9292.
```ruby
# config.ru
require_relative "./app"
# ...
run App.new
```
```bash
rackup
```

Note: Talk about what localhost means and where that address actually points to. Here's also a good place to bring back up the port in the URI. And lastly, bring up the shotgun gem and add it to the Gemfile to get automatic server restarts on file changes in the current directory.

```bash
bundle add shotgun
```

Inspect the environment hash by printing it to the console. This is hard to read, so we can use a utility provided by Rack to get some more context. Create a new variable in the App#call method called req and set it equal to Rack::Request.new(<your environment hash variable>).

Now we can inspect the path with req.path, use conditionals to respond to different types of paths with the match method req.path.match("/"), write a basic template as the body of the response with HTML, take student suggestions and play around. This is the beginning of actual web development!


```ruby
class App
    def call(env)
      resp = Rack::Response.new
      req = Rack::Request.new(env)
      headers = {
        "Content-Type" => "application/json"
      }
      if req.path.match(/hello/)
        return [200, headers, [{ :message => "hello world!" }.to_json]]
      else
        resp.write "Path not found"
      end
      resp.finish
    end
end

```


### Making Requests from Postman Client
Make a request using Postman to the rack server. Show the response as HTML in its raw form and how it's just text. Then show the preview of the HTML in the preview tab.



### Making Request from a React Client
Build a quick React app using create react app and make a GET request to the rack server. Console log the response and walk through the request-response lifecycle once more.  
```bash
    npx create-react-app rack-and-react-app
    rack-and-react-app
    npm start
```

Note that you'll get CORS errors when sending req/res on the same domain (localhost), so you'll need to use the cors gem to allow the traffic.
```bash
  bundle add rack-cors
```
```ruby
# in config.ru
require 'rack/cors'
#...
use Rack::Cors do
    allow do
        origins '*'
        resource '/*', headers: :any, methods: :get
    end
end
```
Finally:
```js
    // In rack-and-react-app APP, use componentDidMount() or the useEffect() hook to make a fetch as APP mounts for the first time
       
    async function fetchData() {
      const res = await fetch(RACK_URL + '/hello')
      const data = await res.json()
      return data
    }
    fetchData().then(console.log)

```