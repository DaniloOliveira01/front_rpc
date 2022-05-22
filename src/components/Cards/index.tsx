import { ITypeProgramme } from '../../template/Home'
import { Container, NextProgramme } from './styles'
import Image from 'next/image'
import moment from 'moment'

interface ITypeCard {
  infos: ITypeProgramme[]
}

export const Cards = ({ infos }: ITypeCard) => {
  function handleActiveProgram(
    title: string,
    startTime: string,
    endTime: string
  ) {
    const localTimeNow = moment().local()
    const startTimeFormatted = moment(
      localTimeNow.toISOString().slice(0, 10) + ' ' + startTime
    ).local()
    const endTimeFormatted = moment(
      localTimeNow.toISOString().slice(0, 10) + ' ' + endTime
    ).local()

    if (
      localTimeNow.isBetween(startTimeFormatted, endTimeFormatted, null, '[]')
    ) {
      return true
    }

    return false
  }

  function getTimeBrasiliaTimeZone(time: string) {
    return moment(moment().local().toISOString().slice(0, 10) + ' ' + time)
      .local()
      .format('HH:mm')
  }

  return (
    <Container>
      {infos.map((entries, index) => (
        <NextProgramme key={index}>
          <div className="programme">
            <span>
              {handleActiveProgram(
                entries.title,
                entries.time_start,
                entries.time_end
              ) ? (
                <div>
                  <span className="live-news">
                    <div className="ball-red"></div>Ao vivo:
                  </span>
                </div>
              ) : (
                ''
              )}{' '}
              {entries.title} - Das{' '}
              {getTimeBrasiliaTimeZone(entries.time_start)} ás{' '}
              {getTimeBrasiliaTimeZone(entries.time_end)}
            </span>
          </div>

          <div className='image-programme'>
            <Image src={entries.URL_IMG} width={90} height={80} />
          </div>

          <div className="description">
            <span>Descrição:</span>
            <p>{entries.description}</p>
          </div>
        </NextProgramme>
      ))}
    </Container>
  )
}
