# Masked String

Simple masked string wrapper class. Once instantiated, the unmasked value cannot be accessed. Normal methods like `==`, `+`, and `to_s` are handled as well.

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     masked_string:
       github: denolfe/masked-string
   ```

2. Run `shards install`

## Usage

```crystal
require "masked_string"

masked = Masked::Str.new("123456789", 4)
masked.value #=> "*****6789"
masked.to_s  #=> "*****6789"
```

## Contributing

1. Fork it (<https://github.com/denolfe/masked_string/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [Elliot DeNolf](https://github.com/denolfe) - creator and maintainer
