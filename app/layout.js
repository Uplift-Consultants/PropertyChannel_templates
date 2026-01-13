import Aside from "@components/dashboard/aside";
import { StoreProvider } from "./storeProvider";
import { Inter } from "next/font/google";
import Header from "@components/dashboard/header";
import "@css/main.css";
import "@css/colors.css";
import "@css/aside.css";
import "@css/header.css";
import "@css/buttons.css";
import "@css/icons.css";
import "@css/dropdown.css";
import "@css/modal.css";

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata = {
  title: "Sales | Property Channel",
  description: "Your channel to generational wealth",
};

export default function RootLayout({ children }) {

return (
  <html lang="en">
    <body className={`${inter.variable} antialiased`}>
      <StoreProvider >
        <div className="wrapper">
          <Aside/>
          <div className="content">
            <Header/>
            <main>
              {children}
            </main>          
          </div>          
        </div>
        <div id="portal" /> 
      </StoreProvider>
    </body>
  </html>      
);
}
