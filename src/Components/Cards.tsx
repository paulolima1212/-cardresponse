import CardComponent from "./CardComponent";

export default function CardsRender() {    

    const content = {
        title: 'asdf',
        src: 'string',
        description: 'string',
        alt:'string',
        price: 'string'
    }
    return (
        <div className="cards">
            <CardComponent 
                title="DRINKS"
                alt="DRINKS"
                contentFace2="section1"
                price="5€"
                content={content}
                src="src/image/drinks.jpg"
                />
        </div>
    )
}