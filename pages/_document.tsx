import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* Setting the primary font family for the project as Poppins */}
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
