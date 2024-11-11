import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto text-center">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
