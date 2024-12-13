

const ProductPage = async (query) => {
    const receivedParam = await query.params;
    const response = await fetch(`https://fakestoreapi.com/products/${receivedParam.id}/`);
    const data = await response.json();
    console.log(receivedParam.id);
    return(
        <>
            <h1>Products by ID</h1>
            {data.category===receivedParam.category ? (
                <h3>{data.title}</h3>
            ) : (
                <h2>Product {data.id} is not in {receivedParam.category}</h2>
            )}
        </>
    )
}



export default ProductPage;
