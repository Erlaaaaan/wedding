import "./globals.css";

export const metadata = {
  title: "Erlan & Andrea Wedding",
  description: "Wedding invitation and RSVP for Erlan Justin & Andrea.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F5E6E8] antialiased">
        {children}
      </body>
    </html>
  );
}

