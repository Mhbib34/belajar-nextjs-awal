import { useRouter } from "next/router";

const detail = () => {
  const { query } = useRouter();
  console.log(query);

  return (
    <div>
      <h1>ini dynamic routing</h1>
      <span>product : {query.id}</span>
    </div>
  );
};

export default detail;
