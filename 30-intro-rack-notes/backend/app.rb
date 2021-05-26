require 'json'

class App
  def call(env)
    puts env
    resp = Rack::Response.new
    req = Rack::Request.new(env)
    headers = {
      "Content-Type" => "application/json"
      #  "Access-Control-Allow-Origin" => "*"
      #  "Access-Control-Allow-Credentials" => true
    }
    puts req.path
    if req.path.match(/hello/)
      # resp = Rack::Response.new([{ :message => "hello world!" }.to_json], 200, headers)
      # resp.finish
      return [200, headers, [{ :message => "hello world!" }.to_json]]
    else
      # resp = Rack::Response.new([{ :message => "no path matched" }.to_json], 200, headers)
      # resp.finish
      resp.write "Path not found"
    end
    resp.finish
  end
end
