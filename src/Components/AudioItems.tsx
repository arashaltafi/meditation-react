import { useRef, useState } from 'react'
import { motion } from "framer-motion"

interface AudioItemsProps {
    imageUrl: string,
    imageSelectedUrl: string,
    audioUrl: string,
    styles: string
}

const AudioItems = ({ imageUrl, imageSelectedUrl, audioUrl, styles }: AudioItemsProps) => {
    const audioRefs = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [value, setValue] = useState<number>(0.5);

    const toggleSound = () => {
        setIsPlaying(!isPlaying)
        isPlaying ? audioRefs?.current?.pause() : audioRefs?.current?.play();
    }

    const setVolume = (value: number) => {
        if (audioRefs?.current) {
            audioRefs.current.volume = value;
        }
        setValue(value);
    };

    return (

        <div className={`${styles} flex flex-col gap-y-6 sm:gap-y-8 items-center justify-center animated fadeInDown`}>
            <motion.button
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10, duration: 0.2, delay: 0 }}
            >
                <div onClick={toggleSound} className="bg-item">
                    <img src={`${isPlaying ? imageSelectedUrl : imageUrl}`} alt="bird sound" />
                </div>
            </motion.button>
            <input
                className={`${isPlaying ? 'visible' : 'invisible'}`}
                min="0"
                max="1"
                step="0.1"
                type="range"
                value={value}
                onChange={(e) => setVolume(parseFloat(e.target.value))} />
            <audio ref={audioRefs} src={audioUrl} loop />
        </div>
    )
}

export default AudioItems