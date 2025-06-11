/**
 * Emotion(CSS in Js 라이브러리)
 * 1. 라이브러리 설치 -> npm install @emotion/react
 * 2. jsx 태그의 css 속성 활성화 -> jsxImportSource @react/emotion
 * 3. css객체 import -> css``문자열로 css 작성
 * 4. 확장프로그램으로 vscode-styled-componets 설치
 */

/** @jsxImportSource @emotion/react */
import { box1, box2 } from './styles';
import React from 'react';

function Emotion(props) {

    return (
        <div>
            <div css={box1}></div>
            <div css={box2("gray")}></div>
        </div>
    );
}

export default Emotion;