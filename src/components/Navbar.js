import React from 'react'

const Navbar = ({filterItem,cat}) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">

                    {
                        cat.map((item,id)=>{
                            return(
                            <button key={id} className="btn-group__item" onClick={()=>filterItem(item)}>{item}</button>
                            ) 
                        })
                    }

                </div>
            </nav> 
        </>
    )
}

export default Navbar
