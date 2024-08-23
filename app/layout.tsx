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
        <body className="flex min-h-svh flex-col overflow-x-hidden transition-colors duration-200">
          <ThemeProvider attribute="class" defaultTheme="system">
            <Header />

            {/* <div className="grid h-full w-full place-items-center">
              <div className="my-5 self-start md:my-10">
                <h1 className="mb-2 text-center font-bold xsm:mb-5">
                  Sign in to view your tickets
                </h1>
                <SignIn routing="hash" />
              </div>
            </div> */}

            <main className="flex-grow">{children}</main>
            <Toaster />

            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
