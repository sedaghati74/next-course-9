
const CategoryPage = async (query) =>{
    const receivedParam = await query.params;
    const response = await fetch(`https://fakestoreapi.com/products/category/${receivedParam.category}/`);
    const data = await response.json();
    console.log(receivedParam.category);
    return(
        <>
            <h1>Category</h1>
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

export default CategoryPage;