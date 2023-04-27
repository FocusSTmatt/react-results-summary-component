import React from 'react'
import styled from 'styled-components'
import iconMemory from "../assets/images/icon-memory.svg"
import iconReaction from "../assets/images/icon-reaction.svg"
import iconVerbal from "../assets/images/icon-verbal.svg"
import iconVisual from "../assets/images/icon-visual.svg"
const Summary = () => {
  return (
    <SummaryContainer>
        <Title>Summary</Title>
        <SummaryItemsContainer>
            <SummaryItem style={{background: "hsl(0, 82%, 96%)"}}>
                <p style={{color: "hsl(0, 100%, 50%)"}}><img src={iconReaction} alt="" /> Reaction</p>
                <p><span>80</span> / 100</p>
            </SummaryItem>
            <SummaryItem style={{background: "hsl(39, 82%, 96%)"}}>
                <p style={{color: "hsl(39, 100%, 56%)"}}><img src={iconMemory} alt="" /> Memory</p>
                <p><span>92</span> / 100</p>
            </SummaryItem>
            <SummaryItem style={{background: "hsl(165, 91%, 96%)"}}>
                <p style={{color: "hsl(166, 100%, 37%)"}}><img src={iconVerbal} alt="" /> Verbal</p>
                <p><span>61</span> / 100</p>
            </SummaryItem>
            <SummaryItem style={{background: "hsl(234, 85%, 96%)"}}>
                <p style={{color: "hsl(234, 85%, 45%)"}}><img src={iconVisual} alt="" /> Visual</p>
                <p><span>72</span> / 100</p>
            </SummaryItem>
        </SummaryItemsContainer>
        <ContinueButton>
            <button>Continue</button>
        </ContinueButton>
    </SummaryContainer>
  )
}

export default Summary

const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);    
`
const SummaryItemsContainer = styled.div``

const Title = styled.h3`
    color: hsl(224, 30%, 27%);
    margin-top: 1em;
    margin-left: 32px;
`
const SummaryItem = styled.div`
    margin: 0.75em 2em;
    padding: 0.75em 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;

    img {
        position: relative;
        top: 4px;
        right: 8px;
    }
    span{
        font-weight: 800;
    }
    p:nth-of-type(1){
        font-family: hanken-bold;
    }
`
const ContinueButton = styled.div`
    margin: 0.75em 2em 2em 2em;

    button {
        background: hsl(224, 30%, 27%);
        color: #fff;
        width: 100%;
        border-radius: 50px;
        height: 60px;
        font-size: 16px;
        border: none;

        @media screen and (min-width: 600px){
         height: 50px;
    }
   }
   button:hover, button:active {
    background: hsla(256, 72%, 46%, 1);
    cursor: pointer; 
   }

   

`
