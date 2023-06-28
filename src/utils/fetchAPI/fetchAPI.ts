import { ProductsRoot } from "@/types"

const url = "https://dummyjson.com/products"

export async function fetchWrapper<T = unknown>(input:RequestInfo | URL, init?: RequestInit | undefined) {
    
    const req = await fetch(input, init)
    const result = req.json()
    return result as T
}


async function foo() {

    const data = await fetchWrapper<ProductsRoot>(url, {method: "GET"}) 

    console.log(data.total)
}

foo()
console.log()