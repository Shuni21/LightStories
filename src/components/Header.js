import React from "react";
import "./Header.css";
import Sticker from '../assets/PersonCircle.svg';

function Header({ setSection }) {
  return (
    <header className="header">
      <div className="header__title">LightStories</div>
      <div className="header__content">
        <nav className="header__nav">
          <a href="#главное" className="header__link" onClick={() => setSection("Главное")}>Главное</a>
          <a href="#о-нас" className="header__link" onClick={() => setSection("О нас")}>О нас</a>
          <a href="#фотоальбом" className="header__link" onClick={() => setSection("Фотоальбом")}>Фотоальбом</a>
          <a href="#логин" className="header__link">
            <img src={Sticker} alt="Sticker" className="header__sticker" />
          </a>
        </nav>
        <h1 className="header__h1">Сквозь объектив <br /> эмоции</h1>
        <div className="headercontent">
          <p>
            Пространство, где фотография оживает в каждом кадре.
            Наша галерея посвящена динамичным моментам, которые запечатлевают самые яркие эмоции и краски жизни.
            Вдохновляйтесь уникальными снимками, которые рассказывают свои истории через свет, тени и цвет.
          </p>
        </div>
      </div>
      <div className="header__triangle"></div>
    </header>
  );
}

export default Header;
