import Head from 'next/head'
import SearchComponent from '../components/cardComponent/cardComponent'
import ResultContainer from '../containers/resultContainer/resultContainer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rick and Morty Wiki</title>
        <meta name="description" content="Wikipedia for Rick and Morty" />
        <link rel="icon" href="/rick_96214.ico" />
        
      </Head>
      Wiki Rick and Morty
      <ResultContainer />
    </div>
  )
}
