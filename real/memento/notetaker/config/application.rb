require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RailsReactBoilerplate
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.assets.enabled = false

    config.generators do |generator|
      generator.assets false
    end

    #cors configuration
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', :headers => :any, :methods => [:get, :post, :options]
      end
    end
    #autoloads lib folder during production
    config.eager_load_paths << Rails.root.join('lib')

    #autoloads lib folder during development
    config.autoload_paths << Rails.root.join('lib')
  end
end
