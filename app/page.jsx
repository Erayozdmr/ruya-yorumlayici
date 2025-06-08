import About from "@/components/About";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <div className="px-6 py-4">
      <section className="min-h-screen w-full">
        <HomePage />
      </section>

      <section className=" w-full">
        <About />
      </section>
    </div>
  );
}
