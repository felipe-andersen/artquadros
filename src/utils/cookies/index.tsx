import { cookies } from "next/dist/client/components/headers";
import { CookieListItem, ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";


type Cookie = { 
    name: string,
    value: string,
    domain: string,
    path: string,
    maxAge:undefined,
    expires:  Date,
    httpOnly:  boolean,
    secure: boolean,
    sameSite: string,
    priority: string,
    partitioned: undefined
}

async function SetCookies() {

    // cookies().set({
    //     expires: new Date('2023-10-05'),
    //     name: 'TokenAuth',
    //     value: '565266898989898965',
    //     httpOnly: true,
    //     path: '/',
    //     secure: true
      
    // })

    const TokenAuth_Cookie = { 
        name: 'TokenAuth',
        value: '565266898989898965',
        domain: '',
        path: '/',
        maxAge:undefined,
        expires: new Date('2023-10-05'),
        httpOnly:  true,
        secure: true,
        sameSite: "lax",
        priority: "medium",
        partitioned: undefined
    }
}