import ProductHero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

export default function Product() {
  return (
    <div className="container">
      <ProductHero />

      <LeftImage
        ImageURL="media/images/kite.png"
        prodName="Kite"
        prodDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <RightImage
        ImageURL="media/images/kite.png"
        prodName="Console"
        prodDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        linkName='Learn More'
        learnMore="#"
      />

      <LeftImage
        ImageURL="media/images/coin.png"
        prodName="Coin"
        prodDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <RightImage
        ImageURL="media/images/kite.png"
        prodName="Kite Connect API"
        prodDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        linkName='Kite Connect'
        learnMore="#"
      />

      <LeftImage
        ImageURL="media/images/varsity.png"
        prodName="Varsity mobile"
        prodDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <Universe />
    </div>
  );
}
