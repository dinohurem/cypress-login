export const accountSelectors = {
  nameTextFieldAccount: '[data-testid="name-account-information"]',
  emailTextFieldAccount: '[data-testid="email-account-information"]',
  phoneTextFieldAccount: '[data-testid="phone-number-account-information"]',

  // Bug found, phone and address have the same data-testid values, that is the only reason why id is used as selector.
  addressTextFieldAccount: "#address",
  updateSettingsButton: '[data-testid="account-information-button"]',
  currentPasswordTextFieldAccount: '[data-testid="password-change"]',
  newPasswordTextFieldAccount: '[data-testid="new-password-change"]',
  confirmNewPasswordTextFieldAccount: '[data-testid="confirm-password-change"]',
  changePasswordButton: '[data-testid="change-password-button"]',
};
