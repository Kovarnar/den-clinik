import Header from './Header';
import About from './About';
import Services from './Services'
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
