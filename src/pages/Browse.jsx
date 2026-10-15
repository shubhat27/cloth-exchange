import React, { useEffect, useState } from "react";
import { getListings } from "../utils/storage";
import "./Browse.css";

const sampleClothes = [
  {
    id: "sample-1",
    name: "Classic Denim Jacket",
    category: "Jackets",
    size: "M",
    condition: "Excellent",
    location: "Bangalore",
    description: "A stylish denim jacket for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "sample-2",
    name: "Floral Summer Dress",
    category: "Dresses",
    size: "S",
    condition: "Like New",
    location: "Mysore",
    description: "A beautiful floral dress for casual outings.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "sample-3",
    name: "Casual White Shirt",
    category: "Shirts",
    size: "L",
    condition: "Good",
    location: "Tumkur",
    description: "A versatile white shirt for everyday use.",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "sample-4",
    name: "Blue Denim Jeans",
    category: "Jeans",
    size: "M",
    condition: "Excellent",
    location: "Bangalore",
    description: "Classic blue jeans in excellent condition.",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "sample-5",
    name: "Everyday T-Shirt",
    category: "T-Shirts",
    size: "M",
    condition: "Like New",
    location: "Mysore",
    description: "A comfortable T-shirt for daily wear.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "sample-6",
    name: "Stylish Sneakers",
    category: "Shoes",
    size: "L",
    condition: "Good",
    location: "Tumkur",
    description: "Casual sneakers for everyday use.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
];

function Browse() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [savedClothes, setSavedClothes] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setSavedClothes(getListings());
  }, []);

  const allClothes = [
    ...savedClothes.map((item) => ({
      ...item,
      image:
        item.image ||
        "https://placehold.co/600x750/f3f4f6/374151?text=Clothing+Item",
    })),
    ...sampleClothes,
  ];

  const categories = [
    "All",
    "T-Shirts",
    "Shirts",
    "Dresses",
    "Jeans",
    "Jackets",
    "Shoes",
    "Accessories",
  ];

  const filteredClothes = allClothes.filter((item) => {
    const searchText = [
      item.name,
      item.category,
      item.location,
      item.description,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchText.includes(
      searchTerm.toLowerCase()
    );

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSwapRequest = (item) => {
    setSelectedItem(item);
  };

  const closeSwapRequest = () => {
    setSelectedItem(null);
  };

  const submitSwapRequest = () => {
    if (!selectedItem) return;

    try {
      const existingRequests = JSON.parse(
        localStorage.getItem("clothSwapRequests") || "[]"
      );

      existingRequests.push({
        id: Date.now(),
        itemId: selectedItem.id,
        itemName: selectedItem.name,
        requestedAt: new Date().toISOString(),
        status: "Pending",
      });

      localStorage.setItem(
        "clothSwapRequests",
        JSON.stringify(existingRequests)
      );

      alert("Your swap request has been saved!");
      closeSwapRequest();
    } catch (error) {
      console.error("Unable to save swap request:", error);
      alert("Unable to save your request. Please try again.");
    }
  };

  return (
    <main className="browse-page">
      <section className="browse-header">
        <p className="browse-eyebrow">SUSTAINABLE FASHION</p>

        <h1>Discover Your Next Favourite</h1>

        <p>
          Explore pre-loved clothes, discover your style, and give
          fashion a second life.
        </p>

        <input
          type="search"
          className="browse-search"
          placeholder="Search clothes, categories or locations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search clothing listings"
        />
      </section>

      <section className="browse-content">
        <div className="browse-section-heading">
          <div>
            <h2>Explore Clothes</h2>
            <p>
              {filteredClothes.length}{" "}
              {filteredClothes.length === 1 ? "item" : "items"} available
            </p>
          </div>
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                selectedCategory === category
                  ? "category-button active"
                  : "category-button"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredClothes.length > 0 ? (
          <div className="clothing-grid">
            {filteredClothes.map((item) => (
              <article className="clothing-card" key={item.id}>
                <div className="clothing-image-wrapper">
                  <img
                    className="clothing-image"
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/600x750/f3f4f6/374151?text=Clothing+Item";
                    }}
                  />

                  <span className="condition-badge">
                    {item.condition || "Pre-loved"}
                  </span>
                </div>

                <div className="clothing-card-body">
                  <span className="clothing-category">
                    {item.category}
                  </span>

                  <h3>{item.name}</h3>

                  <div className="clothing-details">
                    <span>Size: {item.size || "Not specified"}</span>
                    <span>
                      {item.location || "Location not specified"}
                    </span>
                  </div>

                  <p className="clothing-description">
                    {item.description || "Ready for a new home."}
                  </p>

                  <button
                    type="button"
                    className="swap-button"
                    onClick={() => handleSwapRequest(item)}
                  >
                    Request Swap
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-clothes">
            <h3>No clothes found</h3>
            <p>
              Try a different search term or select another category.
            </p>

            <button
              type="button"
              className="swap-button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {selectedItem && (
        <div
          className="swap-modal-overlay"
          onClick={closeSwapRequest}
        >
          <section
            className="swap-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="swap-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeSwapRequest}
              aria-label="Close dialog"
            >
              ×
            </button>

            <p className="browse-eyebrow">CLOTHING EXCHANGE</p>

            <h2 id="swap-modal-title">Request a Swap</h2>

            <p>
              Would you like to request a swap for{" "}
              <strong>{selectedItem.name}</strong>?
            </p>

            <p className="swap-modal-note">
              Your request will be saved locally as pending. The
              clothing owner will not receive a notification yet.
            </p>

            <div className="swap-modal-actions">
              <button
                type="button"
                className="cancel-button"
                onClick={closeSwapRequest}
              >
                Cancel
              </button>

              <button
                type="button"
                className="swap-button"
                onClick={submitSwapRequest}
              >
                Confirm Request
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default Browse;

