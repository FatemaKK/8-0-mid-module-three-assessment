const Products = (props) => {
  const { name, price, img, description } = props.product;
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  return (
    <>
      <div className="products">
        <div className="container">
          <h3>{name}</h3>
          <p>Price: {formatter.format(price)}</p>
          <button onClick={props.addToCart} type="submit">Add To Cart</button>
          <br />
          <p>
            <img className="product-image" src={img} alt="{name} image" />
          </p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Products;
