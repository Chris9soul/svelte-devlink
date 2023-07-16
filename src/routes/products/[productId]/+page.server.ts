import type { PageServerLoad } from './$types'
type Product = {
    id: number
    title: string
    description: string
    price: number
    thumbnail: string
    images: string[]
}

export const load = (async ({ params }) => {
    let product = fetch(`https://dummyjson.com/products/${params.productId}?select=id,title,description,thumbnail,images`)
    .then(response => response.json())

    return await product as Product

}) satisfies PageServerLoad;