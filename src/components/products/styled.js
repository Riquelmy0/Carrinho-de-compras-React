import styled from "styled-components";


export const Section = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    transition: 2s;
`
export const PartProducts = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    box-sizing:border-box;
    justify-content: center;
    gap: 20px;
    margin-top: 100px;
    padding: 50px 0;

    @media (max-width:420px) {
    padding: 20px 0;
        
    }


` 