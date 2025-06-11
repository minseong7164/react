import { css } from "@emotion/react";

export const box1 = css`
    width: 100px;
    height: 100px;
    background-color: white;
`;

export const box2 = (color) => css`
    width: 100px;
    height: 100px;
    background-color: ${color};
`;