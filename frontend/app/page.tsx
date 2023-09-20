import Link from "next/link";
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <h3>Welcome, To Spreadsheet Module..!</h3>
        <Link href="/users">User of Database</Link>
      </main>
    </>
  )
}
