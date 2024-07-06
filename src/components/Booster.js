
import styles from "./booster.module.css"
import { useState, useEffect } from "react"
import { useCookies } from 'react-cookie';

export default function Booster(props){

    let coin =  <img style={{ marginTop: '3px'}} width={30} src={`${process.env.PUBLIC_URL}/images/coin00.png`} alt="Coin" />

    

    const [cookies, setCookie, removeCookie] = useCookies(['multiablevle', 'energylevel', 'rechargelevel', 'multitabprice', 'energyprice', 'rechargeprice'])

    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

    const [multiablevle, setmultitablevel] = useState(cookies.multiablevle || 1)
    const [energylevel, setenergylevel] = useState(cookies.energylevel || 1)
    const [rechargelevel, setrechargelevel] = useState(cookies.rechargelevel || 1)
    const [multitabprice, setmultitabprice] = useState(cookies.multitabprice || 500)
    const [energyprice, setenergyprice] = useState( cookies.energyprice || 500)
    const [rechargeprice, setrechargeprice] = useState(cookies.rechargeprice || 1000)

    useEffect(() => {
        // Set multiple cookies when the component mounts
        setCookie('multiablevle', multiablevle, { expires: oneYearFromNow });
        setCookie('energylevel', energylevel, { expires: oneYearFromNow });
        setCookie('rechargelevel', rechargelevel, { expires: oneYearFromNow });
        setCookie('multitabprice', multitabprice, { expires: oneYearFromNow });
        setCookie('energyprice', energyprice, { expires: oneYearFromNow });
        setCookie('rechargeprice', rechargeprice, { expires: oneYearFromNow });
    }, [setCookie, multiablevle,energylevel,rechargelevel,multitabprice,energyprice,rechargeprice]);

        let multiablevle1 =cookies.multiablevle
        let energylevel1 =cookies.energylevel
        let rechargelevel1 =cookies.rechargelevel
        let multitabprice1 =cookies.multitabprice
        let energyprice1 =cookies.energyprice
        let rechargeprice1 =cookies.rechargeprice


    var countValue = props.countValue;
    var multitab = props.multitab
    const setmultitab = props.setmultitab
    const setCount = props.setCount
    var chargeValue = props.chargeValue
    var totalCharge = props.totalCharge
    const setCharge = props.setCharge
    const setTotalCharge = props.setTotalCharge
    var recharge = props.recharge
    const setrecharge = props.setrecharge

    
    function buy1(){
        if (countValue >= multitabprice1 ){
            setmultitabprice(multitabprice1 + 500);
            setmultitablevel(multiablevle1 + 1);
            setCount(countValue - multitabprice1)
            setmultitab(multitab + 2)
            
        }
    }
    function buy2(){
        if (countValue >= energyprice1 ){
            setenergyprice(energyprice1 + 500);
            setenergylevel(energylevel1 + 1);
            setCount(countValue - energyprice1)
            setCharge(chargeValue + 300)
            setTotalCharge(totalCharge + 300)
            
            
        }
    }
    function buy3(){
        if (countValue >= rechargeprice1 ){
            setrechargeprice(rechargeprice1 + 500);
            setrechargelevel(rechargelevel1 + 1);
            setCount(countValue - rechargeprice1)
            setrecharge(recharge + 0.12)
        }
    }

    return(
        <div className={styles.Container1}>
            <div>
                <p className={styles.balance}>Your Balance</p>
                <p className={styles.balance}>{coin}{props.countValue}</p>
            </div>
            <div className={styles.Container} onClick={buy1}>
                <div><img className={styles.left} width={50} src={`${process.env.PUBLIC_URL}/images/hand.png`} alt="hand" /></div>
                <div className={styles.right}>
                    <p>Multitab</p>
                    <p> {coin}{multitabprice} | {multiablevle} Level</p>
                </div>
            </div>
            <div className={styles.Container} onClick={buy2}>
                <div><img className={styles.left} width={50} src={`${process.env.PUBLIC_URL}/images/battery.png`} alt="battery" /></div>
                <div className={styles.right}>
                    <p>Energy Limit</p>
                    <p>{coin}{energyprice}  | {energylevel} Level</p>
                </div>
            </div>
            <div className={styles.Container} onClick={buy3}>
                <div><img className={styles.left} width={50} src={`${process.env.PUBLIC_URL}/images/charge.png`} alt="charge" /></div>
                <div className={styles.right}>
                    <p>Recharging Speed</p>
                    <p>{coin}{rechargeprice} | {rechargelevel} Level</p>
                </div>
            </div>
        </div>
    )
}