import { Header } from "@/components/header";
import { UserContextProvider } from "@/providers/user-context-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/providers/react-query-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { Container } from "@/components/container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | FLYIO",
    default: "FLYIO — Book Your Journey",
  },
  description: "Easily search and book flights around the world with FLYIO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserContextProvider>
          <ReactQueryProvider>
            <Header />
            <ModalProvider />
            <Container elem="main" className="py-4">
              {children}
            </Container>
            <Toaster />
          </ReactQueryProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
