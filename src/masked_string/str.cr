module Masked
  class Str
    def initialize(@value : String,
                   @chars_to_show : Int32 = 4,
                   @mask_char : Char = '*')
    end

    def value
      return @value if @value.size <= @chars_to_show
      mask_size = @value.size - @chars_to_show
      mask = @mask_char.to_s * mask_size
      mask + @value[mask_size..-1]
    end

    protected def _value
      @value
    end

    def ==(other : self)
      @value == other._value
    end

    def +(other : self)
      @value = @value + other._value
      self
    end

    def to_s
      value
    end
  end
end
