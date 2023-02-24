import styled from 'styled-components'
import ErrorImage from '../../assets/404.svg'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
const ErrorTitle = styled.p``
const ErrorImg = styled.img`
  width: 500px;
`
const ErrorDescription = styled.p``

function Error() {
  return (
    <div>
      <ErrorWrapper>
        <ErrorTitle>Oups...</ErrorTitle>
        <ErrorImg src={ErrorImage} />
        <ErrorDescription>
          Il semblerait qu’il y ait un problème
        </ErrorDescription>
      </ErrorWrapper>
    </div>
  )
}

export default Error
