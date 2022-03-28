// forum API

const BASE_URL = 'http://localhost:3001/forum_index/list/';

const Response_URL = 'http://localhost:3001/forum_index/res-list/';


export const getPost = sid => {
  return fetch(`${BASE_URL}${sid}`).then(res => res.json());
};

export const getResponse = res_art_sid => {
  return fetch(`${Response_URL}${res_art_sid}`).then(res => res.json());
};

export const getCategory = art_category_sid => {
  return fetch(
    `http://localhost:3001/forum_index/article-category/${art_category_sid}`
  ).then(res => res.json());
};

export const logIn = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then(res => res.json());
};

export const getMe = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/me`, {
    headers: {
      authorized: `Bearer ${token}`,
    },
  }).then(res => res.json());
};
