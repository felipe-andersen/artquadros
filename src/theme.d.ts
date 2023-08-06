import { DefaultTheme } from "styled-components";
import MyThemeProtocol from "./libs/styledComponents/MyThemeProtocol";



declare module "styled-components" {
  
  export interface DefaultTheme extends MyThemeProtocol {}
  
}