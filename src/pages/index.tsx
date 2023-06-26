import { Ubuntu } from "next/font/google";
import MainForm from "@/components/mainForm";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen grid grid-cols-1 md:place-items-center ${ubuntu.className} relative`}
    >
      <MainForm />
    </main>
  );
}
