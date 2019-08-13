import React, { Component } from 'react'

import {
    Nav,
    Button,
    Progress,
    Address,
    Image,
    Collapse,
    Time
} from 'uxd-way'

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav linkUrl='someLink' linkText='link to ...' />
                <br />
                <Button title="lalalalalalal"> Lalalalalala </Button>
                <br />
                <Progress max="100" value="54">Progress</Progress>
                <br />
                <Address>
                    You can contact author at <a href="http://www.somedomain.com/contact">www.somedomain.com</a>.<br />
                    If you see any bugs, please <a href="mailto:webmaster@somedomain.com">contact webmaster</a>.<br />
                    You may also want to visit us:<br />
                    Mozilla Foundation<br />
                    1981 Landings Drive<br />
                    Building K<br />
                    Mountain View, CA 94043-0801<br />
                    USA
                </Address>
                <br/>
                <Image 
                    imgSrc="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                    imgAlt="elephant"
                    imgCaption="This is elephant"
                />
                <br/>
                <Collapse summary="This is interesting content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magnam dolor asperiores similique voluptatibus molestiae ipsum, sunt inventore in saepe.
                </Collapse>
                <br/>
                <Time datetime="21:30">21:30</Time>
            </div>
        )
    }
}
