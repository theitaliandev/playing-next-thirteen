export default async function getProducts(category) {
    try {
        const res = await fetch(`https://dummyjson.com/products/category/${category}`)
        return res.json()
    } catch (error) {
        console.log(error)
        return
    }
}