import Hero from "./components/Hero";
import About from "./components/About";
import MostRequested from "./components/MostRequested";
import Promotions from "./components/Promotions";
import Ubication from "./components/Ubication";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <MostRequested/>
      <Promotions/>
      <Ubication/>
      <Menu/>
      <Footer/>
    </>
  );
}
