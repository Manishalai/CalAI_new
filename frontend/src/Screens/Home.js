import React from 'react'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Courses from '../courses/Courses'
import Speaker from '../speakers/Speaker'
import Slider from '../slider/Slider'
export const Home = () => {
  return (
    <>
    <Header />
      <Navbar />
      <Courses />
      <Speaker />
      <Slider />
      <Footer />
      </>
  )
}
