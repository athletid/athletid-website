import React from "react";

export default function Subscription(props) {
    return (
        <div className={'border-t border-black/12 py-4 flex justify-between'}>
            <div className={'flex space-x-6 items-center'}>
                <div
                    className={'h-[10px] w-[10px] bg-timeRed rounded-full'}
                ></div>
                <p className={'whitespace-pre-line'}>{props.subscriptionTitle}</p>
            </div>
            <p>{props.subscriptionType}</p>
        </div>
    )
}