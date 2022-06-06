import Image from 'next/image'

import styles from '../styles/Wave.module.scss'

import desktop from '../public/assets/wave/wave_desktop.svg';

export const Wave = () => {

    return (
        <>
            <svg className={styles.wave__mobile} viewBox="0 0 1081 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path>
                    <animate attributeName="d"
                        dur="7s"
                        repeatCount="indefinite"
                        values="
                    M422.569 7.79144C528.395 24.7385 917.569 191.792 1080.07 139.71L1080.07 158.931L0.069329 158.931L0.0693306 122.235C128.569 16.7911 282.069 -14.7084 422.569 7.79144Z;
                    M665.569 52.9301C771.395 69.8772 894.069 138.712 1080.07 138.712L1080.07 157.933L0.0693312 157.933L0.069335 71.4308C276.569 138.712 525.069 30.4303 665.569 52.9301Z;
                    M665.569 131.431C771.394 148.378 894.069 72.5675 1080.07 72.5675L1080.07 159.069L0.0688431 159.069L0.0688469 72.5674C301.069 18.4309 525.069 108.931 665.569 131.431Z;

                    M422.569 7.79144C528.395 24.7385 917.569 191.792 1080.07 139.71L1080.07 158.931L0.069329 158.931L0.0693306 122.235C128.569 16.7911 282.069 -14.7084 422.569 7.79144Z;
                    "
                    >
                    </animate>
                </path>
            </svg>


            <Image
                className={styles.wave__desktop}
                alt="Wave"
                src={desktop}
                // layout="fill"
                // objectFit="cover"
                // quality={40}
                // priority
            />
        </>

    )

}
