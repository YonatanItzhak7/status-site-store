const oredersApi = "http://localhost:5050/Order";

export const getOrders = async () => {
    try {
        const resop= await fetch(oredersApi)

        const oreders=await resop.json()
        return oreders
        
    }
    catch (err) {
        throw err;
    }
}