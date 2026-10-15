
const STORAGE_KEY = "clothSwapListings";

// Get all saved clothing items
export function getListings() {
  try {
    const listings = localStorage.getItem(STORAGE_KEY);
    return listings ? JSON.parse(listings) : [];
  } catch (error) {
    console.error("Error loading clothing listings:", error);
    return [];
  }
}

// Save a new clothing item
export function saveListing(listing) {
  const listings = getListings();

  const newListing = {
    ...listing,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  };

  const updatedListings = [...listings, newListing];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedListings)
  );

  return newListing;
}

// Delete a clothing item by ID
export function deleteListing(id) {
  const listings = getListings();

  const updatedListings = listings.filter(
    (item) => String(item.id) !== String(id)
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedListings)
  );

  return updatedListings;
}

