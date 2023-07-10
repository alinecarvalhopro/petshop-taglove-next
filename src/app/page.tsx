import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import { Showcase } from "./components/Showcase/Showcase";

export default function Home() {
  return (
    <main>
      <Cart />
      <Header />
      <Showcase />
    </main>
  );
}
