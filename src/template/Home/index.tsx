import moment from 'moment';
import { useEffect, useState } from 'react';
import { Cards } from '../../components/Cards'
import { Header } from '../../components/Header'
import { api } from '../../services/api'
import { Container } from './styles';

interface ITypeData {
  data: {
    data: string
  }

  programmeParse: ITypeProgramme[]
}

export interface ITypeProgramme {
  title: string
  description: string
  time_start: string
  time_end: string
  URL_IMG: string
}

export const HomeLayout = () => {
  const [data, setData] = useState<ITypeData>();
  
  useEffect(() => {
    const now = new Date().toLocaleDateString()
    const formated = now.split("/") 

    console.log(formated)

    api.get(`/getRPCProgramme/${formated[0]}-${formated[1]}-${formated[2]}`).then((response) => setData(response.data))
  }, [])
  if(!data) return 'loading'
  
  return (
    <>
      <Header 
        date={data.data}
      />
      <Cards 
        infos={data.programmeParse}
      />
    </>
  )
}
