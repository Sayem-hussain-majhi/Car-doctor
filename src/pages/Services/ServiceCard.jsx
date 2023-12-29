

const ServiceCard = ({ singleService }) => {
    console.log('This is singleService', singleService?.facility
    )

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
            {
                singleService?.facility?.map(item => <>
                    <article className="p-7 border-t-4  border-t-orange-600 m-2 rounded-lg my-5">
                        <h1 className="text-2xl py-2 font-bold">{item?.name}</h1>
                        <p>{item?.details}</p>
                    </article>
                </>)
            }
        </div>
    );
};

export default ServiceCard;