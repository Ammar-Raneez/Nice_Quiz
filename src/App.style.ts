import styled from 'styled-components'

export const AppWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    > p.score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    > h1 {
        font-family: "Fascinate Inline";
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%cover;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        font-weight: 400;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }

    > button.start, button.next {
        cursor: pointer;    
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38ff8;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    > button.next {
        max-width: 200px
    }
`