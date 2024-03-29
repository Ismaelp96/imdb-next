import { Inter } from 'next/font/google';

import './globals.css';
import Header from '../components/Header';
import Providers from './Providers';
import Navbar from '../components/NavBar';
import SearchBox from '../components/SearchBox';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IMDB Movie Search',
  description: 'This is movie database clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
