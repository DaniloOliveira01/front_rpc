import { Container, MenuMobile } from './styles'
import { IoTvSharp, IoMenuSharp } from 'react-icons/io5'

import { useRouter } from 'next/router'
import Link from 'next/link'

export const Header = () => {
  const { asPath } = useRouter()

  return (
    <Container>
      <div>
        <h2>
          <IoTvSharp /> rpc<span>tv</span>
        </h2>
      </div>

      <nav>
        <ul>
          <li className={asPath === '/' ? 'active' : ''}>
            <Link href={'/'}>Home</Link>
          </li>
          <li className={asPath === '/' ? 'active' : ''}>
            <Link href={'/programming'}>Progamming</Link>
          </li>
          <li className={asPath === '/' ? 'active' : ''}>
            <Link href={'/about'}>About</Link>
          </li>
        </ul>
      </nav>

      <MenuMobile>
        <IoMenuSharp size={45} />
      </MenuMobile>
    </Container>
  )
}
