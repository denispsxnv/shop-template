import React from 'react';
import styles from './filter.module.css'
// import { useState } from 'react';

const Filter = (props) => {  

    return (
        <div className={styles.filter}>
            <div className={styles.wrapper}>
                <div className={styles["icon-wrapper"]}>
                    <img src="/images/filter-icon.png" alt="" />
                    <p className={styles["filter-text"]}>Filter</p>
                    <img src="/images/grid-view-icon.png" alt=""
                        onClick={() => props.setGridView(true)}
                    />
                    <img src="/images/list-view-icon.png" alt=""
                        onClick={() => props.setGridView(false)}
                    />
                    <p className={styles["amount-text"]}>Showing 1-16 of 32 results</p>
                </div>
                <div className={styles.controls}>
                    <p className={styles.amount}>
                        Show
                        <input type="number" className={styles["amount-number"]}/>    
                    </p>
                    <p>
                        Sort by 
                        <select onChange={e => props.setSorted(e.target.value)} value={props.sorted}>
                            <option value="newest">Newest</option>
                            <option value="newestDesc">Newest Desc</option>
                            <option value="price">Price</option>
                            <option value="priceDesc">Price Desc</option>
                        </select>
                    </p>    
                </div>    
            </div>
        </div>
    );
};

export default Filter;