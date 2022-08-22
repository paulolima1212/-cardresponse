import { useCardContext } from "../Context/CardsContext"
import ItemCard from "./ItemCard"

interface CardProps{
    contentFace2: string
    src: string
    alt: string
    title: string
    content: {
        title: string,
        src: string,
        description: string,
        alt:string,
        price: string
    }
    price: string
}

interface ContextProps{
    setModalVisible: (boolean: boolean) => {};
    setModalContent: (string: string) => string;
    setModalTitle: (string: string) => string;
}

export default function CardComponent({contentFace2, src, alt, title, content}: CardProps) {

    return (
        <div className="card">
            <div className="face face1" data-text={alt} >
                <img src={src} alt={alt}  />
            </div>
            <div className="face face2">
                <div className="card-title">
                    <h3 >{title}</h3>
                </div>
                <div className="itemcard">
                    <ItemCard name="margarita" src="src/image/margarita.svg" price="5€" alt="margarita" />
                    <ItemCard name="gin tônica" src="src/image/Drinks/gintonica.svg" price="8€" alt="gintonica" />
                    <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="5€" alt="pinacolada" />
                    <ItemCard name="mojito" src="src/image/mojito.svg" price="3€" alt="mojito" />
                    <ItemCard name="margarita" src="src/image/margarita.svg" price="5€" alt="margarita" />
                    <ItemCard name="bloodymary" src="src/image/Drinks/bloodymary.svg" price="6€" alt="bloodymary-drink" />
                    <ItemCard name="gin tônica" src="src/image/Drinks/gintonica.svg" price="8€" alt="gintonica" />
                    <ItemCard name="rum cola" src="src/image/drinks/rumcola.svg" price="9€" alt="rumcola" />
                    <ItemCard name="whisky" src="src/image/drinks/whisky.svg" price="2€" alt="whisky" />
                    <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="3€" alt="pinacolada" />
                    <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="5€" alt="pinacolada" />
                    <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="6€" alt="pinacolada" />
                    <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="7€" alt="pinacolada" />
                    <ItemCard name="margarita" src="src/image/margarita.svg" price="5€" alt="margarita" />
                    <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="8€" alt="pinacolada" />
                    <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="9€" alt="pinacolada" />
                    <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="5€" alt="pinacolada" />
                    <ItemCard name="bloodymary" src="src/image/Drinks/bloodymary.svg" price="6€" alt="bloodymary-drink" />
                    <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="2€" alt="pinacolada" />
                    <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="12€" alt="pinacolada" />
                    <ItemCard name="mojito" src="src/image/mojito.svg" price="3€" alt="mojito" />
                    <ItemCard name="margarita" src="src/image/margarita.svg" price="5€" alt="margarita" />
                </div>
            </div>
        </div>
    )
}