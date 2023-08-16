import { lang } from "../langConfig"

type TLDT = 'com' | 'com.br'

export const TLD: TLDT = `com.br` 

const baseURL = `www.artquadros.${TLD}`

export default baseURL

/*
    /t./g  t e qualquer outro caractere
    /()/g  array

    /(i|I)/g  ou
    /(^et)/g menos ou negar

*/