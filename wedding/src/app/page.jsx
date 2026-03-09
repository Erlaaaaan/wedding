import Header from "./components/header";
import Hero from "./components/hero";
import EnvelopeGate from "./components/EnvelopeGate";

export default function HomePage() {
  return (
    <EnvelopeGate>
      <Header />
      <main className="font-sans">
        <Hero />
      </main>
    </EnvelopeGate>
  );
}

