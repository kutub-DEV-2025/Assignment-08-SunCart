import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SunCart",
  description: "Summer Essentials Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        <Navbar />

       
        <main className="min-h-screen max-w-6xl mx-auto px-4">
          {children}
        </main>

       
        <Footer />
      </body>
    </html>
  );
}