import "./globals.css"
import "normalize.css/normalize.css"

export const metadata = {
  title: "Optiluz, C.A.",
  description: "Sistema de historias medicas Optiluz, C.A.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F9FAFE]">{children}</body>
    </html>
  )
}
