import { useParams, Link } from "react-router-dom";

function SwapRequest() {

  const { id } = useParams();

  const targetItem = {
    id: id,
    name: "Floral Summer Dress",
    category: "Dresses",
    size: "M",
    condition: "Like New",
    location: "Bangalore",
    value: 1200,
    emoji: "👗",
    owner: "Ananya"
  };

  const myClothes = [
    {
      id: 101,
      name: "White Casual Top",
      category: "Tops",
      size: "S",
      condition: "Like New",
      value: 700,
      emoji: "👕"
    },
    {
      id: 102,
      name: "Blue Denim Jeans",
      category: "Jeans",
      size: "30",
      condition: "Excellent",
      value: 1000,
      emoji: "👖"
    },
    {
      id: 103,
      name: "Black Jacket",
      category: "Jackets",
      size: "M",
      condition: "Good",
      value: 1300,
      emoji: "🧥"
    }
  ];

  return (
    <div className="swap-request-page">

      {/* HEADER */}

      <div className="swap-request-header">

        <Link
          to={`/item/${id}`}
          className="back-link"
        >
          ← Back to Item
        </Link>

        <p className="page-tag">
          CLOTHING EXCHANGE
        </p>

        <h1>
          Request a Swap
        </h1>

        <p>
          Choose one of your clothes to offer in exchange
          for this item.
        </p>

      </div>


      {/* TARGET ITEM */}

      <section className="target-item">

        <div className="target-image">
          {targetItem.emoji}
        </div>

        <div>

          <span>
            YOU WANT
          </span>

          <h2>
            {targetItem.name}
          </h2>

          <p>
            {targetItem.category} • Size {targetItem.size}
          </p>

          <p>
            Condition: {targetItem.condition}
          </p>

          <strong>
            Estimated Value: ₹{targetItem.value}
          </strong>

        </div>

      </section>


      {/* MY CLOTHES */}

      <section className="offer-section">

        <div className="section-heading">

          <h2>
            Choose Your Clothing
          </h2>

          <p>
            Select the item you want to offer.
          </p>

        </div>


        <div className="offer-grid">

          {myClothes.map((item) => (

            <div
              className="offer-card"
              key={item.id}
            >

              <div className="offer-image">
                {item.emoji}
              </div>

              <div className="offer-info">

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.category} • Size {item.size}
                </p>

                <span>
                  {item.condition}
                </span>

                <strong>
                  ₹{item.value}
                </strong>

                <button>
                  Select This Item
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* MESSAGE */}

      <section className="swap-message">

        <h2>
          Add a Message
        </h2>

        <p>
          Introduce yourself and explain why you would
          like to make this swap.
        </p>

        <textarea
          placeholder="Hi! I really like your dress. I would love to exchange it with my..."
          rows="5"
        />

        <button className="send-swap-btn">
          Send Swap Request →
        </button>

      </section>

    </div>
  );
}

export default SwapRequest;