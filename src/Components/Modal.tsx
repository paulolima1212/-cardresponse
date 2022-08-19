import { useCardContext } from "../Context/CardsContext"

interface ModalProps{
    title: string
    content:string
}

export default function Modal({title, content}:ModalProps) {

    const {setModalVisible}: any = useCardContext()

    return (
        <div className="modal">
            <h1>{title}</h1>
            <p>{content}</p>
            <a href="#" onClick={() => setModalVisible(false)}>Close</a>
        </div>
    )
}