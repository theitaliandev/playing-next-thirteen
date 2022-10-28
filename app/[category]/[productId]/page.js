import Image from "next/image"
import getProduct from "../../../lib/getProduct"

export default async function ProductPage({params}) {
    const product = await getProduct(params.productId)
    return(
            <div className="flex flex-col items-center justify-center gap-10">
                <Image style={{width: "auto", height: "auto"}} src={product.thumbnail} priority width={300} height={300} alt={product.title} />
                <p>{product.tile}</p>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p>Rating: {product.rating}</p>
            </div>
    )
}