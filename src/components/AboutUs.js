import React from "react";
import "./AboutUs.css";
import Sticker from '../assets/PersonCircle.svg';

function AboutUs({ setSection }) {
  return (
    <header className="about">
      <div className="about__title">LightStories</div>
      <div className="about__content">
        <nav className="about__nav">
          <a href="#главное" className="about__link" onClick={() => setSection("Главное")}>Главное</a>
          <a href="#о-нас" className="about__link" onClick={() => setSection("О нас")}>О нас</a>
          <a href="#фотоальбом" className="about__link" onClick={() => setSection("Фотоальбом")}>Фотоальбом</a>
          <a href="#логин" className="about__link">
            <img src={Sticker} alt="Sticker" className="about__sticker" />
          </a>
        </nav>
        <div className="about__heading-content">
          <h1 className="about__h1">О нас</h1>
          <div className="aboutcontent">
            <p>
              Мы LightStories, команда профессионалов, увлечённых искусством фотографии и созданием уникальных визуальных историй. Наша миссия — через объектив показать мир таким, каким его видим мы: ярким, многогранным и полным эмоций.  
              Мы стремимся запечатлеть не только моменты, но и чувства, создавая снимки, которые остаются в памяти навсегда.
              Каждая фотография — это не просто кадр, а тщательно продуманная композиция, в которой свет, цвет и движение сливаются воедино, чтобы рассказать свою историю. В LightStories мы верим, что каждая фотография должна быть настоящим произведением искусства, которое вдохновляет, удивляет и заставляет задуматься.
            </p>
          </div>
        </div>
      </div>
      <div className="about__triangle"></div>
    </header>
  );
}

export default AboutUs;
