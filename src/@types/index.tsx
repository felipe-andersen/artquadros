import { JsxElement } from "typescript"

export type SchemaComponent = {
    lang?: string;
    content?: Object;
    setContent?: Object;
    component?: () => JsxElement
    childreen?: SchemaComponent[]
}

export type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    // rating: number,
    stock: any,
    brand: string,
    category: string,
    thumbnail: string,
    images: Array<any>
}
  
export type ProductsRoot = {
    products: Product[]
    total: number
    skip: number
    limit: number
}

export interface Root {
    users: User[]
    total: number
    skip: number
    limit: number
  }

export interface User {
    id: number
    firstName: string
    lastName: string
    middleName: string
    age: number
    gender: string
    email: string
    alternativeEmail: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    ip: string
    address: Address
    ein: string
    ssn: string
    userAgent: string
  }

export interface Company {
    id: string
    address: Address
    department: string
    name: string
    title: string
}

export interface Address {
    id: string
    country: string
    address: string
    city: string
    coordinates: Coordinates
    postalCode: string
    state: string
}

export interface Coordinates {
    lat: number
    lng: number
}
                