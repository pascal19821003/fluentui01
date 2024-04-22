import React from 'react'

import { makeStyles } from '@griffel/react';
import { mergeClasses } from '@fluentui/react-components';
// import './style.css';

// Nesting selector

const useClasses = makeStyles({
    root: {
        '& .foo': {
            color: 'green'
        },
        '&.bar': {
            color: 'purple'
        }
    }
});


export default function GriffelApp() {
    const clazz = useClasses();
    return (
        <div>

            <div className={mergeClasses(clazz["root"],"bar")}>
                <button className='foo'>button</button>
                <span>span haha</span>
            </div>

            {/* <p className="myroot bar" >
                bbb
            </p> */}

        </div>
    )
}
