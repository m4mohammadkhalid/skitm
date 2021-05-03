import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../Test1.css'
import '../../Test2.css'
import { Link } from "react-router-dom";
const HomeSlider = () => {
  const items = [
    <div className="item" data-value="1"><img className="item245" alt="khalid" src="/assets/images/slide-1.jpg" /></div>,
    <div className="item" data-value="2"><img className="item245" alt="khalid" src="/assets/images/slide-2.jpg" /></div>,
    <div className="item" data-value="3"><img className="item245" alt="khalid" src="/assets/images/slide-3.jpg" /></div>,
    <div className="item" data-value="4"><img className="item245" alt="khalid" src="/assets/images/slide-4.jpg" /></div>,
    <div className="item" data-value="5"><img className="item245" alt="khalid" src="/assets/images/slide-5.jpg" /></div>,
];
  return (
      <>
      <div className="container-fluid">
  <div className="row">
    <div className="col-sm-9 col-md-9 col-lg-9" >
    <AliceCarousel
    autoPlay
    
    autoPlayStrategy="none"
    autoPlayInterval={1000}
    animationDuration={1000}
    animationType="fadeout"
    infinite
    touchTracking={false}
    disableDotsControls
    disableButtonsControls
    items={items}
/>
    </div>
    <div className="col-sm-3 col-md-3 col-lg-3" >
    <marquee behavior="scroll" align="absup" direction="up" scrollamount={6} scrolldelay={160} height={300} onMouseOver="this.stop();" onMouseOut="this.start();">
                                    <img style={{ height: '30px', width: '36px' }} src="http://www.skitm.edu.in/new.gif" alt="khalid"    />
                                    <Link to="notice/BBA.pdf" style={{ color: 'red', textDeclaration: 'nonetarget:_blank' }}> Lorem Ipsum is simply dummy text of the printing.</Link><br /><br />
                                    <img style={{ height: '30px', width: '36px' }} src="http://www.skitm.edu.in/new.gif" alt="khalid"    />
                                    <Link to="notice/B.Tech 3rd sem G  March-2021.pdf" style={{ color: 'red', textDeclaration: 'nonetarget:_blank' }}> Lorem Ipsum is simply dummy text of the printing</Link><br /><br />
                                    <img style={{ height: '30px', width: '36px' }} src="http://www.skitm.edu.in/new.gif" alt="khalid"    />
                                    <Link to="notice/B.Tech 3rd sem F  March-2021.pdf" style={{ color: 'red', textDeclaration: 'nonetarget:_blank' }}> Lorem Ipsum is simply dummy text of the printing</Link><br /><br />
                                    <img style={{ height: '30px', width: '36px' }} src="http://www.skitm.edu.in/new.gif" alt="khalid"    />
                                    <Link to="notice/B.Tech 5th sem G  March-2021.pdf" style={{ color: 'red', textDeclaration: 'nonetarget:_blank' }}> Lorem Ipsum is simply dummy text of the printing</Link><br /><br />
                                    <img style={{ height: '30px', width: '36px' }} src="http://www.skitm.edu.in/new.gif" alt="khalid"  />
                                    <Link to="notice/B.Tech 5th sem F  March-2021.pdf" style={{ color: 'red', textDeclaration: 'nonetarget:_blank' }}> Lorem Ipsum is simply dummy text of the printing
                                      Lorem Ipsum is simply dummy text of the printing
                                      Lorem Ipsum is simply dummy text of the printing</Link><br /><br />
                                    <img style={{ height: '30px', width: '36px' }} src="http://www.skitm.edu.in/new.gif" alt="khalid"    />
                                    <Link to="notice/B.Tech 7th sem F  March-2021.pdf" style={{ color: 'red', textDeclaration: 'nonetarget:_blank' }}> Theory datesheet of B.tech 7th sem  March 2021</Link><br /><br />
                                    <img style={{ height: '30px', width: '36px' }} src="http://www.skitm.edu.in/new.gif" alt="khalid"    />
                                    <Link to="notice/m.tech21.pdf" style={{ color: 'red', textDeclaration: 'nonetarget:_blank' }}> Theory datesheet of M.tech 3rd sem  March 2021</Link><br /><br />
                                    <img style={{ height: '30px', width: '36px' }} src="http://www.skitm.edu.in/new.gif" alt="khalid"    />
                                    <Link to="notice/2nd sessional datesheet 2021.pdf" style={{ color: 'red', textDeclaration: 'nonetarget:_blank' }}>  2nd Sessional datesheet for B.tech,M.tech &amp; BBA (odd sems)Jan 2021</Link><br /><br />
                                    <img style={{ height: '30px', width: '36px' }} src="http://www.skitm.edu.in/new.gif" alt="khalid"    />
                                    <Link to="notice/assignment.pdf" style={{ color: 'red', textDeclaration: 'nonetarget:_blank' }}> Notice Regarding Online Submission of Assignments, Practical files,dissertation report July 2020</Link><br /><br />
                                    <img style={{ height: '30px', width: '36px' }} src="http://www.skitm.edu.in/new.gif" alt="khalid"  />
                                    <Link to="notice/B.Tech 5th sem F  March-2021.pdf" style={{ color: 'red', textDeclaration: 'nonetarget:_blank' }}> Lorem Ipsum is simply dummy text of the printing
                                       Lorem Ipsum is simply dummy text of the printing
                                       Lorem Ipsum is simply dummy text of the printing</Link><br /><br />
                                    <img style={{ height: '30px', width: '36px' }} src="http://www.skitm.edu.in/new.gif" alt="khalid"    />
                                    <Link to="notice/B.Tech 7th sem F  March-2021.pdf" style={{ color: 'red', textDeclaration: 'nonetarget:_blank' }}> Theory datesheet of B.tech 7th sem  March 2021</Link><br /><br />
                                    <img style={{ height: '30px', width: '36px' }} src="http://www.skitm.edu.in/new.gif" alt="khalid"    />
                                    <Link to="notice/m.tech21.pdf" style={{ color: 'red', textDeclaration: 'nonetarget:_blank' }}> Theory datesheet of M.tech 3rd sem  March 2021</Link><br /><br />
                                    <img style={{ height: '30px', width: '36px' }} src="http://www.skitm.edu.in/new.gif" alt="khalid"    />
                                    <Link to="notice/2nd sessional datesheet 2021.pdf" style={{ color: 'red', textDeclaration: 'nonetarget:_blank' }}>  2nd Sessional datesheet for B.tech,M.tech &amp; BBA (odd sems)Jan 2021</Link><br /><br />
                                    <img style={{ height: '30px', width: '36px' }} src="http://www.skitm.edu.in/new.gif" alt="khalid"    />
                                    <Link to="notice/assignment.pdf" style={{ color: 'red', textDeclaration: 'nonetarget:_blank' }}> Notice Regarding Online Submission of Assignments, Practical files,dissertation report July 2020</Link><br /><br />
                               
                                </marquee>
    </div>
  </div>
</div>
    
</>
  )
}

export default HomeSlider
