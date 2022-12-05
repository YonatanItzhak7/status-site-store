const productsApi = "http://localhost:5050/Product";


export const getProducts = async () => {
    try {
        const resop= await fetch(productsApi)

        const products=await resop.json()
        return products     
    }
    catch (error) {
        throw error
    }
}
