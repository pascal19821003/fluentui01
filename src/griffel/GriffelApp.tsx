import React from 'react'

import { makeStyles, shorthands, TextDirectionProvider } from '@griffel/react';
import { TableContextProvider, makeResetStyles, makeStaticStyles, mergeClasses } from '@fluentui/react-components';
// import './style.css';

// rtl , it do not work.


const useBaseClass = makeResetStyles({
    color: 'green',
    fontWeight: "bold",
    fontSize: '30px',
    padding: '15px',
})
const useClasses = makeStyles({
    primaryText: {
        color: 'blue',
    },
    circular: {
        ...shorthands.padding('5px'),
        ...shorthands.borderRadius('5px'),
    }

});


export default function GriffelApp() {


    return (
        <div>
            <TextDirectionProvider dir='ltr'>
                <div>abc</div>
            </TextDirectionProvider>
            <TextDirectionProvider dir='rtl'>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <div >aaa</div>
                    <div>bbb</div>
                </div>
            </TextDirectionProvider>
        </div>
    )
}
