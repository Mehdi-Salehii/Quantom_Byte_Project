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
            <SignedOut>
              <Header className="flex items-center justify-end gap-10 border-b-[1px] border-b-slate-100 p-2" />
              <div className="grid h-full w-full place-items-center">
                <div className="mr-3 mt-3 self-start justify-self-end">
                  <SignUpButton mode="modal">
                    <Button>Sign Up</Button>
                  </SignUpButton>
                </div>
                <div className="my-5 self-start md:my-10">
                  <h1 className="mb-2 text-center font-bold xsm:mb-5">
                    Sign in to view your tickets
                  </h1>
                  <SignIn routing="hash" />
                </div>
              </div>
              <Footer />
            </SignedOut>
            <SignedIn>
              <Header className="flex items-center justify-end gap-10 border-b-[1px] border-b-slate-100 p-2" />
              <main className="flex-grow">{children}</main>
              <Toaster />
              <Footer />
            </SignedIn>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
