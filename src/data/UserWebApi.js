const BASE_URL = 'http://localhost:3001';

//忘記密碼-帳號&手機驗證API
export const accountAndMobileCheck = (account, mobile) => {
  return fetch(`${BASE_URL}/user/api/accountAndMobileCheck`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      account,
      mobile,
    }),
  }).then(res => res.json());
};

//忘記密碼-驗證碼確認
export const verifyCodeConfirm = (validCode, verify_code) => {
  return fetch(`${BASE_URL}/user/api/revise-pwd-vcode`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      validCode,
      verify_code,
    }),
  }).then(res => res.json());
};

//忘記密碼-更改密碼確認
export const pwdNewConfirm = (newPassword, forgotsid) => {
  return fetch(`${BASE_URL}/user/api/reset-pwd`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      newPassword,
      forgotsid,
    }),
  }).then(res => res.json());
};

// 修改密碼前先取得舊密碼
export const editPassword = pswData => {
  return fetch(`${BASE_URL}/user/api/edit-pwd`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      pswData,
    }),
  }).then(res => res.json());
};

//傳輸回後端找資料的API
export const findMem = sid => {
  // const token = getAuthToken();
  return fetch(`${BASE_URL}/user/api/find-user`, {
    method: 'POST',
    headers: {
      // Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      sid,
    }),
  }).then(res => res.json());
};

//傳輸回後端註冊會員
export const registerMem = registerData => {
  return fetch(`${BASE_URL}/user/api/user-register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      registerData,
    }),
  }).then(res => res.json());
};

//傳回後端修改資料
export const reviseMem = fd => {
  return fetch(`${BASE_URL}/user/api/user-revise`, {
    method: 'POST',
    // headers: {
    //   'content-type': 'application/json',
    // },
    body: fd,
  }).then(res => res.json());
};

//傳回後端新增地址
export const createAddress = dataObj => {
  return fetch(`${BASE_URL}/user/api/user-address-new`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(dataObj),
  }).then(res => res.json());
};

// 回傳地址表單的資料
export const getAddress = user_id => {
  return fetch(`${BASE_URL}/user/api/get-user-address/` + user_id).then(res =>
    res.json()
  );
};

// 回傳歷史訂單的資料
export const getOrderHistory = user_id => {
  return fetch(`${BASE_URL}/user/api/get-order-history/` + user_id).then(res =>
    res.json()
  );
};

export const editAddress = (editData, user_id) => {
  return fetch(`${BASE_URL}/user/api/user-address-edit`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      editData,
      user_id,
    }),
  }).then(res => res.json());
};

//傳回後端刪除地址
export const removeAddress = (sid, user_id) => {
  return fetch(`${BASE_URL}/user/api/user-address-delete`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      sid,
      user_id,
    }),
  }).then(res => res.json());
};
