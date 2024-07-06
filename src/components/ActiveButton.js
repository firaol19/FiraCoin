import {useState} from "react" 
import styles from "./activeButton.module.css"

export default function ActiveButton(props){
    var check = props.check
    const setcheck = props.setcheck
    const [active, setactive] = useState(0)

    

    function changepage1(){
        setcheck(1)
        setactive(1)
    }
    function changepage2(){
        setcheck(0)
        setactive(0)
    }
    function changepage3(){
        setcheck(2)
        setactive(2)
    }
    function changepage4(){
        setcheck(3)
        setactive(3)
    }
    
    

    return(
        <div className={styles.imgContainer}>
            <div onClick={changepage4} className={active === 3 ? styles.selectdiv : ''}>
                <img width={60} height={50} src={`${process.env.PUBLIC_URL}/images/referal1.png`} alt="Coin" />  
                <p>Ref</p>
            </div>
            <div onClick={changepage3} className={active === 2 ? styles.selectdiv : ''} style={{paddingTop: 8}}>
                <img width={40} height={40} src={`${process.env.PUBLIC_URL}/images/task11.png`} alt="Coin" />
                <p>Task</p>
            </div>
            <div onClick={changepage2} className={active === 0 ?  styles.selectdiv : ''}>
                <img width={50} height={50} src={`${process.env.PUBLIC_URL}/images/coin11.png`} alt="Coin"/>
                <p>Coin</p>
            </div>
            <div onClick={changepage1} className={active === 1 ? styles.selectdiv : ''}>
                <img width={50} height={50} src={`${process.env.PUBLIC_URL}/images/boost1.png`} alt="Coin"/>
                <p>Boost</p>  
            </div>
            
            
            
            
        </div>
    )
}