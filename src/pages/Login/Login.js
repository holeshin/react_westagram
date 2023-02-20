import "../../styles/common.css";
import "../Login/Login.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// document.body.addEventListener("keyup", () => {
//   return id.value.length >= 1 && password.value.length >= 1
//     ? (loginButton.style.backgroundColor = "blue")
//     : (loginButton.style.backgroundColor = "#c4e1fb");
// });

function Login() {
  const navigate = useNavigate();
  //navigate('/main')

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    setId(e.target.value);
  };

  const onChange2 = (e) => {
    setPassword(e.target.value);
  };

  return (  
    <main className="containers">
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
        <button
          onClick={() => {
            navigate("/main");
          }}
          id="loginBtn"
        >
          로그인
        </button>
        <a href="#!">비밀번호를 잊으셨나요?</a>
      </form>
    </main>
  );
}

export default Login;
