import React from 'react';

class AFakeList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: {}
        };
    }

    componentDidMount() {        
       fetch("https://fakerapi.it/api/v1/images?_quantity=10")
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
            )
    }

    render(){
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <ul>
                    {items.data.map(item => (
                        <li key={item.title}>{item.title}</li>
                    ))}
                </ul>
            )
        }
    }
}

export default AFakeList
