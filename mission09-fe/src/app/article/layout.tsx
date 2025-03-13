import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl w-full p-4 md:p-6 flex flex-col mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}
