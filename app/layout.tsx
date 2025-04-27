import './globals.css';

export const metadata = {
  title: 'Forex Sentiment Tracker',
  description: 'Analisi Sentiment Forex aggiornata',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
