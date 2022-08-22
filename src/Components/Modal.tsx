import { useCardContext } from "../Context/CardsContext"

export default function Modal() {

    const {setModalVisible}:any = useCardContext()

    function handleCloseModal() {
        setModalVisible(false)
    }
    return (
        <div className="modal">
            <div className="frame-modal">
                <h3 className="title-modal">PIÑA COLADA</h3>
                <img src="src/image/pinacolada2.svg" alt="drink-pinacolada" />
                <p className="desc-modal">
                    RUM, LEITE DE 
                    COCO E
                    SUCO DE ABACAXI
                </p>
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