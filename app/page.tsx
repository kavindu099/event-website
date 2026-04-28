import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import RSVPForm from "@/components/RSVPForm";
import GoogleMap from "@/components/GoogleMap";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EventDetails />
        <Schedule />
        <Gallery />
        <RSVPForm />
        <GoogleMap />
        <Contact />
      </main>
      <footer className="bg-[#1a1a2e] text-gray-400 text-center py-6 text-sm">
        © 2026 The Grand Event. Made with ❤️ by Kavindu.
      </footer>
    </>
  );
}
