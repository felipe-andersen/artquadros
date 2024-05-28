export type Product = {
        id: string,
        title: string,
        description: string, 
        price: string, 
        discountPercentage: number,
        rating: number,
        stock: number,
        brand: string,
        category: Array<string>,
        thumbnail: string,
        images: Array<any>
}