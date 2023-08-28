'use client'
import React from 'react';
import clsx from "clsx";

const GridSection = ({children, gridClassName, ...props}) => {
    return (
        <div className={'mt-[92px] md:mt-[120px]'}>
            <div
                className={
                    'flex flex-col items-center mb-medium md:mb-[106px] text-center '
                }
            >
                <p className={'text-sm text-black/20'}>{props.subTitle}</p>
                <h2 style={{whiteSpace: 'pre-line'}}>{props.title}</h2>
            </div>

            <div
                className={clsx(`relative overflow-hidden grid gap-4`, gridClassName)
                }
            >
                {children}
            </div>
        </div>
    );
};

export default GridSection;