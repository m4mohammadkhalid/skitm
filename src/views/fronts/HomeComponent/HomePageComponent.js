import React from 'react'
import Header from '../Header'
import HomeAbout from '../HomeAbout'
import HomeEvent from '../HomeEvent'
import HomeFooter from '../HomeFooter'
import HomeInquiry from '../HomeInquiry'
import HomeOurClient from '../HomeOurClient'
import HomeSlider from '../HomeSlider'
import HomeTeacher from '../HomeTeacher'
import HomeTraining from '../HomeTraining'
import NoticeSlider from '../NoticeSlider'
import OrganizedQuality from '../OrganizedQuality'
import OurFaculty from '../OurFaculty'
import PopularCourses from '../PopularCourses'
import SelectionCounter from '../SelectionCounter'
import VideoSection from '../VideoSection'
import WhyChose from '../WhyChose'
import HomeMap from '../HomeMap'
import SchoolTime from '../SchoolTime'
import HeaderLogin from '../HeaderLogin'
import LogoDetails from '../LogoDetails'

const HomePageComponent = () => {
    return (

        <>
            <HeaderLogin />
            <LogoDetails />

            <HomeSlider />
            <Header />
            <NoticeSlider />

            <SchoolTime />
            <HomeAbout />

            <OrganizedQuality />
            <WhyChose />
            <HomeInquiry />

            <PopularCourses />

            <VideoSection />
            <OurFaculty />

            <SelectionCounter />
            <HomeEvent />
            <HomeTeacher />
            <HomeOurClient />
            <HomeTraining />
            <HomeMap />
            <HomeFooter />

        </>
    )
}

export default HomePageComponent
