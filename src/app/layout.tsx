import "./styles/reset.scss";
import "./styles/globals.scss";
import { Comfortaa } from "next/font/google";
import { ShowcaseProvider } from "./providers/ShowcaseContext";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Pet Shop | Tag Love",
  description: "Versão 2.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={comfortaa.className}>
        <ShowcaseProvider>{children}</ShowcaseProvider>
      </body>
    </html>
  );
}
