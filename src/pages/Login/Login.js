import "../../styles/common.css";
import "../Login/Login.css";
import React, { useEffect, useState } from "react";

// document.body.addEventListener("keyup", () => {
//   return id.value.length >= 1 && password.value.length >= 1
//     ? (loginButton.style.backgroundColor = "blue")
//     : (loginButton.style.backgroundColor = "#c4e1fb");
// });

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("렌더링 되었습니다.");
    console.log({
      
    })
  });

  const onChange = (e) => {
    setId(e.target.value);
  };

  const onChange2 = (e) => {
    setPassword(e.target.value);
  };

  return (
    <main className="container">
      <form>
        <h1>
          <span>W</span>es<span>t</span>agram
        </h1>
        <input
          id="email"
          type="text"
          placeholder="이메일"
          value={id}
          onChange={onChange}
        />
        <input
          id="pas"
          type="password"
          placeholder="비밀번호"
          autoComplete="off"
          value={password}
          onChange={onChange2}
        />
        <button id="loginBtn">로그인</button>
        <a href="#!">비밀번호를 잊으셨나요?</a>
      </form>
    </main>
  );
}

export default Login;
