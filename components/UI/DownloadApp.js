import React from "react";
import DownloadPlayStore from "../../../public/assets/images/downloadPlayStore.svg";
import DownloadAppStore from "../../../public/assets/images/downloadAppStore.svg";

const DownloadApp = (props) => {
    return (
        <div
            className={`flex ${props.flexDirection} ${props.justifyContent} ${props.visibility} text-center items-center`}
        >
            <span style={{ whiteSpace: "pre-line" }} className={"mb-10"}>
                {props.title}
            </span>
            <div className={`flex ${props.justifyContent} space-x-4`}>
                <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.athletid.athletid&gl=FR"
                >
                    <DownloadPlayStore width={164} height={50} alt={"Télécharger Athletid sur le Play Store"}
                        className={
                            "hover:fill-white duration-300 rounded-[9px] hover:bg-black"
                        }
                    />
                </a>
                <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://apps.apple.com/fr/app/athletid/id6443471192"
                >
                    <DownloadAppStore width={160} height={50} alt={"Télécharger Athletid sur l'App Store"}
                        className={
                            "hover:fill-white duration-300 rounded-[9px]  hover:bg-black  "
                        }
                    />
                </a>
            </div>
        </div>
    );
};

export default DownloadApp;