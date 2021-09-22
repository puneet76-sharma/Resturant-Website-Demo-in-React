import React from 'react'

const MenuCard = ({data}) => {
    return (
        <>
            <section className="main-card--cointainer">
            {data.map((item)=>{
                const {id,category,name,description,image}=item
                return(
                    <div className="card-container" key={item.id}>

                    <div className="card">
    
    
                        <div className="card-body">
                            <span className="card-number card-circle subtle">{id}</span>
                            <span className="card-author subtle">{category}</span>
                            <h2 className="card-title">{name}</h2>
                            <span className="card-description subtle">{description}</span>
                            <div className="card-read">Read</div>
                        </div>
                        <img src={image} alt="menu" className="card-media" />
                        <span className="card-tag subtle">Order Now</span>
    
    
                    </div>
    
                </div> 
                )
            })}
            </section>
        </>
    )
}

export default MenuCard
