import React from 'react';
import { Navigation } from '../../components';

const Header = ({ children }) => {
    return (
        <header>
            <div className="relative bg-gradient-to-br from-primary to-yellow-600">
                <div
                    className="hidden sm:block sm:absolute sm:inset-0"
                    aria-hidden="true">
                    <svg
                        className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-yellow-500 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
                        width="364"
                        height="384"
                        viewBox="0 0 364 384"
                        fill="none">
                        <defs>
                            <pattern
                                id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse">
                                <rect
                                    x="0"
                                    y="0"
                                    width="4"
                                    height="4"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width="364"
                            height="384"
                            fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
                        />
                    </svg>
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
