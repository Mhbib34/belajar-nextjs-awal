import Link from "next/link";
import styles from "./Register.module.css";
const RegisterView = () => {
  return (
    <div className={styles.register}>
      <h1>Register Pages</h1>
      <p>
        Sudah punya akun? <Link href={"/auth/login"}>Login</Link>{" "}
      </p>
    </div>
  );
};

export default RegisterView;
