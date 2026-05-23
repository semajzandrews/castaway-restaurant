import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Bar from "./components/Bar";
import Reserve from "./components/Reserve";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Menu />
        <Bar />
        <Reserve />
      </main>
      <Footer />
    </>
  );
}
