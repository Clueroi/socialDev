import {createGlobalStyle, ThemeProvider} from "styled-components"
import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
* {
  padding: 1;
  margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.black};
  background-color: ${props=> props.theme.backgroundHome};
}

a{
  color: ${props => props.theme.primary};
  font-weight:bold;
  text-decoration:none;
  transition: ease-in-out 0.6s;
}

a:hover{
  color: ${props => props.theme.primaryHover};
}
`

function App ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App