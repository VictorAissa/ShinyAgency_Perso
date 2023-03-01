import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useParams } from 'react-router-dom'
import { ThemeContext } from '../../utils/context'
import { useEffect, useState } from 'react'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
  margin: 0 90px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const Picture = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 75px;
`

const Title = styled.h1`
  font-size: 25px;
  margin: 0;
  font-weight: 500;
`

const JobTitle = styled.h2`
  padding-top: 10px;
  font-size: 20px;
  margin: 0;
  font-weight: 500;
`

const Location = styled.span`
  margin-left: 15px;
  color: ${colors.secondary};
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Price = styled.span`
  padding-top: 10px;
  font-weight: 500;
  font-size: 20px;
`

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`

const Skill = styled.span`
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  border: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const Availability = styled.span`
  &:before {
    position: absolute;
    left: 0;
    top: 4px;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: ${({ available }) => (available ? 'green' : 'red')};
    content: '';
  }
  padding-left: 20px;
  position: relative;
`

function Profile() {
  const { id } = useParams()
  const [profileData, setProfileData] = useState({})

  useEffect(() => {
    fetch(`http://localhost:8000/freelance?id=${id}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setProfileData(jsonResponse.freelanceData)
        console.log(profileData)
      })
  }, [])

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <ProfileWrapper theme={theme}>
          <Picture
            src={profileData.picture}
            alt={profileData.name}
            height={150}
            width={150}
          />
          <ProfileDetails theme={theme}>
            <TitleWrapper>
              <Title>{profileData.name}</Title>
              <Location>{profileData.location}</Location>
            </TitleWrapper>
            <JobTitle>{profileData.job}</JobTitle>
            <SkillsWrapper>
              {profileData.skills &&
                profileData.skills.map((skill) => (
                  <Skill key={`skill-${profileData.skill}-${id}`} theme={theme}>
                    {profileData.skill}
                  </Skill>
                ))}
            </SkillsWrapper>
            <Availability available={profileData.available}>
              {profileData.available ? 'Disponible maintenant' : 'Indisponible'}
            </Availability>
            <Price>{profileData.tjm} € / jour</Price>
          </ProfileDetails>
        </ProfileWrapper>
      )}
    </ThemeContext.Consumer>
  )
}

export default Profile
