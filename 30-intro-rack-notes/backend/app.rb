class App
  def call(env)
    puts env
    resp = Rack::Response.new
    req = Rack::Request.new(env)
    headers = {
      "Content-Type" => "application/json"
    }
    puts req.path
    if req.path.match(/hello/)
      return [200, headers, [{ :message => "hello world!" }.to_json]]
    else
      resp.write "Path not found"
    end
    resp.finish
  end
end
