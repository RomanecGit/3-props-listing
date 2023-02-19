import PropTypes from 'prop-types';

function ListItem({item}) {
    const maxTextLength = 50; //максимальное количество выводимых в названии символов.
    // Если символов больше - обрезается и ставится многоточие

    //для вывода остатков товаров разным цветом в зависимости от количества
    const low = 10;
    const medium = 20;

    let price = "";
    let quantityClass = "";

    switch (item.currency_code) {
        case "USD":
            price = "$" + item.price;
            break;
        case "EUR":
            price = "€" + item.price;
            break;
        default:
            price = item.price + " " + item.currency_code;
    }
    if (item.quantity <= low)
        quantityClass = "low";
    else if (item.quantity <= medium)
        quantityClass = "medium";
    else
        quantityClass = "high";

    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">
                    {(item.title.length>50 ? item.title.slice(0,maxTextLength) + "…" : item.title)}
                </p>
                <p className="item-price">{price}</p>
                <p className={"item-quantity level-" + quantityClass}>{item.quantity} left</p>
            </div>
        </div>
    );
}

export default ListItem;

ListItem.propTypes = {
    item: PropTypes.shape(
        {
            listing_id: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            MainImage: PropTypes.shape({
                url_570xN: PropTypes.string.isRequired,
            }).isRequired,
            title: PropTypes.string.isRequired,
            currency_code: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
        }
    )
}
