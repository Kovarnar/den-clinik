import Header from './Header';
import About from './About';
import Services from './Services';
import Price from './Price';
import Footer from './Footer';
import '../sass/App.scss';

function App() {
  return (
    <div className="App">
      <h1 className='visually-hidden'>For SEO</h1>
      <Header />
      <main className='main'>
        <About />
        <Services />
        <Price />
      </main>
      <Footer />
    </div>
  );
}

export default App;
