import styled from 'styled-components'

function Cards({ author, text }) {
  return (
    <CardWrapper>
      <CardText>{text}</CardText>
      <CardAuthor>{author}</CardAuthor>
    </CardWrapper>
  )
}

export default Cards

const CardWrapper = styled.article`
  border: 2px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  border-radius: 20px;
  min-width: 30%;
  max-width: 250px;

  @media only screen and (max-width: 516px) {
    width: 100%;
  } ;
`

const CardText = styled.div`
  margin-bottom: 20px;
  font-size: 1.5rem;
`

const CardAuthor = styled.div``
