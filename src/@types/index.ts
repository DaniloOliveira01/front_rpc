import { 
  Dispatch, 
  SetStateAction 
} from 'react'

export interface ITypeProgramme {
  title: string
  description: string
  time_start: string
  time_end: string
  URL_IMG: string
}

export interface ITypeCard {
  infos: ITypeProgramme[]
}

export interface ITypeData {
  data: string

  programmeParse: ITypeProgramme[]
}

export interface ITypeHeader {
  date: string
  setUrl: Dispatch<SetStateAction<string>>
}
