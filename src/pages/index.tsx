import { Ubuntu } from "next/font/google";
import MainForm from "@/components/mainForm";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${ubuntu.className}`}
    >
      <MainForm />
    </main>
  );
}
