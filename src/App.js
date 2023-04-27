import styled from 'styled-components';
import './App.css';
import Results from './components/Results';
import Summary from './components/Summary';

function App() {
  return (
    <ApplicationContainer>
      <Results />
      <Summary />
    </ApplicationContainer>
  );
}

export default App;

const ApplicationContainer = styled.div`
    @media screen and (min-width: 600px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      box-shadow: 1px 10px 20px hsla(224, 30%, 27%, .3);
      border-radius: 30px;
      max-width: 650px;
      height: 400px;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

    }
`