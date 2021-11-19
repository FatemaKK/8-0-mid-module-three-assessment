const Products = (props) => {
    const {name, price, img, description} = props.product;
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    
        return (
            <>
            <div className='products'>
            <div className='container'>
              <h3>{name}</h3>
              <p>Price: {formatter.format(price)}</p>  
              <button type='submit'>Add To Cart</button>
              <img className='product-image' src={img} alt='{name} image'/> 
              <p>{description}</p>
            </div>
            </div>
            </>
        )
}

    

export default Products;
