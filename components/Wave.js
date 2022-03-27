import styles from '../styles/Wave.module.scss'

export const Wave = () => {

    return (
        <svg className={styles.wave} height="100%" viewBox="0 0 158 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path>
                <animate attributeName="d"
                    dur="7s"
                    repeatCount="indefinite"
                    values="
                    M6.86056 657.5C23.8076 551.674 190.861 162.5 138.779 1.52588e-05L158 0V1080H121.304C15.8602 951.5 -15.6393 798 6.86056 657.5Z;
                    M51.9993 414.5C68.9463 308.675 137.781 186 137.781 1.52588e-05L157.002 0V1080H70.4999C137.781 803.5 29.4994 555 51.9993 414.5Z;
                    M130.5 414.5C147.447 308.675 71.6366 186 71.6366 1.52588e-05L158.138 0V1080H71.6366C17.5 779 108 555 130.5 414.5Z;

                    M6.86056 657.5C23.8076 551.674 190.861 162.5 138.779 1.52588e-05L158 0V1080H121.304C15.8602 951.5 -15.6393 798 6.86056 657.5Z;
                    "
                >
                </animate>
            </path>
        </svg>

    )

}