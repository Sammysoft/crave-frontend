import React from "react";
import MoreDetail from "./moredetails";
import Offer from './offer';
import Image from "./image";
import Image2 from './image_left'
import Image1 from '../../assets/left_image.png';
import Image4 from '../../assets/left_image2.png'
import { StyledObject } from "../../StyleObject";
import Merchant from "./register_merchant";
import styled from "styled-components";
import LearnMoreButton from "./learn_more_button";
import Newsletter from "./newsletter";
import Footer from "./footer";


const Section=()=>{

    const LearnMoreWrapper = styled.div`
    width: 98%;
    align-items: right;
    text-align: right;
    padding: 10px;
    margin-top: 50px
    `
    var displayText = [
        {
        head: 'Good food is Good mood!',
        body: `Discover continental dishes and more,
                    served by restaurants that partner with us`
        },
        {
        head: 'Satisfying your cravings',
        body: `Personalized experience. Get the best meal
                    options for your dietary preference`
        },
        {
        head: 'Skip wait time',
        body: `Experience the best your neighbourhood has to offer
                        all in  one app`
        },
        {
        head: 'Partner with us',
        body: `Discover a world of customers now within your reach
                    when you sign up as a merchant`
        }
    ]

    return(
        <>
        <div style={StyledObject.weOfferWrapper}>
            <Offer />
            <MoreDetail
                imageSrc={Image1}
                head={displayText[0].head}
                body={displayText[0].body}
            />
            <MoreDetail
                image={<Image />}
                head={displayText[1].head}
                body={displayText[1].body}
            />
            <MoreDetail
                imageSrc={Image4}
                head={displayText[2].head}
                body={displayText[2].body}
            />
            <MoreDetail
                image={<Image2 />}
                head={displayText[3].head}
                body={displayText[3].body}
            />
              <Merchant />

              <LearnMoreWrapper>
                  <LearnMoreButton />
              </LearnMoreWrapper>

              <Newsletter />
              <Footer />
        </div>


        </>
    )
}

export default Section;