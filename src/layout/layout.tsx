import React, { PropsWithChildren } from "react";
import { LayoutContainerStyled } from "./layout.styles";

interface ILayoutProps {
  isLoading?: boolean;
  ProfileContent: React.ReactNode;
  NotificationsContent: React.ReactNode;
}

const Layout: React.FC<PropsWithChildren<ILayoutProps>> = ({ children }) => {
  return (
    <LayoutContainerStyled>
        <main>{children}</main>
    </LayoutContainerStyled>
  );
};

export default Layout;
