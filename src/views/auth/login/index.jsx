import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.css";

const LoginView = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/about");
  };
  return (
    <div className={styles.login}>
      <h1>Login Pages</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p>
        Belum punya akun? <Link href={"/auth/register"}>Register</Link>
      </p>
    </div>
  );
};

export default LoginView;
