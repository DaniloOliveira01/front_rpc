import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Cards } from '../components/Cards'
import { Header } from '../components/Header'
import { api } from '../services/api'

interface ITypeData {
  data: string

  programmeParse: ITypeProgramme[]
}

export interface ITypeProgramme {
  title: string
  description: string
  time_start: string
  time_end: string
  URL_IMG: string
}

function Home () {
  const [data, setData] = useState<ITypeData>()
  const [url, setUrl] = useState('')
  const [onLoadingUrl, setOnLoadingUrl] = useState(false)

  async function getProgrammers() {
    setOnLoadingUrl(true)
    const now = new Date().toLocaleDateString().split('/')
    const formateData = `${now[2]}-${now[1]}-${now[0]}`
    await api
      .get(`/getRPCProgramme/${url ? url : formateData}`)
      .then(response => setData(response.data))
      .catch(error => console.log(error))
    setOnLoadingUrl(false)
  }

  useEffect(() => {
    getProgrammers()
  }, [url])

  if (!data || onLoadingUrl) return 'loading'

  return (
    <>
      <Header date={data.data} setUrl={setUrl} />
      <Cards infos={data.programmeParse} />
    </>
  )
}

export default Home