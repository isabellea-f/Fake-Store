async function getProduct() {
  const url = "https://fakestoreapi.com/products/";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`error: ${response.status}`);
    }

    const result = await response.json();
    /*  console.log(result[0]); */

    // Loop through all items

    const productContainer = document.querySelector(".product-container");

    result.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productContainer.appendChild(productCard);

      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.title;

      const productTitle = document.createElement("h3");
      productTitle.textContent = `${product.title}`;

      const productDescription = document.createElement("p");
      productDescription.textContent = `${product.description}`;

      const productPrice = document.createElement("p");
      productPrice.textContent = `${product.price}`;

      productCard.appendChild(productImage);
      productCard.appendChild(productTitle);
      productCard.appendChild(productDescription);
      productCard.appendChild(productPrice);
    });
  } catch (error) {
    console.error(error.message);
  }
}

getProduct();
