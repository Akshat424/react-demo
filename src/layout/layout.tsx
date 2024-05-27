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
      <div className="main-content">
        <main className="main-inner">{children}</main>
      </div>
    </LayoutContainerStyled>
  );
};

export default Layout;
