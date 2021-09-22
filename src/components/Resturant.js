import React,{useState} from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu)

    const filterItem=(cat)=>{
        if(cat==='All'){
            setMenuData(Menu)
            return;
        }
        else{        
            const updatedList = Menu.filter((item)=>{
                return cat===item.category
            });
            setMenuData(updatedList);
        };
    }

    const uniqueCat = ['All',...new Set(Menu.map((item)=>{
        return item.category;
    }))]

    const [cat] = useState(uniqueCat)

    return (
        <>
            <Navbar  filterItem={filterItem} cat={cat}/>
            <MenuCard data={menuData}/>
        </>
    )
}

export default Resturant
