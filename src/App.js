import logo from './logo.svg';
import './App.css';
import Header from './Head/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
function App() {
  return (
    <div id="CalaStrona">
      <Header name="Kawiarni"/>
      <Body nazwaMenu1="Napoje" nazwaMenu2="Ciasta"/>
      <Footer poczontek="8:00" koniec="12:35"/>
    </div>
  );
}

export default App;
