import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import { spin } from "./animations";

export const MainLogo = styled.h2`
    color: ${(props) => props.theme.colors.primary};
`;

interface IBtnBaseProps {
    paddingTopBottom?: number;
    paddingLeftRight?: number;
}

export const BtnBase = styled.div<IBtnBaseProps>`
    display: inline-block;
    padding: ${({ paddingTopBottom = 0.5 }) => paddingTopBottom}rem ${({ paddingLeftRight = 1 }) => paddingLeftRight}rem;
    border: 1px solid #777;
    background-color: rgba(7, 7, 7, 0.1);
    cursor: pointer;

    @media ${({ theme }) => theme.media.medium} {
        padding: 0;
    }
`;

interface FAIconProps extends FontAwesomeIconProps {
    $animated?: boolean;
}

export const FAIcon = styled(FontAwesomeIcon)<FAIconProps>`
    font-size: 1rem;
    ${({ $animated }) =>
        $animated
            ? css`
                  animation: ${spin} 4s infinite linear;
              `
            : css`
                  animation: none;
              `}
`;

export const Loader = styled.div`
    width: 50px;
    height: 50px;
    border: 10px solid whitesmoke;
    border-top-color: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    animation: ${spin} 2s infinite linear;
`;
