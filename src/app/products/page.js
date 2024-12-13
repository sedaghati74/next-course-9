

const ProductsPage = async () =>{
    const response = await fetch('https://fakestoreapi.com/products/');
    const data = await response.json();
    return(
        <>
            <h1>Products</h1>
            {data.map((item) => {
                return(
                    <>
                        <h3>{item.title}</h3>
                    </>
                )
            })}
        </>
    )
}

export default ProductsPage;