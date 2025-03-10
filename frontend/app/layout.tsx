'use client'

import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        
        <ChakraProvider>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
