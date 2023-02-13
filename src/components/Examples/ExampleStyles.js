import styled from 'styled-components'

export const DivCarrosel = styled.section`
    padding-top: 3rem;
    padding-bottom: 3rem;
    place-items: center;
    column-gap: 1rem;
    row-gap: 3rem;
    @media ${props => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        padding-bottom: 1.5rem;
    }
`
