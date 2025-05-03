import Link from "next/link";
import React from "react";

const register = () => {
  return (
    <div>
      <h1>Register Pages</h1>
      <p>
        Sudah punya akun? <Link href={"/auth/login"}>Login</Link>{" "}
      </p>
    </div>
  );
};

export default register;
