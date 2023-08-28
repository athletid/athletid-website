import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import TimerScreen01 from '@/public/assets/images/application-timer-creation-entrainement.webp'
import Image from 'next/image'
import TimerScreen02 from "@/public/assets/images/application-timer-athletid-tempo.webp";
import TimerScreen03 from "@/public/assets/images/application-timer-chronometre.webp";

export const CarouselFeature = (props) => {
    const images = [props.imgSquare1, props.imgSquare2, props.imgSquare3]

    return (
        <Carousel
            className={`max-w-[400px] mx-auto block md:hidden`}
            showStatus={false}
            showThumbs={false}
            statusFormatter={(current, total) =>
                `Current slide: ${current} / Total: ${total}`
            }
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        style={{
                            left: 0,
                            zIndex: 2,
                            display: 'inline-block',
                            position: 'absolute',
                            top: 'calc(50% - 40px)',
                            cursor: 'pointer',
                        }}
                    >
                        <BsChevronLeft color={'black'} size={30}/>
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        style={{
                            right: 0,
                            zIndex: 2,
                            display: 'inline-block',
                            position: 'absolute',
                            top: 'calc(50% - 40px)',
                            cursor: 'pointer',
                        }}
                    >
                        <BsChevronRight color={'black'} size={30}/>
                    </button>
                )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                    )
                }
                return (
                    <li
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                )
            }}
        >
            <div className={'space-y-6'}>
                <div className={'h-[350px] w-[300px] relative mx-auto'}>
                    <Image
                        alt={""}
                        layout={'fill'}
                        src={TimerScreen01}
                        className={'object-cover object-top'}
                    />
                </div>
                <p>
                    Enregistre et adapte ta séance selon tes besoins et tes objectifs.
                </p>
            </div>
            <div className={'space-y-6'}>
                <div className={'h-[350px] w-[300px] relative mx-auto'}>
                    <Image
                        alt={""}
                        layout={'fill'}
                        src={TimerScreen02}
                        className={'object-cover object-top'}
                    />
                </div>
                <p>
                    Tempo, Respiration, Intervalle, AMRAP, EMOM, For Time, Sonothérapie…
                </p>
            </div>
            <div className={'space-y-6'}>
                <div className={'h-[350px] w-[300px] relative mx-auto'}>
                    <Image
                        alt={""}
                        layout={'fill'}
                        src={TimerScreen03}
                        className={'object-cover object-top'}
                    />
                </div>
                <p>
                    Découvre un design épuré, intuitif et des sons adaptés à ton sport.
                </p>
            </div>
        </Carousel>
    )
}


export default CarouselFeature;