import styled from 'styled-components';


export const header = styled.header`
    width: 50%;
    margin: 84px 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & div{
    display: flex;
    align-items: center;
    }
    & img{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-left: 7px;
    }
`;

export const div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const button = styled.button`
    width: 50%;
    padding: 24px;
    font-weight: 700px;


    background: #51ada9;
    color: #000000;
    
    border-radius: 5px;
    margin: 12px 0 84px;
    border: none;
    cursor: pointer;

    transition: filter 0.2s;
    font-size: 16px;

    &:hover {
        filter: brightness(90%);
    }
`;

export const input = styled.input`
    width: 50%;
    padding: 24px;


    background: #f7f7f7;
    border-radius: 5px;
    border: none;

    font-size: 16px;
`;

export const h1 = styled.h1`
    margin: 84px 0 24px;
`;
