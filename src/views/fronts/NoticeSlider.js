import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-double-marquee';

const NoticeSlider = () => {
    return (
        <>
           <div className="news_ticker bg-warning">
  <div style={{
        width: '100%',
        whiteSpace: 'nowrap',
      }} className="container">
    <Marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
      <Link to="#" target="_blank">Universities the winners if Labor assumes government</Link> ||
      <Link to="#" target="_blank">Overseas students are driving rapid population growth</Link> || 
      <Link to="#" target="_blank">Admission for Ph.D. Programme 2019-20</Link> || 
      <Link to="#" target="_blank">Application form for Provisional Registration for Ph.D</Link> || 
      <Link to="#" target="_blank">Graduates need second degree to become a high earner</Link> ||
      <Link to="#" target="_blank">Eduglobal Portal for students seeking Education Loan</Link> || 
      <Link to="#" target="_blank">Creating inclusive curricula in higher education</Link>
    </Marquee>
  </div>
</div>

        </>
    )
}

export default NoticeSlider
