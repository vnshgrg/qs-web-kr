import React, { useEffect, useState, useRef } from "react";
import { Navigation } from "../../components";

const Header = ({ children }) => {
    const [heroHeight, setHeroHeight] = useState(0);

    const ref = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (heroHeight !== ref.current.clientHeight) {
                setHeroHeight(ref.current.clientHeight);
                console.log(ref.current.clientHeight);
            }
        };

        setTimeout(() => {
            handleResize();
        }, 500);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header>
            <div
                ref={ref}
                className="relative bg-gradient-to-br from-blue-400 to-blue-800"
            >
                <div
                    className="absolute flex flex-grow w-full overflow-hidden"
                    style={{ height: heroHeight }}
                >
                    <div
                        id="carouselExampleSlidesOnly"
                        className="carousel slide relative"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner relative w-full overflow-hidden">
                            <div className="carousel-item active relative float-left w-full">
                                <img
                                    src="/backgrounds/01.jpg"
                                    className="block w-full "
                                    alt="Wild Landscape"
                                />
                            </div>
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src="/backgrounds/02.jpg"
                                    className="block w-full "
                                />
                            </div>
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src="/backgrounds/03.jpg"
                                    className="block w-full "
                                    alt="Exotic Fruits"
                                />
                            </div>
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src="/backgrounds/04.jpg"
                                    className="block w-full "
                                    alt="Exotic Fruits"
                                />
                            </div>
                        </div>
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
