# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# TO DEVELOP ON WINDOWS, UNCOMMENT THESE GEMS
# gem 'wdm', '>= 0.1.0' if Gem.win_platform?
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

ruby '3.0.0' # Home Laptop and Work Laptop now too

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails'
# Use postgresql as the database for Active Record
gem 'pg'
# Use Puma as the app server
gem 'puma'
# Use SCSS for stylesheets
gem 'sass-rails'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
gem 'bcrypt'
gem 'mini_magick'
# Gem to do HTML diffs
gem 'diffy'
# Use Active Storage variant
gem 'image_processing'
# AWS gem
gem 'aws-sdk-s3', require: false
# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false
gem 'faker'
gem 'will_paginate'
# Use rubocop for git pre-commit hook
gem 'rubocop'
# Use brakeman for git pre-push hook
gem 'brakeman'
# Used for creating fixtures from dev database, see rake tasks
gem 'humanize'
# Gem to do all kinds of geolocation magic
gem 'geocoder'
# Call 'byebug' anywhere in the code to stop execution and get a debugger console
gem 'pry-byebug', platforms: %i[mri mingw x64_mingw]

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'web-console', '>= 3.3.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara'
  gem 'capybara-email'
  gem 'minitest-reporters'
  gem 'webdrivers'
end
