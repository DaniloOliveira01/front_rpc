import { Container } from './styles'
import { ITypeHeader } from '../../@types'
import Image from 'next/image'

export const Header = ({ date, setUrl }: ITypeHeader) => {
  const newDate = new Date(date).toLocaleDateString('pt-BR')

  async function handlePage(nextPage: boolean) {
    const newNow = new Date(date)
    if (nextPage) newNow.setDate(newNow.getDate() + 1)
    if (!nextPage) newNow.setDate(newNow.getDate() - 1)

    const [mes, dia, ano] = newNow.toLocaleDateString('en-US').split('/')
    const formateDate = `${ano}-${mes}-${dia}`
    setUrl(formateDate)
  }

  return (
    <Container>
      <div>
        <button onClick={() => handlePage(false)}>Anterior</button>

        <div className="logo-date">
          <Image
            src={'/images/LogoRPC.png'}
            alt="logo da rpc"
            width={350}
            height={200}
          />
          <span>{newDate}</span>
        </div>

        <button onClick={() => handlePage(true)}>Próximo</button>
      </div>
    </Container>
  )
}
