type Product = {
    id: number
    title: string
    description: string
    price: number
    thumbnail: string
}
type ProductData = {
    limit: number
    products: Product[]
    skip: number
    total: number
}

let products = fetch('https://dummyjson.com/products?limit=10&select=id,title,description,thumbnail')
    .then(response => response.json())
    
export const load = (async () => {
    return await products as ProductData
})