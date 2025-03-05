import { GoodDataType } from "@/types";
import Link from "next/link";
import styles from "./good-item.module.css";
import Image from "next/image";

const GoodItem = ({
  title,
  id,
  image,
  category,
  rating,
  price,
}: GoodDataType) => {
  return (
    <Link href={`/good/${id}`} className={styles.container}>
      <Image src={image} alt={title} width={80} height={80} />
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.category}>{category}</div>
        <br />
        <div className={styles.rating}>
          Rating: {rating.rate} | {rating.count}
        </div>
        <div className={styles.price}>{price}$</div>
      </div>
    </Link>
  );
};

export default GoodItem;
