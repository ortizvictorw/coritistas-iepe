import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Coritistas IEPE',
  description: 'Una web de adoración'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
