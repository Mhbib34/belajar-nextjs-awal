import { useRouter } from "next/router";
import Navbar from "../Navbar/index";

const disabledNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <main>
      {!disabledNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
