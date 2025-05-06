import { fetcher } from "@/utils/swr/fetcher";
import ProductView from "@/views/products/Main";
import useSWR from "swr";

const index = () => {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
  console.log(data);

  return (
    <div>
      <ProductView product={isLoading ? [] : data.data} />
    </div>
  );
};

export default index;
