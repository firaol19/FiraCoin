import styles from "./task.module.css"
import SpecialTask from "./SpecialTask"
import Ref from "./Ref"
import { useState } from "react"
import { useCookies } from "react-cookie"

export default function Task(props){
    let coin =  <img  width={30} src={`${process.env.PUBLIC_URL}/images/coin00.png`} alt="Coin" />

    const [check, setcheck] = useState(0)
    let output;

    function changeEvent1(){
        setcheck(0)
    }
    function changeEvent2(){
        setcheck(1)
    }

    if(check === 0){
        output = <SpecialTask countValue={props.countValue} setCount={props.setCount} />
    }if(check === 1){
        output = <Ref/>
    }

    return(
        <div>
            <div className={styles.countValue}>{coin}{props.countValue}</div>
            <div className={styles.buttonContainer}>
                <span className={check === 0 ? styles.colorChaneg : ''} onClick={changeEvent1}>Special</span>
                <span className={check === 1 ? styles.colorChaneg : ''} onClick={changeEvent2}>Ref</span>
            </div>
            {output}
        </div>
    )
}