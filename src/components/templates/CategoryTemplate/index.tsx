
import { Div } from "./styles";
import HeaderComponent from "../HomeTemplate/HeaderComponent";
import { MainComponent } from "./MainComponent";
import { FooterComponent } from "../HomeTemplate/FooterComponent";
import { SchemaComponent } from "@/types";

export async function CategoryTemplate(props:SchemaComponent) {
    const { content } = props;

    return (
        <Div>

            <HeaderComponent/>

            <MainComponent/>

            <FooterComponent/>
        
        </Div>
    )
}
