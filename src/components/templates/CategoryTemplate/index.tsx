import SchemaComponent from "@/types/SchemaComponent";
import { Div } from "./styles";
import HeaderComponent from "../HomeTemplate/HeaderComponent";
import { MainComponent } from "./MainComponent";
import { FooterComponent } from "../HomeTemplate/FooterComponent";

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
