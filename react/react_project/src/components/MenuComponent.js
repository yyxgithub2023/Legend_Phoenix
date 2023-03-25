import React, { Component } from 'react';
import { Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

class MenuComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Uthappizza',
                    image: 'https://www.example.com/uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                    id: 1,
                    name: 'Zucchipakoda',
                    image: 'https://www.example.com/zucchipakoda.png',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 2,
                    name: 'Vadonut',
                    image: 'https://www.example.com/vadonut.png',
                    category: 'appetizer',
                    label: 'New',
                    price: '1.99',
                    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
                },
                {
                    id: 3,
                    name: 'ElaiCheese Cake',
                    image: 'https://www.example.com/elaicheesecake.png',
                    category: 'dessert',
                    label: '',
                    price: '2.99',
                    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
                }
            ]
        }
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    {/*<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>*/}
                    {/*    <Menu.Item key={dish.id} title={dish.name}>{dish.name}</Menu.Item>*/}
                    {/*</Menu>*/}
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        {dish.name}
                    </Menu.Item>
                </div>
            );
        });

        return (
            <div className="container">
                {/*<div className="row">*/}
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{height: '100%'}}>
                    {menu}
                </Menu>
                {/*</div>*/}
            </div>
        );
    }
}

export default MenuComponent;
