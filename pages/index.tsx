import Head from 'next/head'
import { DashboardComponent } from '../components/dashboardComponent/dashboardComponent'
import ResultContainer from '../containers/resultContainer/resultContainer'

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Rick and Morty Wiki</title>
        <meta name="description" content="Wikipedia for Rick and Morty" />
        <link rel="icon" href="/rick_96214.ico" />
      </Head>
      <DashboardComponent />
    </div>
  )
}