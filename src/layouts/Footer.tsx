import React from "react"
import './Footer.css'
import beian from '../assets/beian.png'

export default () => {
    return (
      <div className="footer">
        <div className="beian">
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502005659"
            className="gong-an-beian"
          >
            <img
              src={beian}
              style={{
                float: "left",
              }}
            />
            <p className="gong-an-beian-number">粤公网安备 44030502005659号</p>
          </a>
          <a rel="nofollow" href="http://www.beian.miit.gov.cn" target="_blank">
            粤ICP备20052074
          </a>
        </div>
        <div className="copyright">Copyright © 2020 jkvim</div>
      </div>
    );
}