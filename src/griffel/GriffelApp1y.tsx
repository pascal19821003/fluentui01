import React from 'react'

import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
    button: { color: 'red' },
    icon: { paddingLeft: '15px' },
});


export default function GriffelApp() {
    const clazz = useClasses();
    return (
        <div>
            <button className={clazz.button}>button</button>
            <span className={clazz.icon}>span haha</span>
        </div>
    )
}
