import "./globals.css";
import "../styles/main.css";
import styles from "@/styles/Home.module.css";

export const metadata = {
  title: "films app",
  description: "search film for you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.main}>
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
