import LangTypes from "@/utils/langConfig";

export type CategoryList =  Category[]

export type Category = {
    name: string 
    pic: any;
    lang: string
    alt: string
}


// mais vendidos
// Oferta
// Lançamentos
// Com desconto
// Em promoção

const category: CategoryList = [
    { 
        name: "Mais vendidos",
        pic: "any",
        lang: "string",
        alt: "string"
    },
    { 
        name: "Oferta",
        pic: "any",
        lang: "string",
        alt: "string"
    },
    { 
        name: "Lançamentos",
        pic: "any",
        lang: "string",
        alt: "string"
    },
    { 
        name: "Com descontos",
        pic: "any",
        lang: "string",
        alt: "string"
    },
    { 
        name: "Em promoção",
        pic: "any",
        lang: "string",
        alt: "string"
    }
]