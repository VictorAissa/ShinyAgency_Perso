import styled from 'styled-components'
import illustration from '../../assets/home-illustration.svg'
import colors from '../../utils/style/colors'

const StyledWrapper = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  padding: 60px;
  background-color: ${colors.backgroundLight};
`
const StyledHero = styled.h1`
  grid-row: 1;
  grid-column: 1;

  font-size: 1.7rem;
  line-height: 2.8rem;
`
const StyledCta = styled.div`
  grid-row: 2/3;
  grid-column: 1;
  padding: 7px;
  text-decoration: none;
  font-size: 18px;
  height: 20px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 30px;
  background-color: ${colors.primary};

  font-size: 1.1rem;
`
const StyledIllustration = styled.img`
  grid-row: 1/3;
  grid-column: 2/3;
  height: 300px;
  width: 300px;
`

function Home() {
  return (
    <StyledWrapper>
      <StyledHero>
        Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
      </StyledHero>
      <StyledCta>Faire le test</StyledCta>
      <StyledIllustration src={illustration} />
    </StyledWrapper>
  )
}

export default Home
