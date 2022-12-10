import React from "react";
import "../scss/components/_signin.scss";

const Signin = () => {
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const myMethod = () => {
    if (mail && password) {
      mail.split("");
      if (mail.includes("@mail.ru") && password.length >= 6) {
        setMail("");
        setPassword("");
        alert("все ок");
      } else {
        alert("не ок");
      }
    } else {
      alert("пусто");
    }
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content__title">
          <h1>Страница авторизации</h1>
        </div>
        <div className="content__forms">
          <div className="form">
            <input
              value={mail}
              onInput={(e) => {
                setMail(e.target.value);
              }}
              type="text"
              placeholder="Enter your Mail"
              className="btn"
            />
            <input
              value={password}
              onInput={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter your Password"
              className="btn"
            />
            <button onClick={myMethod} className="btn">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
