import Header from "./Header";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import AboutSection from "./AboutSection";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Specials />
        <Testimonials />
        <AboutSection />
      </main>
    </>
  );
}

export default Home;
