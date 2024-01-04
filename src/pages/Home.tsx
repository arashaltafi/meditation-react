import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import locationSlice from "../redux/locationSlice";
import { MdOutlineNightlight } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { MdLanguage } from "react-icons/md";
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
  }

  const showMore = () => {

  }

  return (
    <div className="w-full h-screen flex flex-col gap-3 sm:gap-4 bg-slate-100 dark:bg-slate-900 py-4 px-2 sm:px-4">

      <div className='w-full h-full zIndex10'>
        <ParticlesComponent particlesType={ParticlesType.Stars} />
      </div>

      <header className="zIndex10 div-row mx-4">
        <Lottie className='flex-1 opacity-95' animationData={animLottie} loop={true} />
        <img className="w-44 h-44 self-start opacity-95" src={logo} alt="meditation application" />
        <div className="self-start mt-2" onClick={showMore}>
          <IoMdMore className='bg-action' />
        </div>
      </header>

      <main className="zIndex20 w-full h-full grid grid-cols-6 gap-x-8 gap-y-12 items-start justify-center px-2 pt-4 pb-8">

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

      </main>
    </div>
  )
}

export default Home