import { Link, useParams } from "react-router-dom";

function ItemDetails() {

  const { id } = useParams();

  const item = {
    id: id,
    name: "Floral Summer Dress",
    category: "Dresses",
    brand: "Zara",
    size: "M",
    condition: "Like New",
    location: "Bangalore",
    value: 1200,
    color: "Floral / White",
    material: "Cotton",
    description:
      "Beautiful floral summer dress in excellent condition. Worn only a few times and carefully maintained. Perfect for casual outings, vacations and summer occasions.",
    owner: "Ananya",
    ownerRating: "4.8",
    emoji: "👗"
  };

  return (
    <div className="item-details-page">

      {/* BACK BUTTON */}

      <Link
        to="/listings"
        className="back-link"
      >
        ← Back to Browse Clothes
      </Link>


      {/* PRODUCT SECTION */}

      <section className="item-details">

        {/* IMAGE */}

        <div className="item-image">

          <span>
            {item.emoji}
          </span>

        </div>


        {/* INFORMATION */}

        <div className="item-info">

          <p className="item-category">
            {item.category}
          </p>

          <h1>
            {item.name}
          </h1>

          <p className="item-description">
            {item.description}
          </p>


          {/* DETAILS */}

          <div className="item-specifications">

            <div>
              <span>Brand</span>
              <strong>{item.brand}</strong>
            </div>

            <div>
              <span>Size</span>
              <strong>{item.size}</strong>
            </div>

            <div>
              <span>Condition</span>
              <strong>{item.condition}</strong>
            </div>

            <div>
              <span>Color</span>
              <strong>{item.color}</strong>
            </div>

            <div>
              <span>Material</span>
              <strong>{item.material}</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>📍 {item.location}</strong>
            </div>

          </div>


          {/* VALUE */}

          <div className="swap-value">

            <span>
              Estimated Swap Value
            </span>

            <strong>
              ₹{item.value}
            </strong>

          </div>


          {/* OWNER */}

          <div className="owner-card">

            <div className="owner-avatar">
              {item.owner.charAt(0)}
            </div>

            <div>

              <span>
                Listed by
              </span>

              <strong>
                {item.owner}
              </strong>

              <small>
                ⭐ {item.ownerRating} rating
              </small>

            </div>

          </div>


          {/* ACTION */}

          <Link
            to={`/swap-request/${item.id}`}
            className="request-swap-btn"
          >
            Request Swap →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default ItemDetails;