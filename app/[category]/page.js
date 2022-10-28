import Image from "next/image"
import Link from "next/link"
import getCategories from "../../lib/getCategories"
import getProducts from "../../lib/getProducts"


export default async function CategoryPage({params}) {
    const {products} = await getProducts(params.category)

    return(

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-2 space-y-10">
       {products.map((product, index) => {
        return (
        <Link href={`${params.category}/${product.id}`} key={product.id} className="flex flex-col justify-center items-center gap-2">
            <div className="w-60 h-60 relative object-contain">
                <Image priority={index === 0 ? true : false} src={product.images[0]} fill sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" alt={product.title}/>
            </div>
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
        </Link>)
       })}
    </div>
    )
}

export async function generateStaticParams() {
    const data = await getCategories()
    const categories = data.slice(0,4)
    return categories.map(category => ({
        category: category
    }))
}