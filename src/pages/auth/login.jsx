import Link from "next/link";
import { useRouter } from "next/router";

const login = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/about");
  };
  return (
    <div>
      <h1>Login Pages</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p>
        Belum punya akun? <Link href={"/auth/register"}>Register</Link>{" "}
      </p>
    </div>
  );
};

export default login;
