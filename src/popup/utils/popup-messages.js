export const POPUP_PROPS = {
  show: false,
  type: '',
  title: '',
  msg: '',
  class: '',
  secondBtn: false,
  secondBtnClick: '',
  data: '',
  buttonsTextPrimary: 'OK',
  buttonsTextSecondary: 'See in explorer',
  buttonsFillPrimary: 'primary',
  buttonsFillSecondary: 'secondary',
  noRedirect: false,
};
// error messages
export const INSUFFICIENT_BALANCE = { type: 'error', title: 'Insufficient balance', msg: 'The requested amount cannot be spent.' };
export const SEED_FAST_COPY = { type: 'error', title: 'That was too fast!', msg: 'Please make sure you write down the recovery phrase on paper and keep it in a safe place.' };
export const INCORRECT_ADDRESS = { type: 'error', title: 'Incorrect address', msg: 'Please make sure that you have entered a valid public address!' };
export const INCORRECT_AMOUNT = { type: 'error', title: 'Enter amount', msg: 'Please make sure you entered valid amount! ' };
export const TRANSACTION_FAILED = { type: 'error', title: 'Oops! Something went wrong', msg: 'We cannot process this transaction! Please, try again!' };
export const REQUIRED_FIELD = { type: 'error', title: 'Required fields!', msg: 'Please fill in all fields.' };
export const REMOVE_USER_NETWORK_ACTIVE_ERROR = {
  type: 'error',
  title: 'Can not be removed!',
  msg: 'This network is active right now. Please, select other active network and try again.',
};
export const USER_NETWORK_EXISTS_ERROR = {
  type: 'error',
  title: 'Network name exists!',
  msg: 'This name already exists in networks. Please, choose another name for your new network.',
};
export const INCORRECT_FIELDS_ADD_TOKEN = { type: 'error', title: 'Incorrect fields', msg: 'Please fill in all fields correctly! ' };
export const TOKEN_ADDED = { type: 'error', title: 'Token exists', msg: 'Token already added! ' };
export const TOKEN_INVALID_ADDRESS = { type: 'error', title: 'Oops! Something went wrong', msg: 'Invalid token contract address!' };
export const CHARS_ALLOWED = { type: 'error', title: 'Oops! Something went wrong', msg: 'Allowed only letters and numbers!' };
export const AENS_NAME_EXIST = { type: 'error', title: 'Oops! Something went wrong', msg: 'This name is already registered!' };
export const NOT_SELECTED_VAL = { type: 'error', title: 'Oops! Something went wrong', msg: 'Please, select token!' };
export const REQUIRED_NUMBER = { type: 'error', title: 'Oops! Something went wrong', msg: 'Please, enter valid and positive number!' };
export const ACCOUNT_ALREADY_EXIST = { type: 'error', title: 'Oops! Something went wrong', msg: 'This account already exist!' };
export const BALANCE_ACCOUNT_NOT_EXISTENT = { type: 'error', title: 'Oops! Something went wrong', msg: 'Insufficient balance of the sender' };
export const ACCOUNT_INSUFFICIENT_ALLOWANCE = { type: 'error', title: 'Oops! Something went wrong', msg: '' };
export const LEDGER_SUPPORT = { type: 'error', title: 'Oops! Something went wrong', msg: 'Ledger currently cannot sign this type of transaction! ' };
export const LEDGER_ACCOUNT_ERROR = { type: 'error', title: 'Oops! Something went wrong', msg: 'Account cannot be added! ' };
export const UNSUCCESS_VERIFYMESSAGE = { type: 'error', title: 'Oops! Something went wrong', msg: 'Verification failed!' };
export const INTEGER_REQUIRED = { type: 'error', title: 'Oops! Something went wrong', msg: 'To interact with fungible tokens, only integers. Decimal places are not allowed!' };
export const TX_LIMIT_PER_DAY = { type: 'error', title: 'Oops! Something went wrong', msg: 'You reach your daily limit for transactions! ' };
export const TOKEN_MIGRATION_ERROR = { type: 'error', title: 'Oops! Something went wrong', msg: 'Token is not migrated! ' };
export const REVEAL_SEED_IMPOSSIBLE = { type: 'error', title: 'Аttention to security', msg: 'This is only available after generating an account or after importing a phrase. ' };
export const ERROR_QRCODE = { type: 'error', title: '', msg: '' };
// success messages
export const SIGNED_MESSAGE = {
  type: 'success',
  title: 'Signed message:',
  msg: '',
  buttonsTextPrimary: 'Cancel',
  buttonsTextSecondary: 'Copy',
  buttonsFillPrimary: 'neutral',
  buttonsFillSecondary: 'primary',
};
export const PUBLIC_KEY_COPIED = { type: 'success', title: 'Copied to clipboard', msg: 'Copied to clipboard' };
export const SUCCESS_TRANSFER = { type: 'success', title: 'Transfer completed', msg: 'Transfer completed' };
export const SUCCESS_VERIFYMESSAGE = { type: 'success', title: 'Verification completed', msg: 'Verification completed' };
export const SUCCESS_DEPLOY = { type: 'success', title: 'Contract deployed', msg: 'Contract deployed' };
export const SUCCESS_ADDED = { type: 'success', title: 'Successfully added!', msg: 'Successfully added!' };
export const REMOVE_USER_NETWORK = {
  type: 'success',
  title: 'Are you sure?',
  msg: '',
  buttonsTextPrimary: 'No',
  buttonsTextSecondary: 'Yes',
  buttonsFillPrimary: 'primary',
  buttonsFillSecondary: 'alternative',
};
export const CONFIRM_TRANSACTION = {
  type: 'success',
  title: 'Confirm transaction?',
  msg: 'You are about to send some tokens to somebody. This transaction is irreversible! ',
  buttonsTextPrimary: 'Cancel',
  buttonsTextSecondary: 'Confirm',
  buttonsFillPrimary: 'primary',
  buttonsFillSecondary: 'alternative',
};
export const ALLOWANCE_CHANGE_SUCCESS = { type: 'success', title: 'Change completed', msg: 'Allowance for this account was successfuly changed!' };
export const AIRGAP_CREATED = { type: 'success', title: 'Vault sync completed!', msg: 'Find your AirGap Vault under your accounts.' };
export const CONFIRM_PRIVACY_CLEAR = {
  type: 'success',
  title: 'Confirm clear',
  msg: 'You are about to clear all connected Aepps! After this all Aepps must be granted access again ',
  buttonsTextPrimary: 'Cancel',
  buttonsTextSecondary: 'Confirm',
  buttonsFillPrimary: 'primary',
  buttonsFillSecondary: 'alternative',
};
export const TOKEN_MIGRATION = { type: 'success', title: 'Tokens migrated', msg: 'Your tokens was successfully migrated! ' };
export const TIP_URL_VERIFIED = {
  type: 'success',
  title: '',
  msg: `
<span style="display:block;margin-bottom:1rem;">
  <svg style="margin: 0 10px;vertical-align: text-bottom;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <g id="url-verified-icon" transform="translate(194 -630)">
      <circle id="Ellipse_15" data-name="Ellipse 15" cx="10" cy="10" r="10" transform="translate(-194 630)" fill="#6a8ebe"/>
      <circle id="Ellipse_16" data-name="Ellipse 16" cx="6.667" cy="6.667" r="6.667" transform="translate(-190.667 633.333)" fill="#f1f1f1"/>
      <g id="Selection_Control_Checkbox_On_Enabled" data-name="Selection Control / Checkbox / On / Enabled" transform="translate(-191.5 632.5)">
        <path id="Selection_Control_Checkbox_On_Enabled-2" data-name="Selection Control / Checkbox / On / Enabled" d="M19.333-681H7.667A1.666,1.666,0,0,0,6-679.333v11.667A1.666,1.666,0,0,0,7.667-666H19.333A1.666,1.666,0,0,0,21-667.667v-11.667A1.666,1.666,0,0,0,19.333-681Zm-7.5,11.667L7.667-673.5l1.175-1.175,2.992,2.983,6.325-6.325,1.175,1.183Z" transform="translate(-6 681)" fill="#6a8ebe"/>
      </g>
    </g>
  </svg>
  This URL has been verified.
</span>
This means that the creator of the content there or the website owner has
successfully claimed tips for this url.
  `,
};
