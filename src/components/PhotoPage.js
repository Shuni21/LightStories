import React from "react";
import "./PhotoPage.css";
import Sticker from '../assets/PersonCircle.svg';
import DownloadIcon from '../assets/download-icon.svg';

function PhotoPage({ photo, onBack, setSection }) {
    if (!photo) return null;

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = photo.photo;
        link.download = photo.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="photo-page">
            {/* Основной контейнер с flex-direction: column */}
            <div className="photo-page__container">
                {/* Первый дочерний div со всеми компонентами */}
                <div className="photo-page__header">
                    <header className="album">
                        <div className="photopage__left">
                            <div className="photopage__title">LightStories</div>
                            <h1 className="photopage__h1">{photo.name}</h1>
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

                    {/* Добавлено изображение и кнопка скачивания */}
                    <div className="photo-page__content">
                        <div className="photo-page__download-icon" onClick={handleDownload}>
                            <img src={DownloadIcon} alt="Download" className="photo-page__download-svg" />
                        </div>
                        <img src={photo.photo} alt={photo.name} className="photo-page__image" />
                    </div>
                </div>
                {/* Второй дочерний div со всеми компонентами */}
                <div>
                    {/* Отзыв */}
                </div>
            </div>
        </div>
    );
}

export default PhotoPage;
