
interface ItemCardProps {
    src: string
    alt: string
    name: string
    price: string
}

export default function ItemCard({src, name, price}: ItemCardProps) {
    return (
        <div className="drink-face2">
            <img src={src} alt="pinacolada" />
            <h4>{name}</h4>
            <h4>{price}</h4>
        </div>
    )
}