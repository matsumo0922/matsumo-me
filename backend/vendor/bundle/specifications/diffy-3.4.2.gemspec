# -*- encoding: utf-8 -*-
# stub: diffy 3.4.2 ruby lib

Gem::Specification.new do |s|
  s.name = "diffy".freeze
  s.version = "3.4.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Sam Goldstein".freeze]
  s.date = "2022-06-20"
  s.description = "Convenient diffing in ruby".freeze
  s.email = ["sgrock@gmail.org".freeze]
  s.homepage = "http://github.com/samg/diffy".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.3.26".freeze
  s.summary = "A convenient way to diff string in ruby".freeze

  s.installed_by_version = "3.3.26" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
    s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
  else
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
  end
end
