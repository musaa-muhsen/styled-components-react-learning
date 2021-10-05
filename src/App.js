import {Container} from './components/styles/Container.styled';
import Header from './components/Header';
import Footer from './components/Footer';

import Card from './components/Card'
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './components/styles/Global';
import content from './content';

// console.log('1 % 2 =',  1 % 2);
// console.log('2 % 2 =',  2 % 2);
// console.log('3 % 2 =',  3 % 2);

const theme = {
   colors: {
     header: '#ebfbff',
     body: '#fff',
     footer: '#003333'
   },
   mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    <Header />
    <Container>
      <h1>Hello World</h1>
      {content.map((item, index) => (
        <Card key={index} item={item}/>
      ))}
    </Container>
    <Footer />
    </ ThemeProvider>
  );
}

export default App;
