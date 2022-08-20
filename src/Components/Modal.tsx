import { useCardContext } from "../Context/CardsContext"

interface ModalProps{
    title: string
    content:{
        description: [
            {
                prato1: string
            },
            {
                prato2: string
            },
            {
                prato3: string
            }
        ], 
        price: string
    }
}

export default function Modal({title, content}:ModalProps) {

    const {setModalVisible}: any = useCardContext()

    return (
        <div className="modal">
            <h1>{title}</h1>
            <p>{content.description[0].prato1}</p>
            <p>{content.description[1].prato2}</p>
            <p>{content.description[2].prato3}</p>
            <p>{content.price}</p>
            <a href="#" onClick={() => setModalVisible(false)}>Close</a>
        </div>
    )
}