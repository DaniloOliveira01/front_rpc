import { Container, NextProgramme } from './styles'
import { ITypeCard } from '../../@types'

import Image from 'next/image'
import moment from 'moment'

export const Cards = ({ infos }: ITypeCard) => {
  function handleActiveProgram(
    _title: string,
    time_start: string,
    time_end: string
  ) {
    const localTime = moment().local()
    const timeStartFormatted = moment(
      localTime.toISOString().slice(0, 10) + ' ' + time_start
    ).local()
    const timeEndFormatted = moment(
      localTime.toISOString().slice(0, 10) + ' ' + time_end
    ).local()

    if (localTime.isBetween(timeStartFormatted, timeEndFormatted)) {
      return true
    }
    return false
  }

  return (
    <Container>
      {infos &&
        infos.map((entries, index) => (
          <NextProgramme key={index}>
            <div className="programme">
              <span>
                {handleActiveProgram(
                  entries.title,
                  entries.time_start,
                  entries.time_end
                ) ? (
                  <div className="live">
                    <span>
                      <div className="ball-red"></div> Ao vivo:
                    </span>
                  </div>
                ) : (
                  ''
                )}{' '}
                {entries.title} - Das {entries.time_start} ás {entries.time_end}
              </span>
            </div>

            <div className="image-programme">
              {entries.URL_IMG === null || undefined ? (
                'API Quebrada'
              ) : (
                <Image src={entries.URL_IMG} width={80} height={70} />
              )}
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
