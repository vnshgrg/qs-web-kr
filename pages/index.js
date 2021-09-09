import { useState, Fragment } from 'react';
import Head from 'next/head';
import MainLayout from '../app/layout/MainLayout';
import { BlobComp, LogoCloud, RateList } from '../app/components';
import { siteName } from '../app/config';
import useTranslation from 'next-translate/useTranslation';

import { Dialog, Transition } from '@headlessui/react';

const Component = () => {
    const [open, setOpen] = useState(true);

    const closeModal = () => {
        setOpen(false);
    };

    const openModal = () => {
        setOpen(true);
    };

    const { t } = useTranslation('common');

    return (
        <>
            <Head>
                <title>{siteName}</title>
            </Head>

            <Transition appear show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0 bg-primary bg-opacity-50" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900">
                                    Website under maintenance
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        We are working on the final version of
                                        this website. Some features and texts
                                        may not be working as expceted while
                                        under maintentance mode.
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500"
                                        onClick={closeModal}>
                                        Got it, thanks!
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>

            <div className="bg-white py-10 md:py-20 lg:py-24 xl:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="">
                        <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase">
                            {t('send-money-send-happiness')}
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
                            {t('intro-heading')}
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500">
                            {t('intro-description')}
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <BlobComp
                                icon="lightning-blot"
                                title={t('blob-1-title')}>
                                {t('blob-1-description')}
                            </BlobComp>

                            <BlobComp
                                icon="lock-closed"
                                title={t('blob-2-title')}>
                                {t('blob-2-description')}
                            </BlobComp>
                            <BlobComp icon="globe" title={t('blob-3-title')}>
                                {t('blob-3-description')}
                            </BlobComp>

                            <BlobComp
                                icon="annotation"
                                title={t('blob-4-title')}>
                                {t('blob-4-description')}
                            </BlobComp>
                        </dl>
                    </div>
                </div>
            </div>
            <LogoCloud />
            <div className="relative pt-0 md:pt-8 pb-16 overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-yellow-100"></div>
                <div className="">
                    <div className="relative lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="mt-4 lg:mt-0 g:col-start-1">
                            <div className="px-4 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative">
                                <RateList />
                            </div>
                        </div>
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                            <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase mt-8 md:mt-14">
                                {t('feature-1-title')}
                            </h2>
                            <p className="mt-1 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
                                {t('feature-1-heading')}
                            </p>
                            <p className="mt-4 text-lg text-gray-500">
                                {t('feature-1-description')}
                            </p>

                            <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase mt-14">
                                {t('feature-2-title')}
                            </h2>
                            <p className="mt-1 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
                                {t('feature-2-heading')}
                            </p>
                            <p className="mt-4 text-lg text-gray-500">
                                {t('feature-2-description')}
                            </p>

                            <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase mt-14">
                                {t('feature-3-title')}
                            </h2>
                            <p className="mt-1 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
                                {t('feature-3-heading')}
                            </p>
                            <p className="mt-4 text-lg text-gray-500">
                                {t('feature-3-description')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-yellow-500">
                <div className="max-w-2xl mx-auto text-center py-10 sm:py-16 px-4 md:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-medium text-white sm:text-4xl">
                        <span className="block">{t('cta-title')}</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-yellow-100">
                        {t('cta-description')}
                    </p>
                    <a
                        href="https://apps.apple.com/jp/app/qsremit-japan/id1466724211"
                        target="_blank"
                        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-yellow-50 hover:bg-white sm:w-auto">
                        Download for iPhone
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.nnp.qsjapan"
                        target="_blank"
                        className="sm:ml-4 mt-4 sm:mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-yellow-50 hover:bg-white sm:w-auto">
                        Download for Android
                    </a>
                </div>
            </div>
        </>
    );
};

const Home = (props) => (
    <MainLayout>
        <Component {...props} />
    </MainLayout>
);

export default Home;
