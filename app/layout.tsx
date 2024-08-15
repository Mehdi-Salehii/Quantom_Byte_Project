import { ThemeProvider } from "@/components/ThemeProvider"
import "./globals.css"
import { Header } from "@/components/Header"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="transition-colors duration-200">
                <ThemeProvider attribute="class" defaultTheme="system">
                    <Header className="flex items-center justify-end gap-10 border-b-[1px] border-b-slate-100 p-2" />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
