import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import locationSlice from "../redux/locationSlice";
import { MdOutlineNightlight } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { FaStar } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { Zoom } from "react-awesome-reveal";
import { IoMdMore } from "react-icons/io";
import Lottie from "lottie-react";
import animLottie from "../Assets/lottie/wave_motion.json";
import logo from "../Assets/images/create_without_back.png";
import bird from "../Assets/images/bird_grey.png";
import birdSelected from "../Assets/images/bird_tor.png";
import bowl from "../Assets/images/bowl_grey.png";
import bowlSelected from "../Assets/images/bowl_tor.png";
import cat from "../Assets/images/cat_grey.png";
import catSelected from "../Assets/images/cat_tor.png";
import fire from "../Assets/images/fire_grey.png";
import fireSelected from "../Assets/images/fire_tor.png";
import flute from "../Assets/images/flute_grey.png";
import fluteSelected from "../Assets/images/flute_tor.png";
import grass from "../Assets/images/grass_grey.png";
import grassSelected from "../Assets/images/grass_tor.png";
import harp from "../Assets/images/harp_grey.png";
import harpSelected from "../Assets/images/harp_tor.png";
import keyboard from "../Assets/images/keyboard_grey.png";
import keyboardSelected from "../Assets/images/keyboard_tor.png";
import musicalNote from "../Assets/images/musical_note_grey.png";
import musicalNoteSelected from "../Assets/images/musical_note_tor.png";
import ocean from "../Assets/images/ocean_grey.png";
import oceanSelected from "../Assets/images/ocean_tor.png";
import om from "../Assets/images/om_grey.png";
import omSelected from "../Assets/images/om_tor.png";
import piano from "../Assets/images/piano_grey.png";
import pianoSelected from "../Assets/images/piano_tor.png";
import railway from "../Assets/images/railway_grey.png";
import railwaySelected from "../Assets/images/railway_tor.png";
import rainy from "../Assets/images/rainy_grey.png";
import rainySelected from "../Assets/images/rainy_tor.png";
import tabla from "../Assets/images/tabla_grey.png";
import tablaSelected from "../Assets/images/tabla_tor.png";
import thunder from "../Assets/images/thunder_grey.png";
import thunderSelected from "../Assets/images/thunder_tor.png";
import wind from "../Assets/images/wind_grey.png";
import windSelected from "../Assets/images/wind_tor.png";
import AudioItems from "../Components/AudioItems";
import ParticlesComponent, { ParticlesType } from "../Components/ParticlesComponent";

const Home = () => {
  const birdAudio = "https://meditation.arashaltafi.ir/audio_url/birds_sound.ogg";
  const bowlAudio = "https://meditation.arashaltafi.ir/audio_url/singing_bowl.ogg";
  const catAudio = "https://meditation.arashaltafi.ir/audio_url/cat_purr_sound.ogg";
  const fireAudio = "https://meditation.arashaltafi.ir/audio_url/fire_sound.ogg";
  const fluteAudio = "https://meditation.arashaltafi.ir/audio_url/flute_sound.ogg";
  const grassAudio = "https://meditation.arashaltafi.ir/audio_url/grass_sound.ogg";
  const harpAudio = "https://meditation.arashaltafi.ir/audio_url/harp_sound.ogg";
  const musicalNoteAudio = "https://meditation.arashaltafi.ir/audio_url/music_sound.ogg";
  const keyboardAudio = "https://meditation.arashaltafi.ir/audio_url/keyboard_sound.ogg";
  const pianoAudio = "https://meditation.arashaltafi.ir/audio_url/piano_sound.ogg";
  const railwayAudio = "https://meditation.arashaltafi.ir/audio_url/rail_sound.ogg";
  const oceanAudio = "https://meditation.arashaltafi.ir/audio_url/ocean_sound.ogg";
  const omAudio = "https://meditation.arashaltafi.ir/audio_url/om_sound.ogg";
  const rainyAudio = "https://meditation.arashaltafi.ir/audio_url/rain_sound.ogg";
  const tablaAudio = "https://meditation.arashaltafi.ir/audio_url/tabla_sound.ogg";
  const thunderAudio = "https://meditation.arashaltafi.ir/audio_url/thunder_sound.ogg";
  const windAudio = "https://meditation.arashaltafi.ir/audio_url/wind_sound.ogg";

  const location = useLocation();
  const dispatch = useDispatch();
  const [showAnimation1, setShowAnimation1] = useState<boolean>(false);
  const [showAnimation2, setShowAnimation2] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animation, setAnimation] = useState<ParticlesType | null>(ParticlesType.Stars);

  useEffect(() => {
    dispatch(locationSlice.actions.addLocation([{
      pathName: location.pathname,
      isLoaded: true
    }]));
  }, [])

  const changeTheme = () => {
    if (localStorage.getItem('theme') === 'light') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    setIsMenuOpen(false)
  }

  const showMore = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const setAnimationBackground = (anim: ParticlesType | null) => {
    setAnimation(anim)
    showMore()
  }

  const clickOnLottie = () => {
    setShowAnimation1(!showAnimation1)
    setIsMenuOpen(false)
  }

  const clickOnLogo = () => {
    setShowAnimation2(!showAnimation2)
    setIsMenuOpen(false)
  }

  return (
    <div className={`w-full h-screen flex flex-col gap-3 sm:gap-4 bg-slate-200 dark:bg-slate-900 py-4 px-2 sm:px-4`}>

      <div className='relative w-full h-full zIndex10'>
        {animation && <ParticlesComponent particlesType={animation} />}
      </div>

      <header
        className={`zIndex10 div-row gap-4 sm:gap-8 md:gap-12 lg:gap-16 mx-4 sm:mx-8 ${isMenuOpen ? 'opacity-50' : 'opacity-100'}`}>
        <div
          onClick={() => setIsMenuOpen(false)}
          className="flex-1 flex sm:pr-8">
          <Lottie onClick={clickOnLottie} className={`animated swing h-44 self-end opacity-100 dark:opacity-95' ${showAnimation1 && 'infinite'}`} animationData={animLottie} loop={true} />
        </div>
        <img onClick={clickOnLogo} className={`animated tada w-44 h-44 self-start opacity-100 dark:opacity-95 ${showAnimation2 && 'infinite'}`} src={logo} alt="meditation application" />
        <div
          onClick={showMore}
          className="animated zoomIn self-start mt-2">
          <IoMdMore className='bg-action' />
        </div>
      </header>

      <div className={`zIndex30 absolute top-[4.25rem] left-[4.25rem] sm:top-20 sm:left-24 md:top-[5.5rem] md:left-24 lg:top-24 lg:left-24 xl:top-24 xl:left-24 rounded-2xl rounded-tr-md rounded-bl-md px-6 py-4 bg-slate-300 dark:bg-slate-700 ${isMenuOpen ? 'block' : 'hidden'} transition duration-100`}>
        <ul className="list-none flex flex-col gap-4 items-end justify-center">
          <li>
            <div onClick={changeTheme} className="flex flex-row items-center justify-center gap-2 cursor-pointer">
              <div className="hidden dark:block">
                <WiDaySunny />
              </div>
              <div className="block dark:hidden">
                <MdOutlineNightlight />
              </div>
              <p className="h3 hidden dark:block">Light</p>
              <p className="h3 block dark:hidden">Dark</p>
            </div>
          </li>
          <li>
            <div onClick={() => setAnimationBackground(ParticlesType.Stars)} className="flex flex-row items-center justify-center gap-2 cursor-pointer">
              <FaStar />
              <p className="h3">Star</p>
            </div>
          </li>
          <li>
            <div onClick={() => setAnimationBackground(ParticlesType.Snow)} className="flex flex-row items-center justify-center gap-2 cursor-pointer">
              <FaRegSnowflake />
              <p className="h3">Snow</p>
            </div>
          </li>
          <li>
            <div onClick={() => setAnimationBackground(null)} className="flex flex-row items-center justify-center gap-2 cursor-pointer">
              <MdOutlineClear />
              <p className="h3">Clear Animation</p>
            </div>
          </li>
        </ul>
      </div>

      <main className={`zIndex20 ${isMenuOpen ? 'opacity-50' : 'opacity-100'}`}>
        <div
          onClick={() => setIsMenuOpen(false)}
          className="w-full h-full grid grid-cols-6 gap-x-8 gap-y-12 items-start justify-center px-2 pt-4 pb-8">

          <AudioItems styles="col-start-1 col-end-3" audioUrl={thunderAudio} imageUrl={thunder} imageSelectedUrl={thunderSelected} />

          <AudioItems styles="col-start-3 col-end-5" audioUrl={rainyAudio} imageUrl={rainy} imageSelectedUrl={rainySelected} />

          <AudioItems styles="col-start-5 col-end-7" audioUrl={keyboardAudio} imageUrl={keyboard} imageSelectedUrl={keyboardSelected} />

          <AudioItems styles="col-start-1 col-end-3" audioUrl={musicalNoteAudio} imageUrl={musicalNote} imageSelectedUrl={musicalNoteSelected} />

          <AudioItems styles="col-start-3 col-end-5" audioUrl={windAudio} imageUrl={wind} imageSelectedUrl={windSelected} />

          <AudioItems styles="col-start-5 col-end-7" audioUrl={oceanAudio} imageUrl={ocean} imageSelectedUrl={oceanSelected} />

          <AudioItems styles="col-start-1 col-end-3" audioUrl={grassAudio} imageUrl={grass} imageSelectedUrl={grassSelected} />

          <AudioItems styles="col-start-3 col-end-5" audioUrl={fluteAudio} imageUrl={flute} imageSelectedUrl={fluteSelected} />

          <AudioItems styles="col-start-5 col-end-7" audioUrl={pianoAudio} imageUrl={piano} imageSelectedUrl={pianoSelected} />

          <AudioItems styles="col-start-1 col-end-3" audioUrl={harpAudio} imageUrl={harp} imageSelectedUrl={harpSelected} />

          <AudioItems styles="col-start-3 col-end-5" audioUrl={birdAudio} imageUrl={bird} imageSelectedUrl={birdSelected} />

          <AudioItems styles="col-start-5 col-end-7" audioUrl={bowlAudio} imageUrl={bowl} imageSelectedUrl={bowlSelected} />

          <AudioItems styles="col-start-1 col-end-3" audioUrl={catAudio} imageUrl={cat} imageSelectedUrl={catSelected} />

          <AudioItems styles="col-start-3 col-end-5" audioUrl={railwayAudio} imageUrl={railway} imageSelectedUrl={railwaySelected} />

          <AudioItems styles="col-start-5 col-end-7" audioUrl={omAudio} imageUrl={om} imageSelectedUrl={omSelected} />

          <AudioItems styles="col-start-1 col-end-4" audioUrl={tablaAudio} imageUrl={tabla} imageSelectedUrl={tablaSelected} />

          <AudioItems styles="col-start-4 col-end-7" audioUrl={fireAudio} imageUrl={fire} imageSelectedUrl={fireSelected} />

        </div>
      </main>
    </div>
  )
}

export default Home