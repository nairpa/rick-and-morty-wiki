import Head from 'next/head'
import SearchComponent from '../components/searchComponent/searchComponent'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rick and Morty Wiki</title>
        <meta name="description" content="Wikipedia for Rick and Morty" />
        <link rel="icon" href="/rick_96214.ico" />
        
      </Head>
      Wiki Rick and Morty
      <SearchComponent />
    </div>
  )
}
