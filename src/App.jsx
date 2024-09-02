import { BrowserRouter } from "react-router-dom";
import { Footer, About, Contact, Experience, Feedbacks, Hero, Navbar, Works, Highlights, YouTubeVideo } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Highlights />
        <Works />
        <About />
        <YouTubeVideo />
        <Experience />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;