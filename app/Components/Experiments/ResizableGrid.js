import React from 'react';
// import { useDrag } from 'react-dnd'
// import { ItemTypes } from './Constants'

class ResizableGrid extends React.Component{

    constructor(props) {
        super(props)

        this._anEditableListLocalStorageKey = 'ResizableGridItems'

        this.heightRef = React.createRef()
        this.widthRef = React.createRef()

        this.state = {
            height: 1,
            width: 1,
            error: false,
            isLoaded: true
        }
    }

    componentDidMount() {
        
    }

    handleUpdateHeight(e) {
        this.setState({
            height: parseInt(e.target.value)
        })
    }

    handleUpdateWidth(e) {
        this.setState({
            width: parseInt(e.target.value)
        })
    }

    render(){
        const { height, width, error, isLoaded } = this.state

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <React.Fragment>
                    <p>
                        <label htmlFor="height">Height</label><input id="height" defaultValue="1" ref={this.heightRef} onChange={this.handleUpdateHeight.bind(this)}></input><br />
                        <label htmlFor="width">Width</label><input id="width" defaultValue="1" ref={this.widthRef} onChange={this.handleUpdateWidth.bind(this)}></input>
                    </p>
                    <p>
                        {
                            [...Array(height).keys()].map(() => {
                                return(<React.Fragment>
                                    {[...Array(width).keys()].map((item) =>
                                        <input key={item} defaultValue="a"></input>
                                    )}
                                    <br />
                                </React.Fragment>)
                            })
                        }
                    </p>
                </React.Fragment>
            )
        }
    }
}

export default ResizableGrid
