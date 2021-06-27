import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            (
            <Menu vertical>
                <Menu.Item>
                    <Menu.Header>Pozisyon Adı</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='Software Developer'

                        />
                        <Menu.Item
                            name='Digital Marketing'


                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Şehirler</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='İstanbul'

                        />
                        <Menu.Item
                            name='Ankara'


                        />
                    </Menu.Menu>
                </Menu.Item>

            </Menu>

        </div >
    )
}
