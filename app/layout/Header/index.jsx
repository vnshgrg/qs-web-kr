import React, { useEffect, useState, useRef } from "react";
import { Navigation } from "../../components";

const slides = [
    "/backgrounds/01.jpg",
    "/backgrounds/02.jpg",
    "/backgrounds/03.jpg",
    "/backgrounds/04.jpg",
];
const sliderConfig = {
    slides,
    totalSlides: slides.length,
    interval: 5000,
};

const Header = ({ children }) => {
    const [heroHeight, setHeroHeight] = useState(0);
    const [heroWidth, setHeroWidth] = useState(0);
    const [slideIndex, setSlideIndex] = useState(0);

    const ref = useRef(null);

    let interval;

    const updateInterval = () => {
        interval =
            !interval &&
            setInterval(() => {
                setSlideIndex((slideIndex) => {
                    if (slideIndex + 1 < sliderConfig.totalSlides) {
                        return slideIndex + 1;
                    } else {
                        return 0;
                    }
                });
            }, sliderConfig.interval);
    };

    useEffect(() => {
        const handleResize = () => {
            if (heroHeight !== ref.current.clientHeight) {
                setHeroHeight(ref.current.clientHeight);
            }
            if (heroWidth !== ref.current.clientWidth) {
                setHeroWidth(ref.current.clientWidth);
            }
        };

        const timeout = setTimeout(() => {
            handleResize();
        }, 500);

        window.addEventListener("resize", handleResize);

        updateInterval();

        return () => {
            window.removeEventListener("resize", handleResize);
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <header>
            <div
                ref={ref}
                className="relative bg-gradient-to-br from-primary to-yellow-600"
            >
                <div
                    className="absolute flex flex-grow w-full overflow-hidden"
                    style={{ height: heroHeight }}
                >
                    <div
                        className="relative overflow-hidden"
                        style={{
                            height: heroHeight,
                            width: heroWidth,
                        }}
                    >
                        {sliderConfig.slides.map((url, index) => (
                            <div
                                className={`absolute w-full top-0 left-0 right-0 bottom-0 transition-opacity duration-1000 ${
                                    slideIndex === index
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                                key={index}
                                style={{
                                    height: heroHeight,
                                    width: heroWidth,
                                }}
                            >
                                <img
                                    src={url}
                                    className="object-cover h-full w-full "
                                    alt="QS Remit"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative py-6">
                    <Navigation />
                    {children}
                </div>
            </div>
        </header>
    );
};

export default Header;
