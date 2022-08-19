import CardsRender from "./Components/Cards";
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
    </div>
  )
}
