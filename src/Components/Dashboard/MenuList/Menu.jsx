import React from 'react';
import Action from './action';
import ProductDetails from './productDetails';
import Search from './search';
import Status from './status';
import { StyledObject } from '../../StyleObject';

const Menu = ()=>{


    return(
        <>
                <Search />
                <div style={StyledObject.mainMenu}>
                        <table style={{width: '100%'}}>
                            <thead style={StyledObject.thead}>
                                <th style={StyledObject.th}>Product Details</th>
                                <th style={StyledObject.th}>Stock</th>
                                <th style={StyledObject.th}>Status</th>
                                <th style={StyledObject.th}>Action</th>
                            </thead>
                            <tbody>
                                <tr style={StyledObject.tr}>
                                    <td style={StyledObject.te}>
                                        <ProductDetails imgSrc="/assets/img/1.png"
                                        firstText="Basmati Rice with Sauce and Shredded Beaf"
                                        secondText="N6,000"
                                        thirdText="Main"
                                        />
                                    </td>
                                    <td style={StyledObject.td}>24</td>
                                    <td style={StyledObject.td}><Status /></td>
                                    <td style={StyledObject.td}><Action /></td>
                                </tr>
                                <tr style={StyledObject.tr}>
                                <td style={StyledObject.te}>
                                        <ProductDetails imgSrc="/assets/img/4.png"
                                        firstText="Egg frittata"
                                        secondText="N3,500"
                                        thirdText="Breakfast"
                                        />
                                    </td>
                                    <td style={StyledObject.td}>32</td>
                                    <td style={StyledObject.td}><Status /></td>
                                    <td style={StyledObject.td}><Action /></td>
                                </tr>
                                <tr style={StyledObject.tr}>
                                <td style={StyledObject.te}>
                                        <ProductDetails imgSrc="/assets/img/3.png"
                                        firstText="Jambalaya Rice"
                                        secondText="N8,500"
                                        thirdText="Main"
                                        />
                                    </td>
                                    <td style={StyledObject.td}>12</td>
                                    <td style={StyledObject.td}><Status /></td>
                                    <td style={StyledObject.td}><Action /></td>
                                </tr>
                                <tr style={StyledObject.tr}>
                                <td style={StyledObject.te}>
                                        <ProductDetails imgSrc="/assets/img/4.png"
                                        firstText="Mixed Grill"
                                        secondText="N5,000"
                                        thirdText="Grill"
                                        />
                                    </td>
                                    <td style={StyledObject.td}>11</td>
                                    <td style={StyledObject.td}><Status /></td>
                                    <td style={StyledObject.td}><Action /></td>
                                </tr>
                                <tr style={StyledObject.tr}>
                                <td style={StyledObject.te}>
                                        <ProductDetails imgSrc="/assets/img/9.png"
                                        firstText="Peppered Snail"
                                        secondText="N6,000"
                                        thirdText="Grill"
                                        />
                                    </td>
                                    <td style={StyledObject.td}>10</td>
                                    <td style={StyledObject.td}><Status /></td>
                                    <td style={StyledObject.td}><Action /></td>
                                </tr>
                                <tr style={StyledObject.tr}>
                                <td style={StyledObject.te}>
                                        <ProductDetails imgSrc="/assets/img/6.png"
                                        firstText="Chicked Spaghetti"
                                        secondText="N9,000"
                                        thirdText="Pasta"
                                        />
                                    </td>
                                    <td style={StyledObject.td}>9</td>
                                    <td style={StyledObject.td}><Status /></td>
                                    <td style={StyledObject.td}><Action /></td>
                                </tr>
                                <tr style={StyledObject.tr}>
                                <td style={StyledObject.te}>
                                        <ProductDetails imgSrc="/assets/img/7.png"
                                        firstText="Sea food Fried Rice"
                                        secondText="N9,000"
                                        thirdText="Main"
                                        />
                                    </td>
                                    <td style={StyledObject.td}>5</td>
                                    <td style={StyledObject.td}><Status /></td>
                                    <td style={StyledObject.td}><Action /></td>
                                </tr>
                                <tr style={StyledObject.tr}>
                                <td style={StyledObject.te}>
                                        <ProductDetails imgSrc="/assets/img/8.png"
                                        firstText="Tuna Stocked pancakes"
                                        secondText="N4,500"
                                        thirdText="Breakfast"
                                        />
                                    </td>
                                    <td style={StyledObject.td}>4</td>
                                    <td style={StyledObject.td}><Status /></td>
                                    <td style={StyledObject.td}><Action /></td>
                                </tr>
                            </tbody>
                        </table>
            </div>
        </>
    )
}

export default Menu;