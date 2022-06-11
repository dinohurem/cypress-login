class Helper {
  checkIfElementExists(element, parent) {
    return new Promise((resolve, reject) => {
      cy.get(parent).then((res) => {
        if (res.find(element).length > 0) {
          resolve();
        } else {
          reject();
        }
      });
    });
  }

  waitPageLoad(route, alias) {
    cy.intercept(route).as(alias);
    cy.wait("@" + alias);
  }

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

  getRandomPassword(length) {
    var result = "";
    var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    for (var i = 0; i < length; i++) {
      result += upperCharacters.charAt(
        Math.floor(Math.random() * upperCharacters.length)
      );
      result += lowerCharacters.charAt(
        Math.floor(Math.random() * lowerCharacters.length)
      );
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result;
  }
}
export default Helper;
