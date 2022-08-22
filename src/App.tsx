import CardsRender from "./Components/Cards";
import Carrousel from "./Components/Carrousel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import { useCardContext } from "./Context/CardsContext";

import "swiper/css/pagination";
export default function App() {

  const {modalVisible}: any = useCardContext()

  return (
    <div className="main">
      <Header />
      {modalVisible && <Modal />}
      <Carrousel />
      <Footer />
    </div>
  )
}
