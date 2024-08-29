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
import { Footer } from "@/components/Footer"

import { QueryProvider } from "@/components/QueryProvider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl={"/"}
      afterMultiSessionSingleSignOutUrl={"/"}
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <QueryProvider>
        <html lang="en" className="overflow-x-hidden">
          <body className="flex min-h-svh flex-col overflow-x-hidden transition-colors duration-300">
            <ThemeProvider attribute="class" defaultTheme="system">
              <Header />
              <main className="flex-grow">{children}</main>
              <Toaster />
              <Footer />
            </ThemeProvider>
          </body>
        </html>
      </QueryProvider>
    </ClerkProvider>
  )
}
