import { Cards, Header } from '../components'
import { useEffect, useState } from 'react'
import { ITypeData } from '../@types'

import { api } from '../services/api'

function Home() {
  const [data, setData] = useState<ITypeData>()
  const [url, setUrl] = useState('')
  const [onLoadingUrl, setOnLoadingUrl] = useState(false)

  async function getProgrammers() {
    setOnLoadingUrl(true)
    const now = new Date().toLocaleDateString('en-US').split('/')
    const formateData = `${now[2]}-${now[0]}-${now[1]}`
    await api
      .get(`/getRPCProgramme/${url ? url : formateData}`)
      .then(response => setData(response.data))
      .catch(error => console.log(error))
    setOnLoadingUrl(false)
  }

  useEffect(() => {
    getProgrammers()
  }, [url])

  if (!data || onLoadingUrl) return 'Loading...'

  return (
    <>
      <Header date={data.data} setUrl={setUrl} />
      <Cards infos={data.programmeParse} />
    </>
  )
}

export default Home
