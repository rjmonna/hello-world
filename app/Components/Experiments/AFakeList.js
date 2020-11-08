import React from 'react';

class AFakeList extends React.Component{
    constructor(props) {
        super(props);

        this.numberOfItemsRef = React.createRef()
        this.typeRef = React.createRef()

        this.state = {
            error: null,
            isLoaded: false,
            numberOfItems: 10,
            items: {},
            imageType: 'kittens'
        };
    }

    componentDidMount() {
        this.updateList();
    }

    updateList() {
        fetch(`https://fakerapi.it/api/v1/images?_type=${this.state.imageType}&_quantity=${this.state.numberOfItems}`)
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
            )};

    handleChangeNumberOfItems(e) {
        this.setState({ numberOfItems: Number(e.target.value) },
            () => this.updateList()
        );
    }

    handleChangeType(e) {
        this.setState({ imageType: e.target.value },
            () => this.updateList()
        )
    }

    render(){
        const { error, isLoaded, items, imageType } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <React.Fragment>
                    <label htmlFor="numberOfItems">Number of items</label>
                    <input name="numberOfItems" ref={this.numberOfItemsRef} defaultValue="10" onChange={this.handleChangeNumberOfItems.bind(this)}></input>
                    <br /><br />
                    <label htmlFor="type">Type</label>
                    <select name="type" ref={this.typeRef} defaultValue={imageType} onChange={this.handleChangeType.bind(this)}>
                        <option value="any">Any</option>
                        <option value="animals">Animals</option>
                        <option value="architecture">Architecture</option>
                        <option value="nature">Nature</option>
                        <option value="people">People</option>
                        <option value="tech">Tech</option>
                        <option value="kittens">Kittens</option>
                        <option value="pokemon">Pokemon</option>
                    </select>
                    <br /><br />
                    <ul>
                        {items.data.map(item => (
                            <li key={item.title}><img src={item.url}></img><br/>{item.description}</li>
                        ))}
                    </ul>
                </React.Fragment>
            );
        }
    }
}

export default AFakeList
