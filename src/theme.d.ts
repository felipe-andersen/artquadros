import { DefaultTheme } from "styled-components";
import MyThemeProtocol from "@/packagesConfig/MyThemeProtocol";


declare module "styled-components" {
  
  export interface DefaultTheme extends MyThemeProtocol {}
  
}