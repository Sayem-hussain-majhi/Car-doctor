import PropTypes from 'prop-types';

const DefaultBtn = ({ text, styles, event }) => {

    return (
        <div>
            <button onClick={event ?? ''} className={`${styles}  font-bold py-4 px-5 rounded duration-300`}>{text}</button>
        </div>
    );
};

DefaultBtn.propTypes = {
    text: PropTypes.string.isRequired,
    styles: PropTypes.number,
    event: PropTypes.bool.isRequired,
};
export default DefaultBtn;