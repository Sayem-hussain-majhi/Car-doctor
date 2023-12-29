import HeadingText from "../../../Shared/HeadingText";
import TeamInfo from "./OurTeamInfo";

const OurTeam = () => {


    return (
        <main>
            <HeadingText subHeading={'Team'} heading={'Meet Our Team'} description={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}/>

            <div className="lg:flex lg:justify-evenly 3xl:flex-col space-y-4 gap-6">
                {
                    TeamInfo?.map(team => <>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={team?.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{team?.name}</h2>
                                <p>{team?.role}</p>
                                <div className="card-actions">

                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </main>
    );
};

export default OurTeam;