import { JsxElement } from "typescript";

type SchemaComponent = {
    lang?: string;
    content?: Object;
    setContent?: Object;
    component?: () => JsxElement
    childreen?: SchemaComponent[]
};

export default SchemaComponent