import "./App.css";
import HomePhoto from "./assets/imaes/imghome.png";
import About from "./assets/imaes/about.png";
import Spotify from "./assets/imaes/spotify.png";
import Listen2 from "./assets/imaes/listen2.png";
import Listen3 from "./assets/imaes/listen3.png";
import Listen4 from "./assets/imaes/listen4.png";
import Listen5 from "./assets/imaes/listen5.png";
import Epi1 from "./assets/imaes/epi1.png";
import Epi2 from "./assets/imaes/epi2.png";
import Epi3 from "./assets/imaes/epi3.png";
import Header from "./components/header";
import AnEpisode from "./components/anEpisode";
import { BsArrowRight } from "react-icons/bs";
import Subscribe from "./components/subscribe";
import Quotes from "./components/quotes";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="section-home" id="home" >
        <div className="home-photo">
          <img src={HomePhoto} alt="" className="home-img" />
        </div>
        <div className="home-text">
          <div className="home-text-container">
            Take your <br /> podcasts to the <br />{" "}
            <span className="next-underline">next</span> <strong>level</strong>
          </div>
          <div className="listen-on">
            Listen on
            <br />
            <div className="listen-social">
              <img src={Spotify} alt="" className="social-icon" />
              <img src={Listen2} alt="" className="social-icon" />
              <img src={Listen3} alt="" className="social-icon" />
              <img src={Listen4} alt="" className="social-icon" />
              <img src={Listen5} alt="" className="social-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="episodes-section" id="episodes">
        <div className="episodes-header">
          <div className="episode-text">Latest episodes</div>
          <button className="view-all-episodes">View all episodes</button>
        </div>
        <AnEpisode
          pic={Epi1}
          type="Gear"
          num="3"
          title="Should you get outboard audio gear?"
          description="Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up."
        />
        <AnEpisode
          pic={Epi2}
          type="Tips and  Tricks"
          num="2"
          title="Mic tricks to take you to the next level"
          description="Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great."
        />
        <AnEpisode
          pic={Epi3}
          type="Gear"
          num="1"
          title="The best microphone under $200"
          description="With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks."
        />
      </div>

      <div className="section-about" id="about" >
        <div className="about-text">
          <div className="strelka">
            <BsArrowRight className="right-arrow" />
          </div>
          <div className="about-meet">Meet your host</div>
          <div className="about-name">Jacob Paulaner</div>
          <div className="about-1">
            Jacob has a background in audio engineering, and has been podcasting
            since the early days.
          </div>
          <div className="about-1">
            He’s here to help you level up your game by sharing everything he’s
            learned along the way.
          </div>
        </div>
        <div className="about-pic">
          <img src={About} className="about-img" alt="" />
        </div>
      </div>

      <Subscribe id="contact" />
      <div className="quotes-section">
        <Quotes
          text="I can’t recommend this podcast enough"
          auth="Betty Lacey"
        />
        <Quotes text="Jacob is the best in the business" auth="Adam Driver" />
        <Quotes text="A wealth of audio knowledge" auth="Marcus Brown" />
        <Quotes text="Every episode is a gem!" auth="Jessica Knowl" />
        <Quotes text="Whoa whoa, let me take some notes!" auth="Scott Adams" />
        <Quotes
          text="I’ve upped my game considerably since I started listening"
          auth="Steven Blast"
        />
      </div>
    </div>
  );
}

export default App;
