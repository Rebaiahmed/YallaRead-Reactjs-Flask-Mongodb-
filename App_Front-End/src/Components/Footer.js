import React, { Component } from 'react';

import { Footer , FooterSection, FooterLinkList , FooterDropDownSection} from 'react-mdl';


class FooterComponent extends Component {
  render() {
    return (
      <Footer size="mini">
      <FooterSection type="left" logo="Title">
          <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>
          </FooterLinkList>
      </FooterSection>
  </Footer>

    );
  }
}

export default  FooterComponent;
