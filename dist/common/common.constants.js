"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveStatus = exports.SasPermission = exports.TypeToken = exports.PermissionActions = exports.TypeStatus = exports.StatusCode = exports.Role = exports.Gender = exports.LanguageCode = void 0;
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["Vn"] = "vn";
    LanguageCode["United_States"] = "en";
})(LanguageCode || (exports.LanguageCode = LanguageCode = {}));
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
})(Gender || (exports.Gender = Gender = {}));
var Role;
(function (Role) {
    Role["Investor"] = "Investor";
    Role["Agent"] = "Agent";
    Role["Lender"] = "Lender";
    Role["Vendor"] = "Vendor";
    Role["Builder"] = "Builder";
})(Role || (exports.Role = Role = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["GET_USER_INFORMATION_SUCCESS"] = 1001] = "GET_USER_INFORMATION_SUCCESS";
    StatusCode[StatusCode["GET_USER_INFORMATION_FAIL"] = 1002] = "GET_USER_INFORMATION_FAIL";
    StatusCode[StatusCode["GET_USER_DETAILS_SUCCESS"] = 1003] = "GET_USER_DETAILS_SUCCESS";
    StatusCode[StatusCode["GET_USER_DETAILS_FAIL"] = 1004] = "GET_USER_DETAILS_FAIL";
    StatusCode[StatusCode["UPDATE_USER_INFORMATION_SUCCESS"] = 1005] = "UPDATE_USER_INFORMATION_SUCCESS";
    StatusCode[StatusCode["UPDATE_USER_INFORMATION_FAIL"] = 1006] = "UPDATE_USER_INFORMATION_FAIL";
    StatusCode[StatusCode["CHANGE_STATUS_SUCCESS"] = 1007] = "CHANGE_STATUS_SUCCESS";
    StatusCode[StatusCode["CHANGE_ROLES_SUCCESS"] = 1008] = "CHANGE_ROLES_SUCCESS";
    StatusCode[StatusCode["INVALID_GOOGLE_TOKEN"] = 401] = "INVALID_GOOGLE_TOKEN";
    StatusCode[StatusCode["USER_LOGIN_SUCCESSFULLY"] = 200] = "USER_LOGIN_SUCCESSFULLY";
    StatusCode[StatusCode["USER_LOGIN_FAILED"] = 1006] = "USER_LOGIN_FAILED";
    StatusCode[StatusCode["USER_NOT_FOUND"] = 404] = "USER_NOT_FOUND";
    StatusCode[StatusCode["SESSION_EXPIRED"] = 200] = "SESSION_EXPIRED";
    StatusCode[StatusCode["USER_SIGN_UP_REQUIRED"] = 1001] = "USER_SIGN_UP_REQUIRED";
    StatusCode[StatusCode["USER_SIGN_UP_SUCCESSFULLY"] = 1002] = "USER_SIGN_UP_SUCCESSFULLY";
    StatusCode[StatusCode["USER_VERIFY_PHONE_CODE_ERROR"] = 1003] = "USER_VERIFY_PHONE_CODE_ERROR";
    StatusCode[StatusCode["USER_VERIFY_PHONE_CODE_SUCCESSFULLY"] = 1004] = "USER_VERIFY_PHONE_CODE_SUCCESSFULLY";
    StatusCode[StatusCode["USER_SIGN_UP_PHONE_EXISTED"] = 1005] = "USER_SIGN_UP_PHONE_EXISTED";
    StatusCode[StatusCode["USER_SIGN_UP_EMAIL_EXISTED"] = 1008] = "USER_SIGN_UP_EMAIL_EXISTED";
    StatusCode[StatusCode["INVALID_EMAIL"] = 1013] = "INVALID_EMAIL";
    StatusCode[StatusCode["YOUR_ACCOUNT_IS_DEACTIVATED"] = 1014] = "YOUR_ACCOUNT_IS_DEACTIVATED";
    StatusCode[StatusCode["YOUR_PASSWORD_IS_INVALID_MUST_ENTRIES"] = 1015] = "YOUR_PASSWORD_IS_INVALID_MUST_ENTRIES";
    StatusCode[StatusCode["YOUR_PASSWORD_IS_INVALID"] = 1016] = "YOUR_PASSWORD_IS_INVALID";
    StatusCode[StatusCode["USER_NOT_VERIFY"] = 1017] = "USER_NOT_VERIFY";
    StatusCode[StatusCode["REPASSWORD_NOT_MATCH"] = 1018] = "REPASSWORD_NOT_MATCH";
    StatusCode[StatusCode["RESET_PASSWORD_ERROR"] = 1019] = "RESET_PASSWORD_ERROR";
    StatusCode[StatusCode["RESET_PASSWORD_SUCCESSFULLY"] = 1020] = "RESET_PASSWORD_SUCCESSFULLY";
    StatusCode[StatusCode["SEND_CODE_FORGOT_PASSWORD_SUCCESSFULLY"] = 1021] = "SEND_CODE_FORGOT_PASSWORD_SUCCESSFULLY";
    StatusCode[StatusCode["SEND_MAIL_FORGOT_PASSWORD_SUCCESSFULLY"] = 1022] = "SEND_MAIL_FORGOT_PASSWORD_SUCCESSFULLY";
    StatusCode[StatusCode["NEW_PASSWORD_SAME_OLD_PASSWORD"] = 1023] = "NEW_PASSWORD_SAME_OLD_PASSWORD";
    StatusCode[StatusCode["GET_LIST_USERS_FAIL"] = 1024] = "GET_LIST_USERS_FAIL";
    StatusCode[StatusCode["GET_LIST_USERS_SUCCESSFULLY"] = 1025] = "GET_LIST_USERS_SUCCESSFULLY";
    StatusCode[StatusCode["PHONE_CODE_EXPIRED"] = 1026] = "PHONE_CODE_EXPIRED";
    StatusCode[StatusCode["CHANGE_PASSWORD_SUCCESSFULLY"] = 1027] = "CHANGE_PASSWORD_SUCCESSFULLY";
    StatusCode[StatusCode["CHANGE_PASSWORD_FAIL"] = 1028] = "CHANGE_PASSWORD_FAIL";
    StatusCode[StatusCode["WRONG_PASSWORD"] = 1029] = "WRONG_PASSWORD";
    StatusCode[StatusCode["ADD_USER_ROLE"] = 1027] = "ADD_USER_ROLE";
    StatusCode[StatusCode["YOUR_ACCOUNT_IS_NOT_CORRECT"] = 1030] = "YOUR_ACCOUNT_IS_NOT_CORRECT";
    StatusCode[StatusCode["VERIFY_FORGOT_PASSWORD_EMAIL_SUCCESSFULLY"] = 1031] = "VERIFY_FORGOT_PASSWORD_EMAIL_SUCCESSFULLY";
    StatusCode[StatusCode["ROLE_NAME_ALREADY_EXIT"] = 1032] = "ROLE_NAME_ALREADY_EXIT";
    StatusCode[StatusCode["DOB_IS_NOT_BIGGER_THAN_NOW"] = 1033] = "DOB_IS_NOT_BIGGER_THAN_NOW";
    StatusCode[StatusCode["INVALID_METHOD_FORGOT_PASSWORD_GOOGLE"] = 1034] = "INVALID_METHOD_FORGOT_PASSWORD_GOOGLE";
    StatusCode[StatusCode["INVALID_METHOD_FORGOT_PASSWORD_FACEBOOK"] = 1035] = "INVALID_METHOD_FORGOT_PASSWORD_FACEBOOK";
    StatusCode[StatusCode["YOU_HAVE_BEEN_SUCCESSFULLY_LOGGED_OUT"] = 1036] = "YOU_HAVE_BEEN_SUCCESSFULLY_LOGGED_OUT";
    StatusCode[StatusCode["USER_CANNOT_CHANGE_THEIR_STATUS"] = 1036] = "USER_CANNOT_CHANGE_THEIR_STATUS";
    StatusCode[StatusCode["VERIFY_2FA_INCORRECT"] = 1037] = "VERIFY_2FA_INCORRECT";
    StatusCode[StatusCode["VERIFY_2FA_EXPIRED"] = 1038] = "VERIFY_2FA_EXPIRED";
    StatusCode[StatusCode["RESEND_CODE_2FA_FAIL"] = 1039] = "RESEND_CODE_2FA_FAIL";
    StatusCode[StatusCode["RESEND_2FA_SUCCESS"] = 1040] = "RESEND_2FA_SUCCESS";
    StatusCode[StatusCode["SEND_CODE_2FA_SUCCESS"] = 1041] = "SEND_CODE_2FA_SUCCESS";
    StatusCode[StatusCode["VERIFY_CODE_2FA_TOKEN_FAIL"] = 1042] = "VERIFY_CODE_2FA_TOKEN_FAIL";
    StatusCode[StatusCode["UNAUTHORIZED"] = 8888] = "UNAUTHORIZED";
    StatusCode[StatusCode["USER_FORCE_LOGOUT_STATUS"] = 9999] = "USER_FORCE_LOGOUT_STATUS";
    StatusCode[StatusCode["LANGUAGE_ALREADY_HAVE"] = 1036] = "LANGUAGE_ALREADY_HAVE";
    StatusCode[StatusCode["LIST_LANGUAGE_SUCCESS"] = 1037] = "LIST_LANGUAGE_SUCCESS";
    StatusCode[StatusCode["SET_LANGUAGE_FAIL"] = 1038] = "SET_LANGUAGE_FAIL";
    StatusCode[StatusCode["SET_LANGUAGE_SUCCESS"] = 1039] = "SET_LANGUAGE_SUCCESS";
    StatusCode[StatusCode["RESEND_VERIFY_CODE_FAIL"] = 1040] = "RESEND_VERIFY_CODE_FAIL";
    StatusCode[StatusCode["GET_LIST_ROLES_SUCCESSFULLY"] = 1041] = "GET_LIST_ROLES_SUCCESSFULLY";
    StatusCode[StatusCode["GET_LIST_ROLES_FAIL"] = 1042] = "GET_LIST_ROLES_FAIL";
    StatusCode[StatusCode["ROLE_NOT_FOUND"] = 1043] = "ROLE_NOT_FOUND";
    StatusCode[StatusCode["GET_SAS_URL_SUCCESSFULLY"] = 1044] = "GET_SAS_URL_SUCCESSFULLY";
    StatusCode[StatusCode["PHONE_INVALID"] = 1045] = "PHONE_INVALID";
    StatusCode[StatusCode["WRONG_DATE_FORMAT"] = 1046] = "WRONG_DATE_FORMAT";
    StatusCode[StatusCode["ADD_USER_ROLE_USER_NOT_EXIT"] = 1047] = "ADD_USER_ROLE_USER_NOT_EXIT";
    StatusCode[StatusCode["GET_SAS_URL_INCORRECT_PERMISSION"] = 1048] = "GET_SAS_URL_INCORRECT_PERMISSION";
    StatusCode[StatusCode["GET_LIST_LOCATION_SUCCESSFULLY"] = 1049] = "GET_LIST_LOCATION_SUCCESSFULLY";
    StatusCode[StatusCode["LOCATION_IS_NOT_CORRECT"] = 1050] = "LOCATION_IS_NOT_CORRECT";
    StatusCode[StatusCode["PLACE_ID_IS_NOT_CORRECT"] = 1051] = "PLACE_ID_IS_NOT_CORRECT";
    StatusCode[StatusCode["VERIFY_TOKEN_SUCCESSFULLY"] = 1052] = "VERIFY_TOKEN_SUCCESSFULLY";
})(StatusCode || (exports.StatusCode = StatusCode = {}));
var TypeStatus;
(function (TypeStatus) {
    TypeStatus["ACTIVE"] = "Active";
    TypeStatus["DEACTIVATED"] = "Deactivated";
})(TypeStatus || (exports.TypeStatus = TypeStatus = {}));
var PermissionActions;
(function (PermissionActions) {
    PermissionActions["VIEW_USER_LIST"] = "view_user_list";
    PermissionActions["VIEW_USER_PROFILE"] = "view_user_profile";
    PermissionActions["EDIT_USER_PROFILE"] = "edit_user_profile";
    PermissionActions["EXPORT_USER_LIST"] = "export_user_list";
    PermissionActions["VIEW_ROLE_LIST"] = "view_role_list";
    PermissionActions["CREATE_NEW_ROLE"] = "create_new_role";
    PermissionActions["VIEW_ROLE_DETAIL"] = "view_role_detail";
    PermissionActions["EDIT_ROLE"] = "edit_role";
})(PermissionActions || (exports.PermissionActions = PermissionActions = {}));
var TypeToken;
(function (TypeToken) {
    TypeToken["REFRESH_TOKEN"] = "REFRESH_TOKEN";
    TypeToken["ACCESS_TOKEN"] = "ACCESS_TOKEN";
})(TypeToken || (exports.TypeToken = TypeToken = {}));
var SasPermission;
(function (SasPermission) {
    SasPermission["Create"] = "c";
    SasPermission["Read"] = "r";
    SasPermission["Add"] = "a";
    SasPermission["Write"] = "w";
    SasPermission["Delete"] = "d";
    SasPermission["PermanentDelete"] = "p";
    SasPermission["Tags"] = "t";
    SasPermission["ImmutableStorage"] = "i";
})(SasPermission || (exports.SasPermission = SasPermission = {}));
var ActiveStatus;
(function (ActiveStatus) {
    ActiveStatus["TRUE"] = "true";
    ActiveStatus["FALSE"] = "false";
})(ActiveStatus || (exports.ActiveStatus = ActiveStatus = {}));
//# sourceMappingURL=common.constants.js.map