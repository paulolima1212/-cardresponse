import CardsRender from "./Components/Cards";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import { useCardContext } from "./Context/CardsContext";

export default function App() {

  const {modalVisible}: any = useCardContext()

  return (
    <div className="main">
      <Header />
      {modalVisible && <Modal />}
      <CardsRender />
      <Footer />
    </div>
  )
}
