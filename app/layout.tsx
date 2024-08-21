import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import { ThemeProvider } from "@/components/ThemeProvider"
import "./globals.css"
import { Header } from "@/components/Header"
import { Toaster } from "@/components/ui/toaster"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"

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
      <html lang="en" className="overflow-x-hidden">
        <body className="overflow-x-hidden transition-colors duration-200">
          <ThemeProvider attribute="class" defaultTheme="system">
            <SignedOut>
              <div className="grid h-screen w-screen place-items-center">
                <div className="mr-3 mt-3 self-start justify-self-end">
                  <SignUpButton mode="modal">
                    <Button>Sign Up</Button>
                  </SignUpButton>
                </div>
                <div className="self-start">
                  <SignIn routing="hash" />
                </div>
              </div>
            </SignedOut>
            <SignedIn>
              <Header className="flex items-center justify-end gap-10 border-b-[1px] border-b-slate-100 p-2" />
              {children}
              <Toaster />
              <Footer />
            </SignedIn>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
