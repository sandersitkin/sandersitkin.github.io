source "https://rubygems.org"

gem "jekyll"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem and associated library
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem do not have a Java counterpart
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Avoid polling for changes on Windows platforms
gem "wdm", "~> 0.2.0", :install_if => Gem.win_platform?
