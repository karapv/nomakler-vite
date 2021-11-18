
import {HomeProps} from "./Home.props";
import Banner from "../../organisms/Home/Banner";
import ActualApartments from "../../organisms/Home/ActualApartments";
import Advantages from "../../organisms/Home/Advantages";
import React from "react";
const Home = ({
                  homeBanner,
                  advantages = [],
                  apartments = [],
                  ...props}:HomeProps):JSX.Element => {
    return (
      <>
        <Banner {...props} img={homeBanner.img} title={homeBanner.title} description={homeBanner.description} />
        <Advantages {...props} advantages={advantages} />
        <ActualApartments apartments={apartments} />
      </>
    )
}
export default Home