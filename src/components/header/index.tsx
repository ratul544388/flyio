import { Container } from "../container";
import { Logo } from "../logo";
import { HeaderRight } from "./header-right";
import NavLinks from "./nav-links";

export const Header = () => {
  return (
    <header className="h-header sticky z-50 top-0 bg-secondary border-b">
      <Container className="h-full justify-between text-white flex items-center">
        <div className="flex items-center gap-8">
          <Logo />
          <NavLinks />
        </div>
        <HeaderRight />
      </Container>
    </header>
  );
};
