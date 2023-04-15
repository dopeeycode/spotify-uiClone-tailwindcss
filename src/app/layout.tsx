import './globals.css'

export const metadata = {
  title: 'Spotify',
  description: 'Listen to music.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-b from-zinc-800  to-zinc-950 text-zinc-50'>{children}</body>
    </html>
  )
}
