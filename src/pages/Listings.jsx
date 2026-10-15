
import React, { useState } from "react";
import "./ListItem.css";
import { saveListing } from "../utils/storage";

function ListItem() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    size: "",
    condition: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      saveListing(formData);
      alert("Your clothing item has been listed successfully!");

      setFormData({
        name: "",
        category: "",
        size: "",
        condition: "",
        location: "",
        description: "",
      });
    } catch (error) {
      console.error("Unable to save listing:", error);
      alert("Unable to save your listing. Please try again.");
    }
  };

  return (
    <div className="list-page">
      <div className="list-container">
        <h1>List Your Clothing</h1>

        <p className="list-subtitle">
          Give your clothes a second life by listing them for a swap.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Clothing Name</label>
          <input
            type="text"
            name="name"
            placeholder="Example: Denim Jacket"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select category</option>
            <option value="T-Shirts">T-Shirts</option>
            <option value="Shirts">Shirts</option>
            <option value="Dresses">Dresses</option>
            <option value="Jeans">Jeans</option>
            <option value="Jackets">Jackets</option>
            <option value="Shoes">Shoes</option>
            <option value="Accessories">Accessories</option>
          </select>

          <label>Size</label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          >
            <option value="">Select size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>

          <label>Condition</label>
          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
          >
            <option value="">Select condition</option>
            <option value="Like New">Like New</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>

          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Example: Bangalore"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <label>Description</label>
          <textarea
            name="description"
            placeholder="Describe your clothing item..."
            value={formData.description}
            onChange={handleChange}
            rows={5}
            required
          />

          <button type="submit">List Item</button>
        </form>
      </div>
    </div>
  );
}

export default ListItem;