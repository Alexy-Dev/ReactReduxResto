import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {           //компонент жизненного цикла
        this.props.menuRequested();
        const {RestoService} = this.props;    //приходит из <Provider></Provider>
        RestoService.getMenuItems()             //делаем запрос на сервер
        .then(res => this.props.menuLoaded(res))    //получаем массив м записываем в стейт
        .catch(error => this.props.menuError());
    }

    render() {
        const {menuItems, loading, error} = this.props;  //получаем новые данные из store для отображения на странице
        if (error){
            return <Error/>
        }
        if (loading) {
            return <Spinner/>
        }

        const items = menuItems.map(menuItem => {
            return (
            <MenuListItem key={menuItem.id} menuItem={menuItem}/>
            )
        })
    

        return (
            <View items = {items}/>
        )
    }
};

const mapStateToProps = (state) => {    //какие именно пропсы из state надо использовать для работы connect
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps = {        //простая форма записи, благодаря bindActionCreator и connect
    menuLoaded,
    menuRequested,
    menuError
}


const View = ({items}) => {

    return (
        <ul className="menu__list">
            {items}
        </ul>
    ) 
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));   //функция connect позволяет связать компонент и redux, WithRestoService передает в компонент сервис, как props для записи в store