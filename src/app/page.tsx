import { productData } from "@/lib/data";
import Header from "./components/header";
import Product from "./components/product";

export default function Home() {
  return (
    <div>
      <Header />
      <Product {...productData[0]} />
    </div>
  );
}
