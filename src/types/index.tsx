import { JsxElement } from "typescript";

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
};
  
export type ProductsRoot = {
    products: Product[]
    total: number
    skip: number
    limit: number
};
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
    maidenName: string
    age: number
    gender: string
    email: string
    alternativeEmail: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    domain: string
    ip: string
    address: Address
    macAddress: string
    ein: string
    ssn: string
    userAgent: string
  }
  
  export interface Address {
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
  
  export interface Company {
    address: Address2
    department: string
    name: string
    title: string
  }
  
  export interface Address2 {
    country: string
    address: string
    city: string
    coordinates: Coordinates2
    postalCode: string
    state: string
  }
  
  export interface Coordinates2 {
    lat: number
    lng: number
  }
                