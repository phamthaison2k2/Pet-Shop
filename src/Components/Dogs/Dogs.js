import DogCard from './DogCard'
import dataDogs from './dataDogs'

const Dogs = () => {


    return (  
        <section className="dogs-container">
            {dataDogs.map((dog) => (
                <div key={dog.id}>

                    <DogCard
                        name={dog.name}
                        breed={dog.breed}
                        description={dog.description}
                        price={dog.price}
                        imageUrl={dog.imageUrl}
                    />

                </div>
            ))}
        </section>
    );
}
 
export default Dogs;