import DefaultPicture from '../../assets/profile.jpg'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 1.2rem;
  font-weight: bold;
  align-self: flex-start;
`
const CardImage = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 220px;
  height: 220px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span>{title}</span>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card
