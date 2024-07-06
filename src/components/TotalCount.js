import styles from "./TotalCount.module.css"

export default function TotalCount(props){
    let coin =  <img width={30} src={`${process.env.PUBLIC_URL}/images/coin00.png`} alt="Coin" />
 
    let countValue1 = props.countValue1



    return(
        <div className={styles.countContainer}>
            <span className={styles.count}>{coin}{countValue1}</span>
        </div>
    )
}