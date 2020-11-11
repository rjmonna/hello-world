import React from 'react';

class AnEditableList extends React.Component{

    constructor(props) {
        super(props)

        this._anEditableListLocalStorageKey = 'AnEditableListItems'

        this.state = {
            error: null,
            isLoaded: false,
            items: {}
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true,
            items: { data: [{ id: 1, value: 'A' }, { id: 2, value: 'B' }] }
        })
    }

    handleAddItem(e) {
        const data = this.state.items.data

        data.push({id: Math.max(data.map(i => i.id)) + 1, value: 'added'})

        this.setState({
            isLoaded: true,
            items: {
                data: data
            }
        })
    }

    handleSaveLocalStorage(e) {
        const data = this.state.items.data;

        window.localStorage.setItem(this._anEditableListLocalStorageKey, JSON.stringify(data))
    }

    handleLoadLocalStorage(e){
        this.setState({
            isLoaded: true,
            items: {
                data: JSON.parse(window.localStorage.getItem(this._anEditableListLocalStorageKey))
            }
        })
    }

    handleChangeValue(e) {
        const data = this.state.items.data

        const found = data.find((dataItem) => dataItem.id == e.target.key)

        if (found) {
            found.value = e.target.value
        }

        this.setState({
            isLoaded: true,
            items: {
                data: data
            }
        })
    }

    handleDelete(e) {
        var data = this.state.items.data;

        data = data.filter((currentValue) => currentValue.id != e.target.key)

        this.setState({
            isLoaded: true,
            items: {
                data: data
            }
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
                    <button onClick={this.handleAddItem.bind(this)}>Add</button> <button onClick={this.handleSaveLocalStorage.bind(this)}>Save localStorage</button> <button onClick={this.handleLoadLocalStorage.bind(this)}>Load localStorage</button>
                    <br /><br />
                    <ul>
                        {items.data.map(item => (
                            <li key={item.id}><input defaultValue={item.value} onChange={this.handleChangeValue.bind(this)}></input> <button onClick={this.handleDelete.bind(this)}>Remove</button></li>
                        ))}
                    </ul>
                </React.Fragment>
            )
        }
    }
}

export default AnEditableList
