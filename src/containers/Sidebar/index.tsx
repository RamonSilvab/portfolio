import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import Avatar from '../../components/avatar'
import { BotaoTema, Descricao, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Ramon Silva</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        RamonSilvaB
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev FullStack Java
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
