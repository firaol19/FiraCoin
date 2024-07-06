import { useState, useEffect } from "react";
import styles from "./specialTask.module.css"
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaAngleRight } from "react-icons/fa";
import { useCookies } from "react-cookie";



export default function SpecialTask(props){

    let coin =  <img  width={30} src={`${process.env.PUBLIC_URL}/images/coin00.png`} alt="Coin" />
    let countValue = props.countValue
    const setCount = props.setCount

    const [isVisible, setIsVisible] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies(['done1', 'done2', 'done3', 'chack1', 'chack2', 'chack3'])

    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

    const [done1, setDone1] = useState(cookies.done1 || 0)
    const [done2, setDone2] = useState(cookies.done2 || 0)
    const [done3, setDone3] = useState(cookies.done3 || 0)
    const [chack1, setchack1] = useState(cookies.chack1 || false)
    const [chack2, setchack2] = useState(cookies.chack2 || false)
    const [chack3, setchack3] = useState(cookies.chack3 || false)

    useEffect(() => {

        setCookie('done1', done1, { expires: oneYearFromNow });
        setCookie('done2', done2, { expires: oneYearFromNow });
        setCookie('done3', done3, { expires: oneYearFromNow });
        setCookie('chack1', chack1, { expires: oneYearFromNow });
        setCookie('chack2', chack2, { expires: oneYearFromNow });
        setCookie('chack3', chack3, { expires: oneYearFromNow });
    }, [setCookie, done1, done2, done3, chack1, chack2, chack3, cookies]);

    let done11 =cookies.done1
    let done21 =cookies.done2
    let done31 =cookies.done3
    
    //removeCookie('done1')
    //removeCookie('done2')
    //removeCookie('done3')
    //removeCookie('chack1')
    //removeCookie('chack2')
    //removeCookie('chack3')

    function donecheck1(){
        if(done11 === 0){
            setTimeout(() => {
                setchack1(true)
            }, 10000);
        }
    }
    function donecheck2(){
        if(done21 === 0){
            setTimeout(() => {
                setchack2(true)
            }, 10000);
        }
    }
    function donecheck3(){
        if(done31 === 0){
            setTimeout(() => {
                setchack3(true)
            }, 10000);
        }
    }


    function taskdone1(){
        if(done11 === 0){
        setCount(countValue + 3000)
        setDone1(1)
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 1000); // 3000ms = 3 seconds
    
        }
        setchack1(false);
    
}

function taskdone2(){
    if(done21 === 0){
        setCount(countValue + 3000)
        setDone2(1)
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 1000); // 3000ms = 3 seconds
    }
    setchack2(false)
        
    
}
function taskdone3(){
    if(done31 === 0){
        setCount(countValue+ 3000)
        setDone3(1)
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 1000); // 3000ms = 3 seconds
    
    }
    setchack3(false)
        
    
}

    return(
        <div className={styles.Container1}>
            <div  className={styles.Container} >
                <div className={styles.left}><FaYoutube size={35} color="#FF0000" /></div>
                <div className={styles.right}>
                    <a target="_blank" onClick={donecheck1} href="https://www.youtube.com/@firaolbekele7989">Subscribe Youtube</a>
                    <p>{coin} 3000</p>
                </div>
                <div onClick={taskdone1} className={styles.check} style={chack1   ? {display: 'block'} : {display: 'none'}}><span>Check</span></div>
                <div className={styles.done} style={done1 === 1 ? {display: 'block'} : {display: 'none'}}><span>Done</span></div>
                <a target="_blank" onClick={donecheck1} href="https://www.youtube.com/@firaolbekele7989" className={styles.angle}><FaAngleRight size={30} color="#FF0000"/></a>
            </div>
            <div  className={styles.Container} >
            
                <div className={styles.left}><FaFacebook size={35} color="#3b5998" /></div>
                <div className={styles.right}>
                    <a target="_blank" onClick={donecheck2} href="https://www.facebook.com/lijFira">Follow on FaceBook</a>
                    <p>{coin} 3000</p>
                </div>
                <div onClick={taskdone2} className={styles.check} style={chack2   ? {display: 'block'} : {display: 'none'}}><span>Check</span></div>
                <div className={styles.done} style={done2 === 1 ? {display: 'block'} : {display: 'none'}}><span>Done</span></div>
                <a target="_blank" onClick={donecheck2} href="https://www.facebook.com/lijFira" className={styles.angle}><FaAngleRight size={30} color="#FF0000"/></a>
            </div>
            <div  className={styles.Container} >
                <div className={styles.left}><FaTwitter size={35} color="#1DA1F2" /></div>
                <div className={styles.right}>
                    <a target="_blank" onClick={donecheck3} href="https://www.twitter.com/FiraolBekele13">Follow on Twiter</a>
                    <p>{coin} 3000</p>
                </div>
                <div onClick={taskdone3} className={styles.check} style={chack3   ? {display: 'block'} : {display: 'none'}}><span>Check</span></div>
                <div className={styles.done} style={done3 === 1 ? {display: 'block'} : {display: 'none'}}><span>Done</span></div>
                <a target="_blank" onClick={donecheck3} href="https://www.twitter.com/FiraolBekele13" className={styles.angle}><FaAngleRight size={30} color="#FF0000"/></a>
            </div>
            {isVisible && <img className={styles.animation} width={350} src={`${process.env.PUBLIC_URL}/images/coinanim.gif`} alt="Coin" />}
        </div>
    )
}