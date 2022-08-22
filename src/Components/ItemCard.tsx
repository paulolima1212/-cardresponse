import { useCardContext } from "../Context/CardsContext"

interface ItemCardProps {
    src: string
    alt: string
    name: string
    price: string
}

export default function ItemCard({src, name, price}: ItemCardProps) {

    const {setModalVisible, setModalContent}:any = useCardContext()

    function handleChangeModal(){
        setModalVisible(true)
        setModalContent({
            title: name,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione modi exercitationem harum!',
            src: src
        })
    }
    return (
        <div className="drink-face2">
            <img src={src} alt="pinacolada" />
            <h4 onClick={() => handleChangeModal()}>{name}</h4>
            <h4>{price}</h4>
        </div>
    )
}