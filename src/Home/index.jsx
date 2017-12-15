import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Footer from './Footer';
import './static/style';

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  state = {
    isFirstScreen: true,
    isMobile,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === 'enter',
    });
  }
  render() {
    return (
      [
        <Header key="header" isFirstScreen={this.state.isFirstScreen} isMobile={this.state.isMobile} />,
        <Banner key="banner" onEnterChange={this.onEnterChange} />,
        <Page1 key="page1" isMobile={this.state.isMobile} />,
        <Page2 key="page2" />,
        <Page3 key="page3" isMobile={this.state.isMobile} />,
        <Page4 key="page4" />,
        <Footer key="footer" />,
        <DocumentTitle title="Ant Design - 一个 UI 设计语言" key="title" />,
      ]
    );
  }
}
export default Home;
