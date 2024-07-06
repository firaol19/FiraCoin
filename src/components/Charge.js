import styles from "./charge.module.css"

export default function Charge(props){
    return(
        <div className={styles.charge}>
            <span>{props.chargeValue}</span>
            <span>/</span>
            <span>{props.totalCharge}</span>
        </div>
    )
}