import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
    const { t } = useTranslation('navigation');
    return (
        <footer className="bg-primary shadow-inner ">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav
                    className="-mx-5 -my-2 flex flex-wrap justify-center"
                    aria-label="Footer">
                    <div className="px-5 py-2">
                        <Link href="/">
                            <a className="text-base text-yellow-100 hover:text-white">
                                {t('home')}
                            </a>
                        </Link>
                    </div>

                    <div className="px-5 py-2">
                        <Link href="/About">
                            <a className="text-base  text-yellow-100 hover:text-white">
                                {t('about')}
                            </a>
                        </Link>
                    </div>

                    <div className="px-5 py-2">
                        <Link href="/HowToSendMoney">
                            <a className="text-base  text-yellow-100 hover:text-white">
                                {t('how-to-send-money')}
                            </a>
                        </Link>
                    </div>

                    <div className="px-5 py-2">
                        <Link href="/HowToRegister">
                            <a className="text-base  text-yellow-100 hover:text-white">
                                {t('how-to-register')}
                            </a>
                        </Link>
                    </div>

                    <div className="px-5 py-2">
                        <Link href="/Branches">
                            <a className="text-base  text-yellow-100 hover:text-white">
                                {t('our-branches')}
                            </a>
                        </Link>
                    </div>

                    <div className="px-5 py-2">
                        <Link href="/">
                            <a className="text-base  text-yellow-100 hover:text-white">
                                {t('notices')}
                            </a>
                        </Link>
                    </div>

                    <div className="px-5 py-2">
                        <Link href="/">
                            <a className="text-base  text-yellow-100 hover:text-white">
                                {t('contact-us')}
                            </a>
                        </Link>
                    </div>
                </nav>

                <nav
                    className="-mx-5 my-2 mt-8 flex flex-wrap justify-center text-sm"
                    aria-label="Footer">
                    <div className="px-5 py-2">
                        <Link href="/Terms03">
                            <a className="text-yellow-100 hover:text-white">
                                Terms of usage
                            </a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/Terms02">
                            <a className="text-yellow-100 hover:text-white">
                                Privacy policy
                            </a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/Terms01">
                            <a className="text-yellow-100 hover:text-white">
                                Policy against Anti-social Forces
                            </a>
                        </Link>
                    </div>
                </nav>
                <div className="-mx-5 my-2 mt-4 flex flex-wrap justify-center text-sm">
                    <span className="bg-white inline-block py-2 px-4 rounded-lg">
                        <img src="/fsa-jp.png" className="h-10" />
                    </span>
                </div>

                <p className="mt-4 text-center text-base text-yellow-100">
                    &copy; 2021 N&amp;P Japan Co., Ltd. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
