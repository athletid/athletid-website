import React from 'react';
import Image from "next/image";
import NotFoundImage from "@/public/assets/images/not-found.png"

function Error(props) {
    return (
        <div className={'text-center py-10'}>
            <h1 className={'text-2xl font-bold text-orange-600 py-10'}></h1>
            <Image src={NotFoundImage} width={400} height={400} alt={""}/>
        </div>
    );
}

export default Error;