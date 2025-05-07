import ProductView from "@/views/products/Main";

const server = ({ products }) => {
  return (
    <div>
      <ProductView product={products} />
    </div>
  );
};

export default server;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
