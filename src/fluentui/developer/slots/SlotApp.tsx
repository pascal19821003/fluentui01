import { AccordionHeader, Avatar, Button, Input, makeStyles, tokens } from '@fluentui/react-components'
import React from 'react'

const useStyle=makeStyles({
    badge:{
        color: tokens.colorBrandStroke1
    }
})

export default function SlotApp() {

    const clazz = useStyle()

    // const renderBigLetterIcon = ( )=>{
    //     return (<b>B</b>)
    // }

    const renderBigLetterIcon = ({Component, props}:any) => {
        return <b>B</b>;
      };

    return (
        <div>
            <Input contentBefore="$" value="10" contentAfter=".00" />
            <Button icon={<img src={"../../../assets/p1.png"}  alt="branded site icon"  style={{width:100}} />} style={{width:200}}/>
            <Avatar name="Support" badge={{ status: 'available', 'aria-label': 'available' }} />
            <Avatar name="IT propbably" badge={{ status: 'busy', className: clazz.badge }} />
            <AccordionHeader as="h1" button={{as:'a'}} >
                Accordion Header as h1
            </AccordionHeader>
            {/* <Button icon={{children: (prop:any)=>{
                return <span>aaa</span>
            }}} >Bold</Button> */}
        </div>
    )
}
