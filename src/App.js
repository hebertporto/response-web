import React from 'react';
import {
  Container,
  // ContactBar,
  Content,
  Page,
  Sidebar,
  Topbar,
} from './styles';

function App() {
  return (
    <Page>
      <Container>
        <Topbar />
        <Sidebar />
        {/* <ContactBar /> */}
        <Content />
      </Container>
    </Page>
  );
}

export default App;
