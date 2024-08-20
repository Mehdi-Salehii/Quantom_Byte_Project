import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import { ThemeProvider } from "@/components/ThemeProvider"
import "./globals.css"
import { Header } from "@/components/Header"
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <html lang="en" className="w-screen overflow-x-hidden">
        <body className="w-screen overflow-x-hidden transition-colors duration-200">
          <ThemeProvider attribute="class" defaultTheme="system">
            <SignedOut>
              <div className="grid h-screen w-screen place-items-center">
                <div>
                  <SignIn routing="hash" />
                </div>
              </div>
            </SignedOut>
            <SignedIn>
              <Header className="flex items-center justify-end gap-10 border-b-[1px] border-b-slate-100 p-2" />
              {children}
              <Toaster />
            </SignedIn>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
