
import "./globals.css";
// import ThemeProvider from "@/mycompunents/ThemeProvider";
import ThemeProvider from "@/mycompunents/ThemeProvider";
import { useTheme } from "@teispace/next-themes";

export const metadata = {
  title: "Mansoor Sabir | Web Developer",
  description: "Personal portfolio of Mansoor Sabir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
