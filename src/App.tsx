import CardsRender from "./Components/Cards";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { CardContextProvider } from "./Context/CardsContext";

export default function App() {

  return (
    <div className="main">
      <Header />
      <CardContextProvider>
        <div className="cardsRender">
          <CardsRender />
        </div>
      </CardContextProvider>
      <Footer />
    </div>
  )
}
