'use client'
import { SchemaComponent } from "@/@types";
import { Div } from "./styles";
import { cookies } from "next/dist/client/components/headers";


export async function MainComponent(props:SchemaComponent) {
    
    const {lang } = props;


    async function serverAction() {
        'use server'

        cookies().set({
            name: 'name',
            value: 'lee',
            httpOnly: true,
            path: '/',
          })

    }

    return (
        <Div>

            <section className="grid">

            </section>
        
        </Div>
    )
}
