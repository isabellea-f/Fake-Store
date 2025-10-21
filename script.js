async function getProduct() {
  const url = "https://fakestoreapi.com/products/";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`error: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);

    //mens clothing, jewelry, electronics, women's clothing

    const productContainer = document.querySelector(".product-container");
    const menFilterButton = document.getElementById("button-men");
    const womenFilterButton = document.getElementById("button-women");

    // Loop through all items
    result.forEach((product) => {
      function showProduct() {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productContainer.appendChild(productCard);

        const productImage = document.createElement("img");
        productImage.classList.add("product-image");
        productImage.src = product.image;
        productImage.alt = product.title;

        const productTitle = document.createElement("h3");
        productTitle.classList.add("product-description");
        productTitle.textContent = `${product.title}`;

        const productDescription = document.createElement("p");
        productDescription.textContent = `${product.description}`;

        const productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = `${product.price}`;

        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productDescription);
        productCard.appendChild(productPrice);
      }

      menFilterButton.addEventListener("click", () => {
        if (product.category === "men's clothing") {
          showProduct();
        }
      });

      womenFilterButton.addEventListener("click", () => {
        if (product.category === "women's clothing") {
          productContainer.innerHTML = "";
          showProduct();
        }
      });
      /* 
      if (product.category === "men's clothing") {
        showProduct();
      } else if (product.category === "women's clothing") {
        showProduct();
      } */
    });
  } catch (error) {
    console.error(error.message);
  }
}

getProduct();
