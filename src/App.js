import './App.css';
import AboutUs from './Component/AboutUs/AboutUs';
import Contact from './Component/Contact/Contact';
import Event from './Component/Event/Event';
import Gallery from './Component/Gallery/Gallery';
import Home from './Component/Home/Home';
import NewsFeed from './Component/NewsFeed/NewsFeed';
import ProductDetail from './Component/ProductDetail/ProductDetail';
import ProductPage from './Component/ProductPage/ProductPage';
import ServiceDetails from './Component/ServiceDetails/ServiceDetails';
import Footer from './Component/Shared/Footer/Footer';
import Header from './Component/Shared/Header/Header';
import HeadTop from './Component/Shared/HeadTop/HeadTop';

function App() {
  return (
    <div className="App">
      <HeadTop></HeadTop>
      <Header></Header>
       {/* <Home></Home> 
      <ProductPage></ProductPage> 
      <ProductDetail></ProductDetail>
      <AboutUs></AboutUs>
      <ServiceDetails></ServiceDetails>
      <NewsFeed></NewsFeed>
      <Event></Event>
      <Gallery></Gallery>*/}
      <Contact></Contact>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
