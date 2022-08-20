import { useCardContext } from "../Context/CardsContext"
import CardComponent from "./CardComponent";
import Modal from "./Modal";

export default function CardsRender() {

    const {modalVisible, modalTitle, modalContent }:any = useCardContext();

    const content1 = {
        description: [
            {
                prato1: "Moela de frango ao molho especial."
            },
            {
                prato2: "Batata frita"
            },
            {
                prato3: "Hamburguer da casa"
            }
        ],
        price: "A partir de 3€"
    }

    const content2 = {
        description: [
            {
                prato1: "Moela de frango ao molho especial."
            },
            {
                prato2: "Batata frita"
            },
            {
                prato3: "Hamburguer da casa"
            }
        ],
        price: "A partir de 3€"
    }

    const content3 = {
        description: [
            {
                prato1: "Moela de frango ao molho especial."
            },
            {
                prato2: "Batata frita"
            },
            {
                prato3: "Hamburguer da casa"
            }
        ],
        price: "A partir de 3€"
    }

    const content4 = {
        description: [
            {
                prato1: "Moela de frango ao molho especial."
            },
            {
                prato2: "Batata frita"
            },
            {
                prato3: "Hamburguer da casa"
            }
        ],
        price: "A partir de 3€"
    }

    return (
        <div className="cards">
            <CardComponent 
                title="Petiscos Diversos"
                alt="petiscos"
                content={content1}
                contentFace2="section1"
                src="src/image/moela.webp"
                />
            <CardComponent 
                title="Hot-Dog"
                alt="hotdog"
                content={content2}
                contentFace2="section1"
                src="src/image/cachorro.jpg"
                />
            <CardComponent 
                title="Drinks"
                alt="drinks"
                content={content3}
                contentFace2="section1"
                src="src/image/drinks.jpg"
                />
            <CardComponent 
                title="Food"
                alt="food"
                content={content4}
                contentFace2="section1"
                src="src/image/food.png"
                />
            {modalVisible && <Modal title={modalTitle} content={modalContent} />}
        </div>
    )
}