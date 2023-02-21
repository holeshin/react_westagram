import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.scss";

function Login() {
  
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#c4e1fb");

  const onChange = (e) => {
    setId(e.target.value);
  };

  const onChange2 = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onKeyUp = () => {
    return id.length > 0 && password.length > 0
      ? setBackgroundColor("blue")
      : setBackgroundColor("#c4e1fb");
  };

  const onClick = () => {
    if (id.length === 0) {
      alert("아이디를 입력하세요");
    } else if (id.length > 1 && password.length === 0) {
      alert("비밀번호를 입력하세요");
    } else if (id.length > 20 || !id.includes("@")) {
      alert("아이디 형식이 맞지 않습니다. 다시 입력하세요");
    } else if (id.length > 1 && password.length < 5) {
      alert("비밀번호는 5글자 이상입니다.");
    } else if (id === password) {
      alert("아이디와 비밀번호를 다르게 입력해주세요");
    } else {
      alert("로그인 성공");
      navigate("/main");
    }
  };

  return (
    <main className="container2" onKeyUp={onKeyUp}>
      <form onSubmit={handleSubmit}>
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
        <button style={{ backgroundColor: backgroundColor }} onClick={onClick}>
          로그인
        </button>
        <a href="#!">비밀번호를 잊으셨나요?</a>
      </form>
    </main>
  );
}

export default Login;
