import React from "react";
import "./PhotoPage.css";
import Sticker from '../assets/PersonCircle.svg';
import DownloadIcon from '../assets/download-icon.svg';  // Добавьте путь к вашему SVG иконке

function PhotoPage({ photo, onBack, setSection }) {
    if (!photo) return null;

    // Обработчик для открытия изображения в новой вкладке
    const handleDownload = () => {
        window.open(photo.photo, "_blank"); // Открывает фото в новой вкладке
    };

    return (
        <div className="photo-page">
            {/* Шапка с навигацией */}
            <header className="album">
                <div className="photopage__left">
                    <div className="photopage__title">LightStories</div>
                    <h1 className="photopage__h1">{photo.name}</h1> {/* Используем название фото */}
                </div>

                <div className="photopage__content">
                    <nav className="photopage__nav">
                        <a href="#главное" className="photopage__dropdown-link" onClick={() => setSection("Главное")}>
                            Главное
                        </a>
                        <a href="#о-нас" className="photopage__dropdown-link" onClick={() => setSection("О нас")}>
                            О нас
                        </a>
                        <a href="#фотоальбом" className="photopage__dropdown-link" onClick={() => setSection("Фотоальбом")}>
                            Фотоальбом
                        </a>
                        <a href="#логин" className="photopage__link">
                            <img src={Sticker} alt="Sticker" className="photopage__sticker" />
                        </a>
                    </nav>
                </div>
                <div className="photopage__triangle"></div>
            </header>

            <div className="photo-page__content">
                {/* Кнопка открытия изображения в новой вкладке */}
                <div className="photo-page__download-icon" onClick={handleDownload}>
                    <img src={DownloadIcon} alt="Download" className="photo-page__download-svg" />
                </div>

                {/* Картинка */}
                <img src={photo.photo} alt={photo.name} className="photo-page__image" />
            </div>
        </div>
    );
}

export default PhotoPage;
