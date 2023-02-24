import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: false,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: false,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: false,
  },
]

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 20px;
`
const StyledTitle = styled.h1`
  font-size: 1.5rem;
`
const StyledDescription = styled.p`
  color: ${colors.secondary};
`
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

function Freelances() {
  return (
    <StyledWrapper>
      <StyledTitle>Trouvez votre prestataire</StyledTitle>
      <StyledDescription>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </StyledDescription>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </StyledWrapper>
  )
}

export default Freelances
