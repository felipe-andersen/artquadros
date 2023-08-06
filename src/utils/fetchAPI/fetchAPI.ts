import { ProductsRoot } from "@/@types"


export async function fetchAPI<T = unknown>(input:RequestInfo | URL, init?: RequestInit | undefined) {
    
    const req = await fetch(input, init)
    const result = req.json()
    return result as T
}
