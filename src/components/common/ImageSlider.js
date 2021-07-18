import React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'

const ImageSliderBlock = styled.div`
    .carousel {
        width:900px;
        height:450px;
        margin: auto;
    }
    @media (max-width: 900px) {
    .carousel {
      width:auto;
      height:auto;
    }
}
`;
const ImageSlider = () => {
    return (
        <ImageSliderBlock>
            <Carousel fade controls={true} interval={4000} pause={false} prevLabel={null} nextLabel={null}>
                <Carousel.Item>
                    <img
                    width={900}
                    height={450}
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                    alt="First slide"
                    />

                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    width={900}
                    height={450}
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    width={900}
                    height={450}
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </ImageSliderBlock>
    )
}

export default ImageSlider
