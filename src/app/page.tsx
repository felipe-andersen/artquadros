import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import HomeTemplate from '@/components/templates/HomeTemplate'
import {FooterComponent} from '@/components/templates/HomeTemplate/FooterComponent'
import HeaderComponent from '@/components/templates/HomeTemplate/HeaderComponent'
import MainComponent from '@/components/templates/HomeTemplate/MainComponent'
import Image from 'next/image'
import LogInSignInModal from '@/components/organisms/LogInSignInModal'




export default async function Home() {
    return (
        <LogInSignInModal/>
    )
}
