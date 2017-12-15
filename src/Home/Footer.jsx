
import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Ant Design</h2>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design">
                  GitHub
                </a>
              </div>
              <div>
                <a href="http://pro.ant.design">Ant Design Pro</a>
              </div>
              <div>
                <a href="http://mobile.ant.design">Ant Design Mobile</a>
              </div>
              <div>
                <a href="http://ng.ant.design">NG-ZORRO</a>
                <span> - </span>
                Ant Design of Angular
              </div>
              <div>
                <a target="_blank " href="https://github.com/websemantics/awesome-ant-design">
                  Awesome Ant Design
                </a>
              </div>
              <div>
                <a target="_blank " href="http://ant-design.gitee.io/">
                  国内镜像站点 🇨🇳
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>资源链接</h2>
              <div>
                <a href="http://scaffold.ant.design">Scaffolds</a>
                <span> - </span>
                脚手架市场
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva">dva</a> - 应用框架
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva-cli">dva-cli</a> -
                开发工具
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://motion.ant.design">Ant Motion</a>
                <span> - </span>
                设计动效
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://library.ant.design/">AntD Library</a>
                <span> - </span>
                Axure 部件库
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://ux.ant.design">Ant UX</a>
                <span> - </span>
                页面逻辑素材
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>社区</h2>
              <div>
                <a href="/changelog">
                  更新记录
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design/wiki/FAQ">
                  常见问题
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design">
                  在线讨论 (中文)
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design-english">
                  在线讨论 (English)
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://new-issue.ant.design/">
                  报告 Bug
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design/issues">
                  讨论列表
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://stackoverflow.com/questions/tagged/antd">
                  StackOverflow
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://segmentfault.com/t/antd">
                  SegmentFault
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                <img className="title-icon" src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg" alt="" />
                更多产品
              </h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/">AntV</a>
                <span> - </span>
                数据可视化
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">Egg</a>
                <span> - </span>
                企业级 Node 开发框架
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}>
          <span
            style={{
              lineHeight: '16px', paddingRight: 12, marginRight: 11, borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              隐私权政策
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              权益保障承诺书
            </a>
          </span>
          <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>
          <span style={{ marginRight: 12 }}>Copyright © 蚂蚁金融服务集团</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
