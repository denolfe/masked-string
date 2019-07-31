crystal_doc_search_index_callback({"repository_name":"github.com/denolfe/masked-string","body":"# Masked String\n\nSimple masked string wrapper class. Once instantiated, the unmasked value cannot be accessed. Normal methods like `==`, `+`, and `to_s` are handled as well.\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n```yaml\ndependencies:\n  masked_string:\n    github: denolfe/masked-string\n```\n\n## Usage\n\n```crystal\nrequire \"masked_string\"\n\nmasked = Masked::Str.new(\"123456789\", 4)\nmasked.value #=> \"*****6789\"\nmasked.to_s  #=> \"*****6789\"\n```\n\n## Contributing\n\n1. Fork it (<https://github.com/denolfe/masked_string/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [Elliot DeNolf](https://github.com/denolfe) - creator and maintainer\n","program":{"html_id":"github.com/denolfe/masked-string/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/denolfe/masked-string","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/denolfe/masked-string/Masked","path":"Masked.html","kind":"module","full_name":"Masked","name":"Masked","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"masked_string/version.cr","line_number":1,"url":"https://github.com/denolfe/masked-string/blob/af6ab8ff0c4f1b691ad40ac256caa432ef90e8b1/src/masked_string/version.cr"},{"filename":"masked_string/str.cr","line_number":1,"url":"https://github.com/denolfe/masked-string/blob/af6ab8ff0c4f1b691ad40ac256caa432ef90e8b1/src/masked_string/str.cr"},{"filename":"masked_string.cr","line_number":4,"url":"https://github.com/denolfe/masked-string/blob/af6ab8ff0c4f1b691ad40ac256caa432ef90e8b1/src/masked_string.cr"}],"repository_name":"github.com/denolfe/masked-string","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.1.0\"","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/denolfe/masked-string/Masked/Str","path":"Masked/Str.html","kind":"class","full_name":"Masked::Str","name":"Str","abstract":false,"superclass":{"html_id":"github.com/denolfe/masked-string/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"github.com/denolfe/masked-string/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/denolfe/masked-string/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"masked_string/str.cr","line_number":2,"url":"https://github.com/denolfe/masked-string/blob/af6ab8ff0c4f1b691ad40ac256caa432ef90e8b1/src/masked_string/str.cr"}],"repository_name":"github.com/denolfe/masked-string","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/denolfe/masked-string/Masked","kind":"module","full_name":"Masked","name":"Masked"},"doc":null,"summary":null,"class_methods":[],"constructors":[{"id":"new(value:String,chars_to_show:Int32=4,mask_char:Char=&#39;*&#39;)-class-method","html_id":"new(value:String,chars_to_show:Int32=4,mask_char:Char=&amp;#39;*&amp;#39;)-class-method","name":"new","doc":null,"summary":null,"abstract":false,"args":[{"name":"value","doc":null,"default_value":"","external_name":"value","restriction":"String"},{"name":"chars_to_show","doc":null,"default_value":"4","external_name":"chars_to_show","restriction":"Int32"},{"name":"mask_char","doc":null,"default_value":"'*'","external_name":"mask_char","restriction":"Char"}],"args_string":"(value : String, chars_to_show : Int32 = <span class=\"n\">4</span>, mask_char : Char = <span class=\"s\">&#39;*&#39;</span>)","source_link":"https://github.com/denolfe/masked-string/blob/af6ab8ff0c4f1b691ad40ac256caa432ef90e8b1/src/masked_string/str.cr#L3","def":{"name":"new","args":[{"name":"value","doc":null,"default_value":"","external_name":"value","restriction":"String"},{"name":"chars_to_show","doc":null,"default_value":"4","external_name":"chars_to_show","restriction":"Int32"},{"name":"mask_char","doc":null,"default_value":"'*'","external_name":"mask_char","restriction":"Char"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize(value, chars_to_show, mask_char)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}},{"id":"new(value:String,mask_char:Char=&#39;*&#39;,chars_to_show:Int32=4)-class-method","html_id":"new(value:String,mask_char:Char=&amp;#39;*&amp;#39;,chars_to_show:Int32=4)-class-method","name":"new","doc":null,"summary":null,"abstract":false,"args":[{"name":"value","doc":null,"default_value":"","external_name":"value","restriction":"String"},{"name":"mask_char","doc":null,"default_value":"'*'","external_name":"mask_char","restriction":"Char"},{"name":"chars_to_show","doc":null,"default_value":"4","external_name":"chars_to_show","restriction":"Int32"}],"args_string":"(value : String, mask_char : Char = <span class=\"s\">&#39;*&#39;</span>, chars_to_show : Int32 = <span class=\"n\">4</span>)","source_link":"https://github.com/denolfe/masked-string/blob/af6ab8ff0c4f1b691ad40ac256caa432ef90e8b1/src/masked_string/str.cr#L8","def":{"name":"new","args":[{"name":"value","doc":null,"default_value":"","external_name":"value","restriction":"String"},{"name":"mask_char","doc":null,"default_value":"'*'","external_name":"mask_char","restriction":"Char"},{"name":"chars_to_show","doc":null,"default_value":"4","external_name":"chars_to_show","restriction":"Int32"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize(value, mask_char, chars_to_show)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"id":"+(other:self)-instance-method","html_id":"+(other:self)-instance-method","name":"+","doc":null,"summary":null,"abstract":false,"args":[{"name":"other","doc":null,"default_value":"","external_name":"other","restriction":"self"}],"args_string":"(other : <span class=\"k\">self</span>)","source_link":"https://github.com/denolfe/masked-string/blob/af6ab8ff0c4f1b691ad40ac256caa432ef90e8b1/src/masked_string/str.cr#L28","def":{"name":"+","args":[{"name":"other","doc":null,"default_value":"","external_name":"other","restriction":"self"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@value = @value + other._value\nself\n"}},{"id":"==(other:self)-instance-method","html_id":"==(other:self)-instance-method","name":"==","doc":null,"summary":null,"abstract":false,"args":[{"name":"other","doc":null,"default_value":"","external_name":"other","restriction":"self"}],"args_string":"(other : <span class=\"k\">self</span>)","source_link":"https://github.com/denolfe/masked-string/blob/af6ab8ff0c4f1b691ad40ac256caa432ef90e8b1/src/masked_string/str.cr#L24","def":{"name":"==","args":[{"name":"other","doc":null,"default_value":"","external_name":"other","restriction":"self"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@value == other._value"}},{"id":"to_s-instance-method","html_id":"to_s-instance-method","name":"to_s","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/denolfe/masked-string/blob/af6ab8ff0c4f1b691ad40ac256caa432ef90e8b1/src/masked_string/str.cr#L33","def":{"name":"to_s","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"value"}},{"id":"value-instance-method","html_id":"value-instance-method","name":"value","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/denolfe/masked-string/blob/af6ab8ff0c4f1b691ad40ac256caa432ef90e8b1/src/masked_string/str.cr#L13","def":{"name":"value","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if @value.size <= @chars_to_show\n  return @value\nend\nmask_size = @value.size - @chars_to_show\nmask = @mask_char.to_s * mask_size\nmask + @value[mask_size..-1]\n"}}],"macros":[],"types":[]}]}]}})