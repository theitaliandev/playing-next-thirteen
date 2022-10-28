export default async function getProduct(productId) {
    try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`)
        return res.json()
    } catch (error) {
        console.log(error)
        return
    }
}