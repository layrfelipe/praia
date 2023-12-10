import styles from "../../styles/Products.module.scss"
import Image from "next/image"

import heineken from "../../public/images/heineken.png";

export default function Products() {
  return (
      <div className={styles.container}>
        <div className={styles.products}>
            <div className={styles.productContainer}>
                <div className={styles.imageContainer}>
                    <Image src={heineken} alt="" fill={true}/>
                </div>
                <div className={styles.dataContainer}>
                    <div className={styles.data}>
                        <h4>HEINEKEN 473 ML</h4>
                        <h4>R$15,00</h4>
                    </div>

                    <div className={styles.actions}>
                        <div className={styles.btns}>
                            <button className={styles.less}>-</button>
                            <button className={styles.plus}>+</button>
                        </div>

                        <div className={styles.amount}>
                            <h4>6</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.productContainer}>
                <div className={styles.imageContainer}>
                    <Image src={heineken} alt="" fill={true}/>
                </div>
                <div className={styles.dataContainer}>
                    <div className={styles.data}>
                        <h4>HEINEKEN 473 ML</h4>
                        <h4>R$15,00</h4>
                    </div>

                    <div className={styles.actions}>
                        <div className={styles.btns}>
                            <button className={styles.less}>-</button>
                            <button className={styles.plus}>+</button>
                        </div>

                        <div className={styles.amount}>
                            <h4>1</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.productContainer}>
                <div className={styles.imageContainer}>
                    <Image src={heineken} alt="" fill={true}/>
                </div>
                <div className={styles.dataContainer}>
                    <div className={styles.data}>
                        <h4>HEINEKEN 473 ML</h4>
                        <h4>R$15,00</h4>
                    </div>

                    <div className={styles.actions}>
                        <div className={styles.btns}>
                            <button className={styles.less}>-</button>
                            <button className={styles.plus}>+</button>
                        </div>

                        <div className={styles.amount}>
                            <h4>0</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}
