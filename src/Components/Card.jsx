
const Card = ({facilitys}) => {
    console.log(facilitys)
    return (
        <div>
            {
                facilitys.map(facility => <>
                <article>
                    <h4 className="text-2xl">{facility.name}</h4>
                    <p>{facility.details}</p>
                </article>
                </>)
            }
        </div>
    );
};

export default Card;