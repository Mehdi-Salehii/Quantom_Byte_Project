import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
import { Code, Layout, Server, Monitor, Shield, Cloud } from "lucide-react"
import Image from "next/image"
import computer from "@/assets/computer.jpg"

export default function LandingPage() {
  return (
    <main className="bg-background text-foreground">
      <section
        id="home"
        className="container mx-auto flex flex-col items-center justify-center px-4 py-1 text-center sm:px-6 md:min-h-screen md:flex-row md:items-center md:justify-between"
      >
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Empowering Your Business with Tailored Software Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Quantum Byte specializes in delivering custom software solutions
            that drive growth and efficiency for businesses and individuals.
          </p>
          <div className="mt-6 space-x-4">
            <SignedOut>
              <SignUpButton mode="modal">
                <Button variant="default" size="lg">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal" forceRedirectUrl={"/dashboard"}>
                <Button variant="outline" size="lg">
                  Open Dashboard
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
        <div className="mt-8 self-start md:mt-0 md:w-1/2">
          <Image
            src={computer}
            alt="Hero Image"
            width={500}
            height={500}
            className="mt-3 w-full"
          />
        </div>
      </section>

      <section id="features" className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-3xl font-bold">Our Key Offerings</h3>
          <p className="mt-2 text-center text-muted-foreground">
            Leveraging technology to create impactful software solutions.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <Code className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl font-semibold">
                  Custom Software Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tailored solutions that align with your business needs and
                  goals.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Layout className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl font-semibold">
                  User Experience Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Creating intuitive and beautiful interfaces that enhance user
                  engagement.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Server className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl font-semibold">
                  Backend and API Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reliable and scalable backend solutions to support your
                  application.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Monitor className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl font-semibold">
                  IT Consulting Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Strategic guidance to help you navigate the complexities of
                  IT.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl font-semibold">
                  Cybersecurity Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Protect your digital assets with robust security measures.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Cloud className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl font-semibold">
                  Cloud Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seamless integration with cloud services for scalability and
                  efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="employee-access"
        className="container mx-auto px-4 py-16 text-center sm:px-6 lg:px-8"
      >
        <SignedOut>
          <div className="rounded-lg bg-secondary px-8 py-12">
            <h3 className="text-3xl font-bold text-secondary-foreground">
              Are you an employee?
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Log in now to manage your tasks, tickets, and more in your
              personalized dashboard.
            </p>
            <div className="mt-6 space-x-4">
              <SignUpButton mode="modal">
                <Button variant="outline" size="lg">
                  Sign Up
                </Button>
              </SignUpButton>
              <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                <Button variant="default" size="lg">
                  Sign In
                </Button>
              </SignInButton>
            </div>
          </div>
        </SignedOut>
      </section>
    </main>
  )
}
