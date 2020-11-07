import React from 'react';

class AFakeList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            numberOfItems: 10,
            items: {}
        };
    }

    componentDidMount() {
        this.updateList();
    }

    updateList() {
        fetch(`https://fakerapi.it/api/v1/images?_quantity=${this.state.numberOfItems}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        error,
                        isLoaded: true
                    })
                }
            )}

    handleChangeNumberOfItems(e) {
        this.setState( { numberOfItems: Number(e.target.value) })
        this.updateList()
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
                            <li key={item.title}>{item.title}</li>
                        ))}
                    </ul><br />
                    <label htmlFor="numberOfItems">Number of items</label><input id="numberOfItems" defaultValue="10" onChange={this.handleChangeNumberOfItems.bind(this)}></input>
                </React.Fragment>
            )
        }
    }
}

export default AFakeList
