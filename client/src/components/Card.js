import styled from 'styled-components/macro'
import deletelogo from '../remove.svg'

function Cards({ author, text, onDeleteButtonClick, id }) {
  return (
    <Wrapper>
      <ButtonWrapper>
        <DeleteButton onClick={() => onDeleteButtonClick(id)}>
          <img src={deletelogo} alt="Delete"></img>
        </DeleteButton>
      </ButtonWrapper>
      <Text>{text}</Text>
      <Author>{author}</Author>
    </Wrapper>
  )
}

export default Cards

const Wrapper = styled.article`
  border: 2px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  min-width: 30%;
  max-width: 250px;

  @media only screen and (max-width: 516px) {
    width: 100%;
    min-width: 100%;
  } ;
`

const Text = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 500;
`

const Author = styled.div`
  align-self: flex-end;
`

const DeleteButton = styled.button`
  padding: 5px;
  color: white;
  font-weight: 800;
  background-color: transparent;
  border: none;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
