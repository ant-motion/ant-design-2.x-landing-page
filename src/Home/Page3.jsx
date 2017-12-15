import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';

export default function Page3({ isMobile }) {
  return (
    <ScrollOverPack id="page3" className="content-wrapper page">
      <TweenOne
        key="image"
        className="image3 image-wrapper"
        animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
        style={{ transform: 'translateX(-100px)', opacity: 0 }}
      />
      <QueueAnim
        className="text-wrapper"
        key="text"
        type={isMobile ? 'bottom' : 'right'}
        leaveReverse
        style={{ top: '40%' }}
      >
        <h2 key="h2">丰富的基础组件'</h2>
        <p key="p" style={{ maxWidth: 280 }}>
          丰富、灵活、实用的基础组件，为业务产品提供强有力的设计支持。
        </p>
        <div key="button">
          <a>
            <Button type="primary" size="large">
              了解更多
              <Icon type="right" />
            </Button>
          </a>
        </div>
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page3.propTypes = {
  isMobile: PropTypes.bool,
};
