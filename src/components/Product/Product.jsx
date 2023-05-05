import React from 'react';
import styles from './product.module.css'

const Product = ({img,title,price,date,gridView}) => {
    // const gridView = true
    return (
        <div className={gridView ? styles.card : styles["card-list"]}>
            <img src={img} alt="" className={styles.img} />
            <div className={styles.info}>
                <a href="/" className={styles.name}>
                {title}
                </a>
                <h4 className={styles.price}>
                    {price}
                </h4>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default Product;