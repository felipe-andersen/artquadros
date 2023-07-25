import Div from "./styles";


export default async function CategoryComponent() {

    return (
        
        <Div>

            <main>

                <div>
                    galery
                </div>

                <div>
                    <h1>{"product.name"}</h1>
                </div>

                <div>
                    {"product.description"}
                </div>

                <div className="priceWrapper pt-BR BRL" >
                    <span>{"product.price"}</span><span>{'product.discount'}</span>
                    <span>em até 10X sem juros no cartão</span>

                    <span>SKU {'SKU'}</span>
                </div>

                <div className="priceWrapper en-US US$" >
                     {"product.price"}
                </div>

            </main>

        </Div>
    )
}