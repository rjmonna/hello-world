import React from 'react';

class ResizableGrid extends React.Component{

    constructor(props) {
        super(props)

        this._anEditableListLocalStorageKey = 'ResizableGridItems'

        this.state = {
            error: null,
            isLoaded: false,
            items: {}
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true,
            items: {}
        })
    }

    render(){
        const { error, isLoaded, items } = this.state

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <React.Fragment>
                    <input ></input>
                </React.Fragment>
            )
        }
    }
}

export default ResizableGrid
