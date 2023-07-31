import Category from "../components/Category";
import MainBar from "../components/MainBar";
import carousel from "../assets/Carousel.png";
import ship from "../assets/ship.png";
import "../styles/home.scss";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="home">
      <MainBar />
      <div className="main-home">
        <div className="ads">
          <Category />
          <div className="pic">
            <img style={{ width: 860, height: 380 }} src={carousel} alt="" />
            <div className="under">
              <img style={{ width: 280, height: 224 }} src={carousel} alt="" />
              <img style={{ width: 280, height: 224 }} src={carousel} alt="" />
              <img style={{ width: 280, height: 224 }} src={carousel} alt="" />
            </div>
          </div>
        </div>
        <div className="benefit">
          <div className="ship">
            <img src={ship} alt="" />
            <div className="text">
              <h1>Free Shipping</h1>
              <h2>For order from %50</h2>
            </div>
          </div>
          <div className="ship">
            <img src={ship} alt="" />
            <div className="text">
              <h1>Free Shipping</h1>
              <h2>For order from %50</h2>
            </div>
          </div>
          <div className="ship">
            <img src={ship} alt="" />
            <div className="text">
              <h1>Free Shipping</h1>
              <h2>For order from %50</h2>
            </div>
          </div>
          <div className="ship">
            <img src={ship} alt="" />
            <div className="text">
              <h1>Free Shipping</h1>
              <h2>For order from %50</h2>
            </div>
          </div>
        </div>
        <h3>Best Sellers</h3>
        <Card />
      </div>
    </div>
  );
}
