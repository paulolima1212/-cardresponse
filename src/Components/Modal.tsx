import { useCardContext } from "../Context/CardsContext"

export default function Modal() {

    const {setModalVisible, modalContent}:any = useCardContext()

    console.log(modalContent);

    function handleCloseModal() {
        setModalVisible(false)
    }
    return (
        <div className="modal">
            <div className="frame-modal">
                <h3 className="title-modal">{modalContent.title}</h3>
                <img src={modalContent.src} alt="drink-pinacolada" />
                <p className="desc-modal">{modalContent.content}</p>
                <p className="teor-alcolico">TEOR ALCÓLICO:</p>
                <div className="teorwheels">
                    <img src="src/image/rodaactive.svg" alt="roda-carro" id="wheels1" />
                    <img src="src/image/rodaactive.svg" alt="roda-carro" id="wheels2" />
                    <img src="src/image/rodaactive.svg" alt="roda-carro" id="wheels3" />
                    <img src="src/image/rodaactive.svg" alt="roda-carro" id="wheels4" />
                    <img src="src/image/rodaactive.svg" alt="roda-carro" id="wheels5" />
                </div>
                <input type="button" value="Close" onClick={() => handleCloseModal()} />
            </div>
        </div>
    )
}