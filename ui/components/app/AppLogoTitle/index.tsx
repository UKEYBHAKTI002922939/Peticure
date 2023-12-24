import React from 'react'
import {
    AppTitle,
    Container,
    LogoImage
} from './AppLogoTitleElements'
import LogoImgSrc from '../../public/assets/images/logo.png'

type Props = {}

/**
 * Renders the logo and title of the OV Travels app.
 * @ {Props} props - The props object containing any necessary data or configurations.
 * @ The JSX element representing the logo and title.
 */
const AppLogoTitle = (props: Props) => {
    return (
        <Container href="/">
            <AppTitle> OV Travels </AppTitle>
            <LogoImage
                src={LogoImgSrc}
                alt="logo"
            />
        </Container>
    )
}

export default AppLogoTitle