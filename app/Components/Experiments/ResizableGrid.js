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
        const value = parseInt(e.target.value)
        
        if (Number.isInteger(value)) {
            this.setState({
                height: value
            })
        }
    }

    handleUpdateWidth(e) {
        const value = parseInt(e.target.value)
        
        if (Number.isInteger(value)) {
            this.setState({
                width: value
            })
        }
    }

    handleSaveLocalStorage(e) {
        const data = this.state.items.data;

        window.localStorage.setItem(this._anEditableListLocalStorageKey, JSON.stringify(data))
    }

    handleLoadLocalStorage(e) {
        this.setState({
            isLoaded: true,
            items: {
                data: JSON.parse(window.localStorage.getItem(this._anEditableListLocalStorageKey))
            }
        })
    }

    render(){
        const { height, width, error, isLoaded } = this.state

        var options = <div>
                        <label htmlFor="height">Height</label><input id="height" defaultValue="1" ref={this.heightRef} onChange={this.handleUpdateHeight.bind(this)}></input><br />
                        <label htmlFor="width">Width</label><input id="width" defaultValue="1" ref={this.widthRef} onChange={this.handleUpdateWidth.bind(this)}></input>
                    </div>

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <React.Fragment>
                    <button onClick={this.handleSaveLocalStorage.bind(this)}>Save localStorage</button> <button onClick={this.handleLoadLocalStorage.bind(this)}>Load localStorage</button>
                    <br/><br/>
                    {options}
                    {
                        [...Array(height).keys()].map((rowArray, rowIndex) => {
                            return(<React.Fragment key={rowIndex}>
                                <div>
                                    {[...Array(width).keys()].map((columnArray, columnIndex) =>
                                        <input key={columnIndex} defaultValue="a"></input>
                                    )}
                                </div>
                            </React.Fragment>)
                        })
                    }
                </React.Fragment>
            )
        }
    }
}

export default ResizableGrid
