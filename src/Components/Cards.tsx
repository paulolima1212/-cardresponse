import CardComponent from "./CardComponent";

export default function CardsRender() {    

    return (
        <div className="cards">

            <CardComponent 
                title="Petiscos Diversos"
                alt="petiscos"
                contentFace2="section1"
                content="prato 1"
                price="5€"
                src="src/image/drinks.jpg"
                />
        </div>
    )
}