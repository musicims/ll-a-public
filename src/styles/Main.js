import styled from 'styled-components';
import { devices } from "../data/constants";
import { NavLink } from 'react-router-dom';

export const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 1200px;
    text-align: center;
    margin: 0 auto;
    padding: 20px;
    background: ${({ theme }) => theme.colors.cardBG};
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.cardText};
`;

export const ParagraphStyled = styled.p`
    color: ${({ theme }) => theme.colors.cardText};
    @media only screen and ${devices.md} {
        
    }
`;

export const ContentHeaderStyled = styled.h1`
    color: ${({ theme }) => theme.colors.headline};
    font-weight: 700;
    font-family: inherit;
    font-size: 36px;
    margin-bottom: 10px;
    @media only screen and ${devices.md} {
        font-size: 30px;
    }
`;

export const NavLinkWrapper = styled(NavLink)`
    color: ${({ theme }) => theme.colors.contrastText};
`;

export const FontAwesomeIconWrapper = styled.div`
    color: ${({ theme }) => theme.colors.contrastText};
`;

export const ModalBackgroundStyled = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 15;
`;