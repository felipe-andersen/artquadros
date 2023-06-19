import { FooterComponent } from "@/libs/components/templates/HomeTemplate/FooterComponent";
import Div from "./styles";
import MainComponent from "./MainComponent";
import HeaderComponent from "../HomeTemplate/HeaderComponent";


export default function ProductsTemplate() {
    return (

        <Div>

            <HeaderComponent/>

            <MainComponent/>

            <FooterComponent/>
     
        </Div>
    )
}