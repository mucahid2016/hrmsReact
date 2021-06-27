import React from 'react'
import CartSummary from './CartSummary'
import { Button,  Menu, Container } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed= "top">
                <Container>
                    <Menu.Item
                        name='Ana Sayfa'

                    />
                    <Menu.Item
                        name='İlanlar'

                    />

                    <Menu.Menu position='right'>
                        <CartSummary/>


                        <Menu.Item>
                            <Button primary>Giris Yap</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button primary>Kayıt Ol</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
