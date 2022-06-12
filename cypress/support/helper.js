class Helper {
  getUniqueString(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getRandomEmail(length) {
    return this.getUniqueString(length) + "@anel.com";
  }

  getRandomPhoneNumber() {
    var result = "";
    var numbers = "0123456789";
    for (var i = 0; i < 12; i++) {
      result += numbers.charAt(Math.floor(Math.random() * 10));
    }
    return "+" + result;
  }

  getRandomPassword(length) {
    var result = "";
    var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var characters = "!@#";
    for (var i = 0; i < length; i++) {
      result += upperCharacters.charAt(
        Math.floor(Math.random() * upperCharacters.length)
      );
      result += lowerCharacters.charAt(
        Math.floor(Math.random() * lowerCharacters.length)
      );
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }
}
export default Helper;
