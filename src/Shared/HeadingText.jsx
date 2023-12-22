import PropTypes from 'prop-types';

const HeadingText = ({heading, subHeading, description}) => {
    return (
        <div className='text-center space-y-5 mt-32 mb-16 lg:w-1/2 mx-auto'>
            <h4 className="text-[#FF3811] font-bold">{subHeading}</h4>
            <h1 className="text-5xl font-bold">{heading}</h1>
            <p>{description}</p>
        </div>
    );
};

HeadingText.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    description: PropTypes.string,
};

export default HeadingText;