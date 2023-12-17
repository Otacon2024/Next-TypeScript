import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      {/* We use Link instead of <a> to navigate between pages without reloading the page */}
      <Link href="/users">Users</Link>
    </main>
  )
}
