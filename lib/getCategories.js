export default async function getCategories() {
    try {
      const res = await fetch('https://dummyjson.com/products/categories')
      return res.json()
    } catch (error) {
      console.log(error)
      return
    }
  }