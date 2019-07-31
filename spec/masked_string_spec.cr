require "./spec_helper"

describe Masked::Str do
  describe "masking" do
    it "masks properly" do
      ms = Masked::Str.new("12349999")
      ms.value.should eq "****9999"
    end

    it "doesn't mask if size is less than chars to show" do
      ms = Masked::Str.new("1234")
      ms.value.should eq "1234"
    end

    it "can use custom mask length" do
      ms = Masked::Str.new("12349999", 5)
      ms.value.should eq "***49999"
    end

    it "can use custom mask character" do
      ms = Masked::Str.new("12349999", '.')
      ms.value.should eq "....9999"
    end
  end

  describe "overrides" do
    it "overrides ==" do
      ms = Masked::Str.new("12349999")
      ms2 = Masked::Str.new("12349999")
      (ms == ms2).should be_true
      ms.should eq ms2
    end

    it "overrides ==, inverse" do
      ms = Masked::Str.new("99999999")
      ms2 = Masked::Str.new("12349999")
      (ms == ms2).should be_false
    end

    it "overrides !=" do
      ms = Masked::Str.new("99999999")
      ms2 = Masked::Str.new("12349999")
      (ms != ms2).should be_true
    end

    it "overrides +" do
      ms = Masked::Str.new("12345")
      ms2 = Masked::Str.new("67890")
      result = ms + ms2
      result.value.should eq "******7890"
    end

    it "overrides to_s" do
      Masked::Str.new("12349999").to_s.should eq "****9999"
    end
  end
end
