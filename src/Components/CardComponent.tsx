import { useCardContext } from "../Context/CardsContext"

interface CardProps{
    dataText: string
    src: string
    alt: string
    title: string
    content: string
}

interface ContextProps{
    setModalVisible: (boolean: boolean) => {};
    setModalContent: (string: string) => string;
    setModalTitle: (string: string) => string;
}

export default function CardComponent({dataText, src, alt, title, content}: CardProps) {

    const {setModalVisible, setModalContent, setModalTitle}:any = useCardContext()

    function handleChangeModal(){
        console.log(title);
        setModalVisible(true)
        setModalContent(content)
        setModalTitle(title)
    }

    return (
        <div className="cardContainer">
            <div className="card">
                <div className="face face1" data-text={alt}>
                    <div className="content">
                        <img src={src} alt={alt}  />
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <h3>{title}</h3>
                        <p>{content}</p>
                        <a href="#" onClick={() => handleChangeModal()}>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}