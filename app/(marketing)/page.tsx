import Footer from "./_components/Footer";
import Heading from "./_components/Heading";
import Heroes from "./_components/Heroes";

export default function Home() {
  return (
    <main className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 p-10">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </main>
  );
}
