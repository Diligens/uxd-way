import React, { Component } from 'react'

import { Menu, Button } from 'uxd-way'

export default class App extends Component {
    render() {
        return (
            <div>
                <Menu linkUrl='someLink' linkText='link to ...' />
                <br/>
                <Button title="lalalalalalal"> Lalalalalala </Button>
            </div>
        )
    }
}
