import Nav from './components/Nav';
import {Hero ,Footer} from './sections';


const App = () =>(
  <main className="relative">
    <Nav/>
    <section>
      <Hero/>
    </section>
    <section>
      <Footer/>
    </section>
  </main>
);

export default App;