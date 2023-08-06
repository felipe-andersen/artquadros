"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
import theme from "@/theme";
import GlobalStyle from "./libs/styledComponents/ThemeConfig";
import myTheme from "./libs/styledComponents/myTheme";


export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined")
    return <ThemeWrapper>{children}</ThemeWrapper>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </StyleSheetManager>
  );
}

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
