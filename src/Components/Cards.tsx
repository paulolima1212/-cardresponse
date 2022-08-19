import { useCardContext } from "../Context/CardsContext"
import CardComponent from "./CardComponent";
import Modal from "./Modal";

export default function CardsRender() {

    const {modalVisible, modalTitle, modalContent }:any = useCardContext();

    return (
        <div className="cards">
            <CardComponent 
                title="Hot-Dog"
                alt="hotdog"
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Eveniet ducimus a cumque quia, dolores perspiciatis ipsa 
                qui deserunt facilis quo fugiat explicabo aspernatur consequatur 
                est autem praesentium nostrum, id similique!Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Eveniet ducimus a cumque quia, dolores perspiciatis ipsa 
                qui deserunt facilis quo fugiat explicabo aspernatur consequatur 
                est autem praesentium nostrum, id similique!Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Eveniet ducimus a cumque quia, dolores perspiciatis ipsa 
                qui deserunt facilis quo fugiat explicabo aspernatur consequatur 
                est autem praesentium nostrum, id similique!Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Eveniet ducimus a cumque quia, dolores perspiciatis ipsa 
                qui deserunt facilis quo fugiat explicabo aspernatur consequatur 
                est autem praesentium nostrum, id similique!"
                contentFace2="section1"
                src="src/image/hotdog.png"
                />
            <CardComponent 
                title="Burger"
                alt="burger"
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Eveniet ducimus a cumque quia, dolores perspiciatis ipsa 
                qui deserunt facilis quo fugiat explicabo aspernatur consequatur 
                est autem praesentium nostrum, id similique!"
                contentFace2="section1"
                src="src/image/burger.svg"
                />
            <CardComponent 
                title="Drinks"
                alt="drinks"
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Eveniet ducimus a cumque quia, dolores perspiciatis ipsa 
                qui deserunt facilis quo fugiat explicabo aspernatur consequatur 
                est autem praesentium nostrum, id similique!"
                contentFace2="section1"
                src="src/image/drink.png"
                />
            <CardComponent 
                title="Food"
                alt="food"
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Eveniet ducimus a cumque quia, dolores perspiciatis ipsa 
                qui deserunt facilis quo fugiat explicabo aspernatur consequatur 
                est autem praesentium nostrum, id similique!"
                contentFace2="section1"
                src="src/image/food.png"
                />
            {modalVisible && <Modal title={modalTitle} content={modalContent} />}
        </div>
    )
}