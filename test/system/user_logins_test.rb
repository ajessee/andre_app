# frozen_string_literal: true

require 'application_system_test_case'

class UserLoginsTest < ApplicationSystemTestCase
  # Happy paths
  test 'Log in with valid credentials and then log out' do
    andre = users(:one)
    log_in_as(andre, Rails.application.credentials.dig(:password, :admin_user_password))
    validate_user_logged_in(andre)
    logout
    validate_user_logged_out
  end

  test 'Login with remembering and then log out' do
    andre = users(:one)
    log_in_as(andre, Rails.application.credentials.dig(:password, :admin_user_password), true)
    validate_user_logged_in(andre, true)
    logout
    validate_user_logged_out(true)
  end

  # Error cases
  test 'Log in with invalid credentials' do
    andre = users(:one)
    log_in_as(andre, 'bad_password')
    validate_user_logged_in_failed
  end
end
