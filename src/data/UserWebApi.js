const BASE_URL = 'http://localhost:3001';

// export const login = (account, password) => {
//   return fetch(`${BASE_URL}/user/api/auth-list`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       account,
//       password,
//     }),
//   }).then(res => res.json());
// };

//token拿資料步驟2 : 傳輸回後端找資料的API
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
export const reviseMem = (memInfo, sid) => {
  return fetch(`${BASE_URL}/user/api/user-revise`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      memInfo,
      sid,
    }),
  }).then(res => res.json());
};