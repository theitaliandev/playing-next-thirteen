import Link from "next/link"
import getCategories from "./lib/getCategories"

export default async function Home() {
  const data = await getCategories()
  const categories = data.slice(0,4)
  return (
    <div className="py-40 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        {categories.map(category => <Link href={category} className="bg-red-100 border-2 border-red-600 py-20 px-10" key={category}>{category}</Link>)}
      </div>
    </div>
  )
}
