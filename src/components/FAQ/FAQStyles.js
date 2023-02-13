import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    text-align: justify;
    text-justify: inter-word;

    h1 {
        width: 100%;
        cursor: pointer;
        font-size: 24px;
        color: #9cc9e3;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        width: 85%;
        h1 {
            font-size: 20px;
        }
    }
`

export const Wrapper = styled.div`
    overflow: hidden;
    div {
        transition: all 500ms;
    }
    @media (max-width: 768px) {
        div {
            p {
                font-size: 14px;
            }
        }
    }
`
