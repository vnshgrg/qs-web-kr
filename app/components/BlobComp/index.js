import React from 'react';
import Icon from '../Icon';

const BlobComp = ({ icon, title, children }) => {
    return (
        <div className="relative">
            <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Icon name={icon} className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-primary">
                    {title}
                </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">{children}</dd>
        </div>
    );
};

export default BlobComp;
