import Hero from "./components/Hero";
import About from "./components/About";
import MostRequested from "./components/MostRequested";
import Promotions from "./components/Promotions";
import Ubication from "./components/Ubication";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <MostRequested/>
      <Promotions/>
      <Ubication/>
    </>
  );
}
