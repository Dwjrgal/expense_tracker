import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/user-context";
import { DashboardProvider } from "./context/dashboard_context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exp_tracker front-end",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <UserProvider>
          <DashboardProvider>{children}</DashboardProvider>{" "}
        </UserProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
