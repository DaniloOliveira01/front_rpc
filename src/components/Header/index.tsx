import { Container } from './styles'
import Image from 'next/image'

interface ITypeHeader {
  date: string
}

export const Header = ({ date }: ITypeHeader) => {
  const newDate = new Date(date).toLocaleDateString()

  return (
    <Container>
      <div>
        <button>Anterior</button>

        <div className='logo-date'>
          <Image
            src={'/images/LogoRPC.png'}
            alt="logo da rpc"
            width={350}
            height={200}
          />
          <span>{newDate}</span>
        </div>

        <button>Próximo</button>
      </div>
    </Container>
  )
}
