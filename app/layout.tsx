import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Header } from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system">
        <body className="transition-colors duration-200">
          <Header className="p-2 flex items-center justify-end gap-10 border-b-[1px] border-b-slate-100" />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
