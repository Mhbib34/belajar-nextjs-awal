import React from "react";
import styles from "../products/Main/Products.module.scss";

const DetailProducts = ({ item }) => {
  return (
    <div key={item.id} className={styles.product_content_item}>
      <div className={styles.product_content_item_image}>
        <img src={item.image} alt={item.name} />
      </div>
      <h4 className={styles.product_content_item_name}>{item.name}</h4>
      <p className={styles.product_content_item_category}>{item.category}</p>
      <p className={styles.product_content_item_price}>
        {item.price &&
          item.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
      </p>
    </div>
  );
};

export default DetailProducts;
