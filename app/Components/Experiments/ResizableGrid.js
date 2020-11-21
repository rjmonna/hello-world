import React from 'react';
// import { useDrag } from 'react-dnd'
// import { ItemTypes } from './Constants'

class ResizableGrid extends React.Component{

    constructor(props) {
        super(props)

        this._resizableGridLocalStorageKey = 'ResizableGridData'

        this.heightRef = React.createRef()
        this.widthRef = React.createRef()

        this.state = {
            height: 1,
            width: 1,
            error: false,
            isLoaded: false
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    handleUpdateHeight(e) {
        const value = e.target.value
        
        if (value) {
            this.setState({
                height: parseInt(value)
            })
        }
    }

    handleUpdateWidth(e) {
        const value = e.target.value
        
        if (value) {
            this.setState({
                width: parseInt(value)
            })
        }
    }

    render(){
        const { height, width, error, isLoaded } = this.state

        var options = <p>
                        <label htmlFor="height">Height</label><input id="height" defaultValue="1" ref={this.heightRef} onChange={this.handleUpdateHeight.bind(this)}></input><br />
                        <label htmlFor="width">Width</label><input id="width" defaultValue="1" ref={this.widthRef} onChange={this.handleUpdateWidth.bind(this)}></input>
                    </p>

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <React.Fragment>
                    {options}
                    <p>
                        {
                            [...Array(height).keys()].map(() => {
                                return(<React.Fragment>
                                    <div>
                                        {[...Array(width).keys()].map((item) =>
                                            <input key={item} defaultValue="a"></input>
                                        )}
                                    </div>
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
