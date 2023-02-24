import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
  padding: 15px;
  color: ${colors.secondary};
  text-decoration: none;
  font-size: 18px;
  height: 20px;
  display: flex;
  align-items: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const StyledNav = styled.nav`
  display: flex;
`
const StyledImg = styled.img`
  height: 60px;
`
const StyledBanner = styled.div`
  display: flex;
  justify-content: space-between;
`

function Header() {
  return (
    <StyledBanner>
      <StyledImg src={logo} />
      <StyledNav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </StyledNav>
    </StyledBanner>
  )
}

export default Header
