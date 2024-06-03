import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const title = "My Portfolio";
  const home = "Home";
  const about = "About";
  const projects = "Projects";
  const contact = "Contact";

  const bannerTitle = "Welcome to My Portfolio";
  const bannerSubtitle = "Showcasing My Work and Projects";

  const projectImages = [
    "./react-components/src/img/calulator app.png",
    "./react-components/src/img/random-quote-machine.png",
    "./react-components/src/img/tic-tac-toe.png",
    "./react-components/src/img/wikipedia viewer.png"
  ];

  return (
    <>
      <Header title={title} home={home} about={about} projects={projects} contact={contact} />
      <Banner title={bannerTitle} subtitle={bannerSubtitle} />
      <Gallery images={projectImages} />
      <Footer />
    </>
  );
}

export default App;
