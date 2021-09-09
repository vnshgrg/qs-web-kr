import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const SeeAllBranch = () => {
    const { t } = useTranslation('common');
    return (
        <div className="mt-16">
            <div className="max-w-7xl mx-auto py-12 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-2xl tracking-tight text-primary md:text-3xl">
                    <span className="block">{t('cta-secondary-title')}</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <Link href="/Branches">
                            <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-yellow-600">
                                {t('cta-secondary-button')}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeeAllBranch;
