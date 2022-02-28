import { useState, useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext'


const DogCard = (props) => {

    const { name, breed, imageUrl, description, price } = props;

    const [add, setAdd] = useState(false);

    const { addToCart, setTotal } = useContext(CartContext)

    const handleAddDogs = () => {
        setAdd(true);

        const newItems = {
            name: name,
            price: price,
            imageUrl: imageUrl,
        };

        addToCart((prev) => [...prev, newItems]);
        setTotal(prev => (prev += Number(price)));
    }

    return (  
        <section className="dogs">

            <div className="dogs-info">
                <p>{name}</p>
                <p>{breed}</p>
            </div>

            <div className="dogs-img-container">
                <img src={imageUrl} className="dog-img"/>
            </div>

            <div className="dogs-desc">{description}</div>
            
            <div className="dogs-price">{price}$</div>

            {add ? 
                (
                    <button disabled className="dogs-btn-disabled">
                        ADDED
                    </button>
                ) : 
                (
                    <button className="dogs-btn" onClick={handleAddDogs}>
                        ADD TO CART
                    </button>
                )
            }

        </section>
    );
}
 
export default DogCard;