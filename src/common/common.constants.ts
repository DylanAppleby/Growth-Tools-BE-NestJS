/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
export enum LanguageCode {
  Vn = 'vn',
  United_States = 'en',
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export enum Role {
  Investor = 'Investor',
  Agent = 'Agent',
  Lender = 'Lender',
  Vendor = 'Vendor',
  Builder = 'Builder',
}

export enum StatusCode {
  GET_USER_INFORMATION_SUCCESS = 1001,
  GET_USER_INFORMATION_FAIL = 1002,
  GET_USER_DETAILS_SUCCESS = 1003,
  GET_USER_DETAILS_FAIL = 1004,
  UPDATE_USER_INFORMATION_SUCCESS = 1005,
  UPDATE_USER_INFORMATION_FAIL = 1006,
  CHANGE_STATUS_SUCCESS = 1007,
  CHANGE_ROLES_SUCCESS = 1008,
  INVALID_GOOGLE_TOKEN = 401,
  USER_LOGIN_SUCCESSFULLY = 200,
  USER_LOGIN_FAILED = 1006,
  USER_NOT_FOUND = 404,
  SESSION_EXPIRED = 200,
  USER_SIGN_UP_REQUIRED = 1001,
  USER_SIGN_UP_SUCCESSFULLY = 1002,
  USER_VERIFY_PHONE_CODE_ERROR = 1003,
  USER_VERIFY_PHONE_CODE_SUCCESSFULLY = 1004,
  USER_SIGN_UP_PHONE_EXISTED = 1005,
  USER_SIGN_UP_EMAIL_EXISTED = 1008,
  INVALID_EMAIL = 1013,
  YOUR_ACCOUNT_IS_DEACTIVATED = 1014,
  YOUR_PASSWORD_IS_INVALID_MUST_ENTRIES = 1015,
  YOUR_PASSWORD_IS_INVALID = 1016,
  USER_NOT_VERIFY = 1017,
  REPASSWORD_NOT_MATCH = 1018,
  RESET_PASSWORD_ERROR = 1019,
  RESET_PASSWORD_SUCCESSFULLY = 1020,
  SEND_CODE_FORGOT_PASSWORD_SUCCESSFULLY = 1021,
  SEND_MAIL_FORGOT_PASSWORD_SUCCESSFULLY = 1022,
  NEW_PASSWORD_SAME_OLD_PASSWORD = 1023,
  GET_LIST_USERS_FAIL = 1024,
  GET_LIST_USERS_SUCCESSFULLY = 1025,
  PHONE_CODE_EXPIRED = 1026,
  CHANGE_PASSWORD_SUCCESSFULLY = 1027,
  CHANGE_PASSWORD_FAIL = 1028,
  WRONG_PASSWORD = 1029,
  ADD_USER_ROLE = 1027,
  YOUR_ACCOUNT_IS_NOT_CORRECT = 1030,
  VERIFY_FORGOT_PASSWORD_EMAIL_SUCCESSFULLY = 1031,
  ROLE_NAME_ALREADY_EXIT = 1032,
  DOB_IS_NOT_BIGGER_THAN_NOW = 1033,
  INVALID_METHOD_FORGOT_PASSWORD_GOOGLE = 1034,
  INVALID_METHOD_FORGOT_PASSWORD_FACEBOOK = 1035,
  YOU_HAVE_BEEN_SUCCESSFULLY_LOGGED_OUT = 1036,
  USER_CANNOT_CHANGE_THEIR_STATUS = 1036,
  VERIFY_2FA_INCORRECT = 1037,
  VERIFY_2FA_EXPIRED = 1038,
  RESEND_CODE_2FA_FAIL = 1039,
  RESEND_2FA_SUCCESS = 1040,
  SEND_CODE_2FA_SUCCESS = 1041,
  VERIFY_CODE_2FA_TOKEN_FAIL = 1042,
  UNAUTHORIZED = 8888,
  USER_FORCE_LOGOUT_STATUS = 9999,
  LANGUAGE_ALREADY_HAVE = 1036,
  LIST_LANGUAGE_SUCCESS = 1037,
  SET_LANGUAGE_FAIL = 1038,
  SET_LANGUAGE_SUCCESS = 1039,
  RESEND_VERIFY_CODE_FAIL = 1040,
  GET_LIST_ROLES_SUCCESSFULLY = 1041,
  GET_LIST_ROLES_FAIL = 1042,
  ROLE_NOT_FOUND = 1043,
  GET_SAS_URL_SUCCESSFULLY = 1044,
  PHONE_INVALID = 1045,
  WRONG_DATE_FORMAT = 1046,
  ADD_USER_ROLE_USER_NOT_EXIT = 1047,
  GET_SAS_URL_INCORRECT_PERMISSION = 1048,
  GET_LIST_LOCATION_SUCCESSFULLY = 1049,
  LOCATION_IS_NOT_CORRECT = 1050,
  PLACE_ID_IS_NOT_CORRECT = 1051,
  VERIFY_TOKEN_SUCCESSFULLY = 1052,
}

export enum TypeStatus {
  ACTIVE = 'Active',
  DEACTIVATED = 'Deactivated',
}

export enum PermissionActions {
  VIEW_USER_LIST = 'view_user_list',
  VIEW_USER_PROFILE = 'view_user_profile',
  EDIT_USER_PROFILE = 'edit_user_profile',
  EXPORT_USER_LIST = 'export_user_list',
  VIEW_ROLE_LIST = 'view_role_list',
  CREATE_NEW_ROLE = 'create_new_role',
  VIEW_ROLE_DETAIL = 'view_role_detail',
  EDIT_ROLE = 'edit_role',
  CREATE_TOOL = 'create_tool',
  UPDATE_TOOL = 'delete_tool',
  DELETE_TOOL = 'delete_tool',
}

export enum TypeToken {
  REFRESH_TOKEN = 'REFRESH_TOKEN',
  ACCESS_TOKEN = 'ACCESS_TOKEN',
}

export enum SasPermission {
  Create = 'c',
  Read = 'r',
  Add = 'a',
  Write = 'w',
  Delete = 'd',
  PermanentDelete = 'p',
  Tags = 't',
  ImmutableStorage = 'i',
}

export enum ActiveStatus {
  TRUE = 'true',
  FALSE = 'false',
}
