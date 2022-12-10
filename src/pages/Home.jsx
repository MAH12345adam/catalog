import React from "react";
import reactImg from "../assets/img/react-background.png";
import "../scss/components/_home.scss"

const Home = () => {
  return (
    <div className="container">
      <div className="content__title">
        <h1>Главная страница</h1>
      </div>
      <div className="content__image">
        <img width={350} src={reactImg} alt="background" />
      </div>
      <div className="content__info">
        <p>
          <span>История разработки:</span> React был создан Джорданом Валке,
          разработчиком программного обеспечения из Facebook. На него оказал
          влияние XHP — компонентный HTML-фреймворк для PHP. Впервые React
          использовался в новостной ленте Facebook в 2011 году и позже в ленте
          Instagram в 2012 году. Исходный код React открыт в мае 2013 года на
          конференции «JSConf US».
        </p>
      </div>
    </div>
  );
};

export default Home;
