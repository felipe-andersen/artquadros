import Image from 'next/image'
import HeaderComponent from './HeaderComponent'
import MainComponent from './MainComponent'
import { url } from 'inspector'
import { Head } from 'next/document'
import {FooterComponent} from './FooterComponent'
import { Div } from './styles'
import { Fragment, Suspense, lazy } from 'react';
import HeadComponent from './HeadComponent';
import { ApolloProvider, useQuery } from '@apollo/client'
import { client } from '@/graphql/graphql'
import { lang } from '@/utils/langConfig'
import { Metadata } from 'next'
import CookiesComponent from '@/components/organisms/CookiesAlertComponent'
import ChatButtonOrganism from '@/components/organisms/ChatButtonComponent'
import LogInSignInModal from './LogInSignInModal'

 
export const metadata: Metadata = {
    title: 'Artquadros',
};

function delayForDemo(promise:any) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }

const MainComponent_ = lazy(() => delayForDemo(import('./MainComponent')));


interface ComponentProtocol<SchemaComponent> {
    content: Object;
};

export default async function HomeTemplate() {


    return (

        <Div>

            <HeadComponent/>

            <HeaderComponent lang='pt-BR'/>

            <Suspense fallback={<div>Loading</div>}>

                <MainComponent/>
             
            </Suspense>

            <FooterComponent lang='pt-BR'/>

            <LogInSignInModal/>

            <CookiesComponent/>

            <ChatButtonOrganism/>


     
        </Div>

    )
}