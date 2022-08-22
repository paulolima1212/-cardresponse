import { useCardContext } from "../Context/CardsContext"
import ItemCard from "./ItemCard"

interface CardProps{
    contentFace2: string
    src: string
    alt: string
    title: string
    content: string
    price: string
}

interface ContextProps{
    setModalVisible: (boolean: boolean) => {};
    setModalContent: (string: string) => string;
    setModalTitle: (string: string) => string;
}

export default function CardComponent({contentFace2, src, alt, title, content}: CardProps) {

    const {setModalVisible}:any = useCardContext()

    function handleChangeModal(){
        setModalVisible(true)
    }

    function handleRezise() {
        const card = document.querySelectorAll('div.face.face1')
        card?.forEach((e) => {
            e.classList.toggle('active')
        })
    }

    return (
        <div className="card">
            <div className="face face1" data-text={alt} >
                <img src={src} alt={alt}  />
            </div>
            <div className="face face2">
                <div className="card-title">
                    <h3 >{title}</h3>
                </div>
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
                <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="8€" alt="pinacolada" />
                <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="9€" alt="pinacolada" />
                <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="5€" alt="pinacolada" />
                <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="2€" alt="pinacolada" />
                <ItemCard name="piña colada" src="src/image/pinacolada2.svg" price="12€" alt="pinacolada" />
            </div>
        </div>
    )
}