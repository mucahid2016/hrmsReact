import React from 'react'
import {  Dropdown } from 'semantic-ui-react'

export default function CartSummary() {
    return (
        <div>
            <Dropdown item text='İş İlanları'>
                <Dropdown.Menu>
                    <Dropdown.Item>Full Stack Developer</Dropdown.Item>
                    <Dropdown.Item>UI/UI Desinger</Dropdown.Item>
                    <Dropdown.Item>TRT yi SAtıcak Adam</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
