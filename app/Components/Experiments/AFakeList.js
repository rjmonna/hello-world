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
 /*           .then(
                 (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            ) */
/*         this.setState({
            error: {
                message: "List not implemented"
            },
            isLoaded: false,
            items: {}
        }) */
        this.setState({
            error: null,
            isLoaded: true,
            items: {"status":"OK","code":200,"total":10,"data":[{"title":"Totam quas fugit magnam qui.","description":"Tempore hic est exercitationem at enim soluta. Est aut voluptas iste pariatur quia et facilis. Fugiat consequatur beatae inventore. Deleniti accusamus alias ab corrupti.","url":"http:\/\/placeimg.com\/640\/480\/any"},{"title":"Nihil eveniet non explicabo.","description":"Ipsam nobis minima doloribus eum. Ut accusamus minima porro. Nihil non veritatis maiores temporibus repellat.","url":"http:\/\/placeimg.com\/640\/480\/any"},{"title":"Quo ea itaque ut.","description":"Neque porro eveniet sint magni vel aut voluptas. Laborum eaque sed repellat laborum sed alias. Debitis vel quibusdam id aut quo.","url":"http:\/\/placeimg.com\/640\/480\/any"},{"title":"Iure neque repellat omnis in.","description":"Enim maxime aperiam sit eveniet. Qui minus molestias consequatur quos voluptates quia facere nulla.","url":"http:\/\/placeimg.com\/640\/480\/any"},{"title":"Labore et numquam asperiores.","description":"Dicta excepturi tempora cupiditate aliquid alias voluptates. Atque eum et autem dolorem aliquid quaerat eum. Totam et quia molestiae sed. Libero ad maxime corrupti eum.","url":"http:\/\/placeimg.com\/640\/480\/any"},{"title":"Corrupti et commodi aut.","description":"Dolorum veniam veniam natus et voluptatum rem. Esse et quasi autem nihil illum provident est. Et quibusdam minus quis et error ipsam ipsa.","url":"http:\/\/placeimg.com\/640\/480\/any"},{"title":"Laudantium maiores quod ut.","description":"Cupiditate eveniet voluptatem laborum excepturi et dolor unde. Sunt est consequatur dolores ducimus officia. Non similique velit dolore odio ut odit amet.","url":"http:\/\/placeimg.com\/640\/480\/any"},{"title":"Ut libero itaque quibusdam.","description":"Sit ut eveniet odit quo et voluptatem. Itaque enim et omnis cumque. Ratione sint dolores sit ipsam.","url":"http:\/\/placeimg.com\/640\/480\/any"},{"title":"Id dolorum sapiente autem.","description":"Dolore expedita qui nulla praesentium qui ut sed unde. Nisi atque sunt tenetur necessitatibus. Laboriosam consequatur sunt est quisquam.","url":"http:\/\/placeimg.com\/640\/480\/any"},{"title":"Omnis ut ut quo in.","description":"Ea rerum aliquam ut. Expedita ipsum minima id sequi fugit ullam recusandae. Dolorum inventore autem voluptas provident sunt facilis. Et natus a tempore numquam voluptas.","url":"http:\/\/placeimg.com\/640\/480\/any"}]}
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
