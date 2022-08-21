import CardsRender from "./Components/Cards";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="main">
      <Header />
      <CardsRender />
      <Footer />
    </div>
  )
}
