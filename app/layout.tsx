import "./globals.css";

export const metadata = {
  title: "Lam Ngoc Dao | AI Software Engineer",
  description:
    "Lam Ngoc Dao - AI Software Engineer focused on agentic AI, LLM systems, RAG pipelines, and multimodal applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
