export const documentsSelectors = {
  documentsSideBarLabel:
    '.nav__item--documents > .nav__link > .link-text-opened',

  documentsHeader: '.section__title',
  newProjectButton: '.controls > .button',
  newProjectTextField:
    '.mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',
  firstProjectOpenButton:
    ':nth-child(1) > .cards__item > .cards__footer > .open-file',
  firstProjectNameLabel: '.breadcrumbs__item--current > .mat-tooltip-trigger',
  firstProjectOptionsButton:
    ':nth-child(1) > .cards__item > .cards__header > app-options-menu > .mat-menu-trigger',
  projectOptionsMenu: '.mat-menu-content',
  projectOptionsDeleteButton: '.mat-menu-content > :nth-child(3)',
  projectDeleteConfirmButton:
    ':nth-child(2) > .mat-focus-indicator > .mat-button-wrapper',
  filesUploadedNumberLabel:
    ':nth-child(1) > app-project-info-card-item > .card-item > .card-info-container > .item-info-container > .item-value > div',
  firstFileNameLabel:
    ':nth-child(1) > .cdk-column-fileName > .files-name-section > app-edit-file-name > :nth-child(1) > .mat-tooltip-trigger > .file-name-wrapper > .file-name',

  uploadFileButton: '.mat-button-wrapper > span',
  uploadFilePopupTitle: '.title-container',
  uploadFileProjectDropdown: '.mat-form-field-infix',
  uploadFileProjectDropdownFirstOption: '#mat-option-1 > .mat-option-text',
  uploadFileArea: '.uppy-Dashboard-AddFiles',

  uploadFileConfirmButton: '.upload-btn',
  uploadFileStatusBar: '.uppy-StatusBar-statusPrimary',
  uploadFileFinishButton: '.uppy-u-reset',
  uploadFileNameLabel: '.file-name',

  // Recent redactions.
  recentRedactionsSection: '.aside-documents',
  recentRedactionsTitle: '.aside-documents__title',
  recentRedactedDocumentFirst: '.updated__item',
};
