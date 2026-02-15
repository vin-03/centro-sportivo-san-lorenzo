import "./globals.css";
import Header from "../components/Header";
// import "../components/Footer";

export const metadata = {
  title: "Centro Sportivo San Lorenzo - Tradizione e Sport",
  description: "Pallavolo, Beach Volley, Padel e Palestra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
