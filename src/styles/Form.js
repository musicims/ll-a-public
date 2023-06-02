import styled from 'styled-components';
import { devices } from "../data/constants";
import { cardText, activeColor, ff, cardBG, bg } from './';

export const FormSectionStyled = styled.section`
    width: 60%;
    background: ${cardBG};
    border-radius: 12px;
    margin: 0 auto;
    color: ${cardText};
    max-width: 600px;
    @media only screen and ${devices.md} {
        width: 80%;
    }
`;


export const InputContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px 8px;
    width: ${props => props.$size ? `${props.$size}%`:""};
    max-width: ${props => (props.$type === "number" || props.$type === "date") ? "150px" : props.$type === "text"?"600px":""};
    align-items: ${props => props.$type === "checkbox" ? "flex-start" : ""};
    @media only screen and ${devices.md} {
        width: 95%;
        max-width: 100%;
    }
`;

export const InputStyled = styled.input`
    border-radius: 8px;
    border: ${cardText} 1px solid;
    padding: 6px;
    vertical-align:top;
    font-family: ${ff};
    
    &:focus {
        outline: none !important;
        border: 2px solid ${activeColor};
        /* box-shadow: 0 0 10px lightgray; */
    }
`;

export const SelectStyled = styled.select`
    border-radius: 8px;
    border: ${cardText} 1px solid;
    padding: 6px;
    vertical-align:top;
    min-width: 100px;
    font-family: ${ff};

    &:focus {
        outline: none !important;
        border: 2px solid ${activeColor};
        /* box-shadow: 0 0 10px lightgray; */
    }
`;

export const TextAreaStyled = styled.textarea`
    border-radius: 8px;
    border: ${cardText} 1px solid;
    padding: 6px;
    vertical-align:top;
    font-family: ${ff};

    &:focus {
        outline: none !important;
        border: 2px solid ${activeColor};
        /* box-shadow: 0 0 10px lightgray; */
    }
    height: 100px;
    vertical-align: top;
`

export const LabelStyled = styled.label`
    font-size: 16px;
`;

export const FormContainerStyled = styled.div`
    font-family: ${ff};
    padding: 16px;
    flex: 1;
`;

export const SectionsContainerStyled = styled.div`
    margin-bottom: 16px;
`;

export const SectionContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
`;

export const FormNavContainerStyled = styled.div`
    display: flex;
`;

export const GoogleButtonContainerStyled = styled.div`
    width: 100%;    
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0px;
    // display: none;
    @media only screen and ${devices.md} {
        display: none;
    }
`;

export const OrContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    // display: none;
    @media only screen and ${devices.md} {
        display: none;
    }
`;

export const HrStyled = styled.hr`
    height: 1.25px;
    background: ${bg};
    width: 100px;
    margin: 0px 12px;
`;

export const GoogleButtonStyled = styled.div`
    transition: background-color .3s, box-shadow .3s;
    cursor: pointer; 
    padding: 12px 16px 12px 42px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    margin: 8px;
    width: 200px;
    color: #757575;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 11px;

    &:hover {
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
        background-color: #f5f5f5;
    }

    &:active {
        background-color: #eeeeee;
    }

    &:focus {
        outline: none;
        box-shadow: 
            0 -1px 0 rgba(0, 0, 0, .04),
            0 2px 4px rgba(0, 0, 0, .25),
            0 0 0 3px #c8dafc;
    }

    &:disabled {
        filter: grayscale(100%);
        background-color: #ebebeb;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
        cursor: not-allowed;
    }
`;