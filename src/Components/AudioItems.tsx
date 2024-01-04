import { useRef, useState } from 'react'

interface AudioItemsProps {
    imageUrl: string,
    audioUrl: string
}

const AudioItems = ({ imageUrl, audioUrl }: AudioItemsProps) => {
    const audioRefs = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const toggleSound = () => {
        isPlaying ? audioRefs?.current?.pause() : audioRefs?.current?.play();
    }

    const setVolume = (value: number) => {
        if (audioRefs?.current) {
            audioRefs.current.volume = value;
        }
    };

    return (
        <div onClick={toggleSound} className="col-start-1 col-end-3 flex flex-col gap-4 items-center justify-center">
            <div className="bg-item">
                <img src={imageUrl} alt="bird sound" />
            </div>
            <input
                min="0"
                max="1"
                step="0.1"
                type="range"
                onChange={(e) => setVolume(parseFloat(e.target.value))} />
            <audio ref={audioRefs} src={audioUrl} loop />
        </div>
    )
}

export default AudioItems