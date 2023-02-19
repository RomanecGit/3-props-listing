import PropTypes from 'prop-types';
import ListItem from './ListItem';

function Listing({items}){
    return (
        <div className="item-list">
            {
                items.map((item, i) =>
                    <ListItem key={item.listing_id} item={item}/>
                )
            };
        </div>
    );
}

Listing.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
};

Listing.defaultProps = {
    items: [],
}

export default Listing;