import { useRef, useState } from 'react'

interface AudioItemsProps {
    imageUrl: string,
    audioUrl: string,
    styles: string
}

const AudioItems = ({ imageUrl, audioUrl, styles }: AudioItemsProps) => {
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
        <div className={`${styles} flex flex-col gap-y-6 sm:gap-y-8 items-center justify-center`}>
            <div onClick={toggleSound} className="bg-item">
                <img src={imageUrl} alt="bird sound" />
            </div>
            <input
                className={`${isPlaying ? 'block' : 'hidden'}`}
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