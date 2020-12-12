import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselFn() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/OIP.qBNlFWQ9G_RPVm7tbZaXOwHaEN?w=327&h=186&c=7&o=5&dpr=1.25&pid=1.7?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="http://humbeez.in/logo.png?text=Second slide&bg=282c34"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/OIP.0SMGixBwqTr6HZIAoouB1gHaD4?w=334&h=180&c=7&o=5&dpr=1.25&pid=1.7?text=Third slide&bg=20232a"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFn;