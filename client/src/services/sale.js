const salesApi = "http://localhost:5050/Sale";

export const getSales = async () => {
    try {
        return await fetch(salesApi)
            .then(res => res.json())
            .then(result => console.log(result))
    }
    catch (error) {
        throw error;
    }
}