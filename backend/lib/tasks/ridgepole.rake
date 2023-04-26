namespace :ridgepole do
  desc 'ridgepole apply and export schema for development and test environment'
  task apply: :environment do
    sh 'bundle exec ridgepole -s primary -c config/database.yml --apply -f db/Schemafile'
  end
end
