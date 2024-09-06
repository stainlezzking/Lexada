import "@/app/globals.css";

export const metadata = {
  title: "Admin Dashboard | Lexada Real Estate Properties",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-text">
        <div className="mb-20">{children}</div>
      </body>
    </html>
  );
}
