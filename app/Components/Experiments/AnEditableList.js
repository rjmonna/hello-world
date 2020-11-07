import React from 'react';

class AnEditableList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: {}
        };
    }

    componentDidMount() {
        this.setState({
            isLoaded: true,
            items: { data: [{ id: 1, value: 'A' }, { id: 2, value: 'B' }] }
        });
    }

    render(){
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <React.Fragment>
                    <ul>
                        {items.data.map(item => (
                            <li key={item.id}><input defaultValue={item.value}></input></li>
                        ))}
                    </ul>
                </React.Fragment>
            )
        }
    }
}

export default AnEditableList
