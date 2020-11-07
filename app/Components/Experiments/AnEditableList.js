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

    handleAddItem(e) {
        const data = this.state.items.data

        data.push({id: data.length + 1, value: 'added'})

        this.setState({
            isLoaded: true,
            items: {
                data: data
            }
        })
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
                    <button onClick={this.handleAddItem.bind(this)}>Add</button>
                    <br /><br />
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
