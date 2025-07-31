import { Container } from "../container";
import { Logo } from "../logo";
import { HeaderRight } from "./header-right";
import { MobileSidebar } from "./mobile-sidebar";
import NavLinks from "./nav-links";

export const Header = () => {
  return (
    <header className="h-header bg-secondary sticky top-0 z-50 border-b">
      <Container className="flex h-full items-center justify-between text-white">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <MobileSidebar />
            <Logo />
          </div>
          <NavLinks />
        </div>
        <HeaderRight />
      </Container>
    </header>
  );
};
