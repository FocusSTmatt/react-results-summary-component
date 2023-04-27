import React from 'react'
import styled from 'styled-components'

const Results = () => {
  return (
   <ResultsContainer>
    <Title>Your Results</Title>
        <ScoreContainer>
            <Score>76</Score>
            <ScoreText className='score-text'>of 100</ScoreText>
        </ScoreContainer>
    <h2>Great</h2>
    <ResultsText>You scored higher than 65% of the people who have taken these tests.</ResultsText>
   </ResultsContainer>
  )
}

export default Results

const ResultsContainer = styled.div`
    background: linear-gradient(hsla(261, 90%, 58%, 1), hsl(252, 91%, 55%));
    color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;

    h2 {
        padding-top: 1.5em;
        color: #fff;
        font-size: 23px;
    }

    @media screen and (min-width: 600px) {
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        max-height: 400px;
    }
`
const Title = styled.h3`
    padding: 1.5em;
    color: hsl(241, 100%, 89%);
    font-size: 16px;
`
const ResultsText = styled.p`
    color: hsl(241, 100%, 89%);
    font-size: 14px;
    text-align: center;
    padding: 1em 4.5em 3em 4.5em;
`
const ScoreContainer = styled.div`
    display: flex;
    box-shadow: 2px 0 0 rgba(0, 0, 0, 0);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: linear-gradient(360deg, rgb(80, 34, 244), rgb(73, 15, 198));  
    
    
    @media screen and (min-width: 600px) {
        width: 175px;
        height: 175px;
    }
`
const Score = styled.h1`

    color: #fff;
    font-size: 3.3em;
`    
const ScoreText = styled.p`
    color: hsl(242, 19%, 69%);
    font-size: 14px;
    text-align: center;
`


