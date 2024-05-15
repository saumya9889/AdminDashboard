// export const getRevenue = ()=>{
//     fetch('https://dummyjson.com/carts')
// .then(res => res.json())
// .then(console.log);

// }
export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch orders");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching orders:", error);
      return { products: [] }; // Return an empty array or handle error accordingly
    });
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch revenue");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching orders:", error);
      return { products: [] }; // Return an empty array or handle error accordingly
    });
};
export const getProducts = () => {
  return fetch("https://dummyjson.com/products")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch revenue");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching orders:", error);
      return { products: [] }; // Return an empty array or handle error accordingly
    });
};
export const getCustomer = () => {
  return fetch("https://dummyjson.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch revenue");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching orders:", error);
      return { products: [] }; // Return an empty array or handle error accordingly
    });
};

