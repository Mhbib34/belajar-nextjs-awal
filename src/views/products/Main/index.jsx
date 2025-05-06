import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";

const ProductView = ({ product }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product_title}>Product</h1>
      <div className={styles.product_content}>
        {product.length > 0 ? (
          <>
            {product.map((item) => {
              return (
                <div key={item.id} className={styles.product_content_item}>
                  <div className={styles.product_content_item_image}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <h4 className={styles.product_content_item_name}>
                    {item.name}
                  </h4>
                  <p className={styles.product_content_item_category}>
                    {item.category}
                  </p>
                  <p className={styles.product_content_item_price}>
                    {item.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                </div>
              );
            })}
          </>
        ) : (
          <div className={styles.product_content_skeleton}>
            <div className={styles.product_content_skeleton_name} />
            <div className={styles.product_content_skeleton_image} />
            <div className={styles.product_content_skeleton_category} />
            <div className={styles.product_content_skeleton_price} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
