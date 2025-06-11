import React, { useEffect, useRef, useState } from 'react';
import * as f from '../ImportStudy/functions';

function DomRef(props) {
    const [ name, setName ] = useState();
    const inputRef = useRef();
    // useEffect
    // 마운트, 언마운트 관리
    // [] 있으면 처음 렌더링때만 useEffect, 값이 있으면 값이 랜더링될때마다 useEffect, []가 없으면 계속
    useEffect(() => {
        console.log("마운트(장착)");
        console.log(inputRef.current.value);
        return () => {
            console.log("언마운트(해제)");
        }
    })

    console.log("렌더링2");
    
    return (
        <div>
            <input type="text" ref={inputRef} value={"abc"}/>            
        </div>
    );
}

export default DomRef;