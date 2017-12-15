import React from 'react';
import PropTypes from 'prop-types';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import GitHubButton from 'react-github-button';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';

function typeFunc(a) {
  if (a.key === 'line') {
    return 'right';
  } else if (a.key === 'button') {
    return 'bottom';
  }
  return 'left';
}

export default function Banner({ onEnterChange }) {
  return (
    <section className="page banner-wrapper">
      <ScrollElement
        className="page"
        id="banner"
        onChange={({ mode }) => onEnterChange(mode)}
        playScale={0.9}
      >
        <QueueAnim className="banner-text-wrapper" type={typeFunc} delay={300} key="banner">
          <h2 key="h2">ANT <p>DESIGN</p></h2>
          <p key="content">一个 UI 设计语言</p>
          <span className="line" key="line" />
          <div key="button1" className="start-button clearfix">
            <a>
              设计规范
            </a>
            <a>
              开发指引
            </a>
          </div>
          <GitHubButton
            key="github-button"
            type="stargazers"
            namespace="ant-design"
            repo="ant-design"
          />
        </QueueAnim>
        <Icon type="down" className="down" />
      </ScrollElement>
    </section>
  );
}
Banner.propTypes = {
  onEnterChange: PropTypes.func,
};
