class App
  def call(env)
    puts env
    resp = Rack::Response.new
    req = Rack::Request.new(env)
    puts req.path
    if req.path.match(/hello/)
      return [200, { "Content-Type" => "application/json" }, [{ :message => "hello world!" }.to_json]]
    else
      return [200, { "Content-Type" => "application/json" }, [{ :message => "no path matched" }.to_json]]
    end
  end
end
