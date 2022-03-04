import styled from 'styled-components';

const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 180px;
  top: 30%;
`;

const LoginButton = styled.button``;

function Member_login() {
  return (
    <LoginArea>
      <p>Hello, My Friend</p>
      <div>
        <p>帳號</p>
        <input type="text" />
      </div>
      <div>
        <p>密碼</p>
        <input type="password" />
      </div>
      <LoginButton>登入</LoginButton>
    </LoginArea>
  );
}

export default Member_login;
