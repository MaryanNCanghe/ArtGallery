import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';
import Header from './pages/Header/Header';
import Footer from './components/Footer/index';


export default function Home() {
  return (
    <main>
        <section >
        <Header />
        </section>

      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
