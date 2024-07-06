import styles from "./coinimg.module.css"
import { useState, useRef } from "react"


export default function CoinImage(props){

    const setCount = props.setCount
    var countValue = props.countValue
    var chargeValue = props.chargeValue
    const setCharge = props.setCharge
    const setProgress = props.setProgress
    var multitab1 = props.multitab1

    const [rotateCheck, setRotateCheck] = useState(false)

    const [localcoords, setLocalCoords] = useState({x: 30, y:30})
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)
    const [visible5, setVisible5] = useState(false)
    const intervalRef = useRef(null);

    const handleMouseMove =(event) =>{
        const coords = {x: event.clientX , y: event.clientY - event.target.offsetTop - 130,};
        intervalRef.current = coords;
        setLocalCoords(coords)
        increasCount()
        if (chargeValue > (multitab1 + 2)){
            if(!(visible)){
                setVisible(true)
            setTimeout(() => {
                setVisible(false);
            }, 1000);
            }
            if(visible && (!(visible1))){
                setVisible1(true)
            setTimeout(() => {
                setVisible1(false);
            }, 1000);
            }
            if(visible && visible1 && (!(visible2))){
                setVisible2(true)
            setTimeout(() => {
                setVisible2(false);
            }, 1000);
            }
            if(visible && visible1 && visible2 && (!(visible3))){
                setVisible3(true)
            setTimeout(() => {
                setVisible3(false);
            }, 1000);
            }
            if(visible && visible1 && visible2 && visible3 &&  (!(visible4))){
                setVisible4(true)
            setTimeout(() => {
                setVisible4(false);
            }, 1000);
            }
            if(visible && visible1 && visible2 && visible3 && visible4 && (!(visible5))){
                setVisible5(true)
            setTimeout(() => {
                setVisible5(false);
            }, 1000);
            }
        }
        
    };
    
    

    

    function increasCount(){
        if (chargeValue > (multitab1 + 2)) {
            setCount(countValue + multitab1)
        }
        if (chargeValue > (multitab1 + 2)) {
            setCharge(chargeValue - (multitab1 + 2))
        }
        if (chargeValue > (multitab1 + 2)) {
            setProgress(prev => (prev <= 0 ? 100 : prev - 0.12 ));
        }
        setRotateCheck(true);
        setTimeout(() => {
            setRotateCheck(false);
        }, 100); // 3000ms = 3 seconds
    
    }

    return(
        <div  className={styles.container}>
            <img style={rotateCheck ? {transform: "rotate(10deg)"} : {transform: "rotate(0deg)"}} onClick={handleMouseMove}
                 src={`${process.env.PUBLIC_URL}/images/coin2.png`} alt="Coin" 
            />
            
            <span id={styles.visible} className={visible ? styles.visble : styles.invisible}  style={{
                position: 'absolute',
                fontSize: '35px',
                fontWeight: '700',
                top: `${localcoords.y}px`,
                left: `${localcoords.x}px`,
                userSelect: 'none',
            }}>{multitab1}</span>
            <span id={styles.visible} className={visible1 ? styles.visble : styles.invisible}  style={{
                position: 'absolute',
                fontSize: '35px',
                fontWeight: '700',
                top: `${localcoords.y}px`,
                left: `${localcoords.x}px`,
                userSelect: 'none',
            }}>{multitab1}</span>
            <span id={styles.visible} className={visible2 ? styles.visble : styles.invisible}  style={{
                position: 'absolute',
                fontSize: '35px',
                fontWeight: '700',
                top: `${localcoords.y}px`,
                left: `${localcoords.x}px`,
                userSelect: 'none',
            }}>{multitab1}</span>
            <span id={styles.visible} className={visible3 ? styles.visble : styles.invisible}  style={{
                position: 'absolute',
                fontSize: '35px',
                fontWeight: '700',
                top: `${localcoords.y}px`,
                left: `${localcoords.x}px`,
                userSelect: 'none',
            }}>{multitab1}</span>
            <span id={styles.visible} className={visible4 ? styles.visble : styles.invisible}  style={{
                position: 'absolute',
                fontSize: '35px',
                fontWeight: '700',
                top: `${localcoords.y}px`,
                left: `${localcoords.x}px`,
                userSelect: 'none',
            }}>{multitab1}</span>
            <span id={styles.visible} className={visible5 ? styles.visble : styles.invisible}  style={{
                position: 'absolute',
                fontSize: '35px',
                fontWeight: '700',
                top: `${localcoords.y}px`,
                left: `${localcoords.x}px`,
                userSelect: 'none',
            }}>{multitab1}</span>
            <span className={styles.invisible}>3</span>
        </div>
    )
}