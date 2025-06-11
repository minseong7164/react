 /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

const aa = (p1, p2) => css`
    display: flex;
    box-sizing: border-box;
    border: 1px solid ${p2? "green":"#fff"};
    width: 200px;
    height: 200px;
    background-color: ${p1 ? "red" : "blue"};
`;

function Effect2(props) {
    const [ flag, setFlag ] = useState(false);

    const handleOnClick = () => {
        setFlag(prev => !prev);
    }
    return (
        <div>
            <div css={aa(flag, !flag)}></div>
            <button onClick={handleOnClick}>변경</button>
        </div>
    );
}

export default Effect2;