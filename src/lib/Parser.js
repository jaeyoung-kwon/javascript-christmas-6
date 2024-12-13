class Parser {
  static splitInputWithSeparator(input, separator) {
    return input.split(separator).map((item) => item.trim());
  };
    
  static stringToNumber(input) {
    return Number(input);
  }

  static priceToLocaleString(price) {
    return price.toLocaleString('ko-KR')
  }
};

export default Parser;