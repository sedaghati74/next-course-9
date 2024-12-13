const ProductByName = async (query) => {
    const receivedParam = await query.params;
    const response = await fetch(`https://fakestoreapi.com/products/${receivedParam.id}/`);
    const data = await response.json();
    const fixedDataName = receivedParam.name.replaceAll('%20', ' ').replaceAll('%E2%80%93', '–');
    console.log(fixedDataName);
    console.log(data.title);
    return(
        <>
            <h1>Products by Name</h1>
            {data.title===fixedDataName && data.category===receivedParam.category ? (
                <h3>{data.title}</h3>
            ) : (
                <h2>{fixedDataName} is not match with {receivedParam.id} ID or {receivedParam.category} category</h2>
            )}
        </>
    )
}

export default ProductByName;