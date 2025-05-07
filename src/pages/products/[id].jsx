import { fetcher } from "@/utils/swr/fetcher";
import DetailProducts from "@/views/DetailProducts";
import { useRouter } from "next/router";
import useSWR from "swr";

const detail = ({ product }) => {
  const { query } = useRouter();

  // const { data, error, isLoading } = useSWR(
  //   `/api/products/${query.id}`,
  //   fetcher
  // );

  return (
    <div>
      <h1>Detail Product</h1>
      {/* <DetailProducts item={isLoading ? [] : data.data} /> */}
      <DetailProducts item={product} />
    </div>
  );
};

export default detail;

export async function getServerSideProps({ params }) {
  const productId = params.id;
  const res = await fetch(`http://localhost:3000/api/products/${productId}`);
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
