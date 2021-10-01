import styled from 'styled-components/macro'

function Footer({ author, text }) {
  return (
    <Wrapper>
        <Label aria-label="Add new question">
            <TextInput placeholder="Enter your question here!" type="text"/>
        </Label>
        <SubmitButton aria-label="Submit question">Submit</SubmitButton>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.form`
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 0;
  padding: 20px 10px;
  background-color: #dedede;
  display: flex;
  justify-content: space-between;

//   @media only screen and (max-width: 516px) {
//     width: 100%;
//     min-width: 100%;
//   } ;
`

const Label = styled.label`
    flex: 2;
`;

const TextInput = styled.input`
    padding: 10px 10px;
    width: 100%;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
`;

const SubmitButton = styled.button`
    padding: 10px 10px;
    width: 20%;
    border-radius: 5px;
    background-color: #3d3d3d;
    border: none;
    text-transform: uppercase;
    color: #fff;

    @media only screen and (max-width: 422px) {
        padding: 5px 2px;
    }
`;