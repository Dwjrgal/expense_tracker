import { Inter } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <UserProvider>{children} </UserProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
