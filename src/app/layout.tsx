import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { ClientLayout } from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Mukhil Sundararaj - Portfolio",
  description: "CS Grad Student at NYU with expertise in Generative AI, AI in Finance, Blockchain, and Offensive Security.",
  icons: {
    apple: [
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon-167x167.png", sizes: "167x167", type: "image/png" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-touch-icon-57x57.png", sizes: "57x57", type: "image/png" },
    ],
  },
  other: {
    "apple-touch-icon": "/apple-touch-icon.png",
    "apple-touch-icon-precomposed": "/apple-touch-icon-precomposed.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
        suppressHydrationWarning={true}
      >
        <div className="flex w-full h-full">
          <Sidebar />
          <div className="flex-1 lg:pl-2 lg:pt-2 bg-gray-100 overflow-hidden">
            <div className="relative h-full bg-white lg:rounded-tl-xl border border-transparent lg:border-neutral-200">
              <ClientLayout>
                {children}
                <Footer />
              </ClientLayout>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
