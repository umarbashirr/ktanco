import "../styles/globals.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./Navbar/Navbar";
import TopBar from "./TopBar/TopBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="overflow-x-hidden">
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
