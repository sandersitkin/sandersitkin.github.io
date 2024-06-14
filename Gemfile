source "https://rubygems.org"

# Plugins
group :jekyll_plugins do
  gem "github-pages", "~> 231"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem do not have a Java counterpart
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
gem 'faraday-retry', '~> 2.2', '>= 2.2.1'
gem "webrick", "~> 1.8"
gem 'csv', '~> 3.3'
