async function getProduct() {
  const url = "https://fakestoreapi.com/products/";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`error: ${response.status}`);
    }

    const result = await response.json();
    console.log(result[0]);

    const productImage = document.querySelectorAll(".image");
    const title = document.querySelectorAll(".title");
    const productDesc = document.querySelectorAll(".description");
    const productPrice = document.querySelectorAll(".price");

    // Display item content
    productImage.forEach((element, index) => {
      element.src = `${result[index].image}`;
    });

    title.forEach((element, index) => {
      element.textContent = `${result[index].title}`;
    });

    productDesc.forEach((element, index) => {
      element.textContent = `${result[index].description}`;
    });

    productPrice.forEach((element, index) => {
      element.textContent = `${result[index].price}`;
    });
  } catch (error) {
    console.error(error.message);
  }
}

getProduct();
