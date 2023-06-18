
import SchemaComponent from "@/types/SchemaComponent";
import Div from "../styles";
import LangConfig from "@/utils/langConfig";

function MainComponent(props: SchemaComponent) {

    const {lang} = props;

    const items = [1, 2, 3, 4, 5];

    return (

        <main>

            <Div>

                <section className="flexbox">

                    {

                        items.map((i) => {
                            return (

                                <div>

                                    <button>favoritos {}</button>
            
                                    <a href={lang}>
            
                                        <span>promoção</span>
            
                                        <picture>
            
                                            <img/>
            
                                        </picture>
            
                                        <span>código</span>
            
                                        <span>R$</span>   <span>179,90</span> <span>cada</span>
            
                                    </a>
                                            
                                </div>
                            )
                       })
                    
                    }

                </section>

            </Div>
            
        </main>
    )
};

export default MainComponent