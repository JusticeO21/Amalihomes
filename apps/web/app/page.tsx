import { Footer } from "features/footer";
import { Header } from "features/header";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="text-h1 flex-1"></div>
      <Footer />
    </main>
  );
}
