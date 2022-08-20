import { useCardContext } from "../Context/CardsContext"

interface CardProps{
    contentFace2: string
    src: string
    alt: string
    title: string
    content: {
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

interface ContextProps{
    setModalVisible: (boolean: boolean) => {};
    setModalContent: (string: string) => string;
    setModalTitle: (string: string) => string;
}

export default function CardComponent({contentFace2, src, alt, title, content}: CardProps) {

    const {setModalVisible, setModalContent, setModalTitle}:any = useCardContext()

    function handleChangeModal(){
        setModalVisible(true)
        setModalContent(content)
        setModalTitle(title)
    }

    function handleRezise() {
        const card = document.querySelectorAll('div.face.face1')
        card?.forEach((e) => {
            e.classList.toggle('active')
        })
    }

    return (
        <div className="cardContainer" >
            <div className="card">
                <div className="face face1" data-text={alt}>
                    <div className="content">
                        <img src={src} alt={alt}  />
                    </div>
                </div>
                <div className="face face2">
                    <div className={contentFace2}>
                        <h3 onClick={() => handleRezise()}>{title}</h3>
                        <br />
                        <p>{content.description[0].prato1}</p>
                        <p>{content.description[1].prato2}</p>
                        <p>{content.description[2].prato3}</p>
                        <p>{content.price}</p>
                        <a href="#" onClick={() => handleChangeModal()}>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}