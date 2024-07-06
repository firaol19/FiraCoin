import { useCookies } from 'react-cookie';
import './App.css';
import {useState, useEffect, useRef} from "react"
import TotalCount from './components/TotalCount';
import CoinImage from './components/CoinImage';
import Charge from './components/Charge';
import LinearProgressWithLabel from './components/LinearProgressWithLabel';
import ActiveButton from './components/ActiveButton';
import Booster from './components/Booster';
import Task from './components/Task';
import Ref from './components/Ref';
import Background from './components/Background'

window.addEventListener('beforeunload', () => {
  const date = new Date();
  date.setTime(date.getTime() + (365*24*60*60*1000)); // 1 year expiry
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `lastClosed=${Date.now()}; ${expires}; path=/;`;
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function App() {
  
  //closeing and opening time interval
  const [interval, setIntervalState] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const lastClosed = getCookie('lastClosed');
    if (lastClosed) {
      const now = Date.now();
      const timeInterval = (now - parseInt(lastClosed, 10))/60000;
      intervalRef.current = timeInterval;
      setIntervalState(timeInterval);
    }
  }, []);

  
  const [cookies, setCookie, removeCookie] = useCookies(['coin', 'multitab', 'chargeValue', 'totalCharge', 'recharge']);
  
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

  const [countValue, setCount] = useState(cookies.coin || 0);
  const [multitab, setmultitab] = useState(cookies.multitab || 3);
  const [chargeValue, setCharge] = useState(cookies.chargeValue || 2500);
  const [totalCharge, setTotalCharge] = useState(cookies.totalCharge || 2500);
  const [recharge, setrecharge] = useState(cookies.recharge ||0.12)
  
  useEffect(() => {
    // Set multiple cookies when the component mounts
    setCookie('coin', countValue, { expires: oneYearFromNow });
    setCookie('multitab', multitab, { expires: oneYearFromNow });
    setCookie('chargeValue', chargeValue, { expires: oneYearFromNow });
    setCookie('totalCharge', totalCharge, { expires: oneYearFromNow });
    setCookie('recharge', recharge, { expires: oneYearFromNow });
  }, [setCookie, countValue,multitab,chargeValue,totalCharge,recharge]);
  


 //removeCookie('recharge')
 //removeCookie('totalCharge')



        let countValue1 =cookies.coin
        let multitab1 =cookies.multitab
        let chargeValue1 =cookies.chargeValue
        let totalCharge1 =cookies.totalCharge
        let recharge1 =cookies.recharge

  
  
  const [progress, setProgress] = useState(((chargeValue1 * 100) / totalCharge1));
  

    useEffect(() =>{
      setProgress(((chargeValue1 * 100) / totalCharge1))
    },[chargeValue1] );

useEffect(() => {
  const timer = setInterval(() => {
      setCharge((prevCharge) => (prevCharge < totalCharge1 ? prevCharge + (recharge1 * 25) : totalCharge1));
  }, 1000);
  return () => clearInterval(timer);
}, [totalCharge1,recharge1]);

useEffect(() => {
  if(interval !== null && interval > 10){
    setCharge(totalCharge1)
    setProgress(100)
  }
},[interval]);
  
  const [check, setcheck] = useState(0)

  let output;
  if(check === 0){
    output = <div>
    <TotalCount  countValue={countValue} countValue1={countValue1}  setCount={setCount}/>
    <CoinImage setCount={setCount} setCharge={setCharge} countValue={countValue} chargeValue={chargeValue1} setProgress={setProgress} multitab1={multitab1}  countValue1={countValue1}/>
    <Charge chargeValue={chargeValue1} totalCharge={totalCharge1}/>
    <LinearProgressWithLabel value={progress} />
  </div>
  }if(check === 1){
      output = <Booster recharge={recharge1} setrecharge={setrecharge} setmultitab={setmultitab} countValue={countValue1} multitab={multitab1} setCount={setCount} chargeValue={chargeValue1} totalCharge={totalCharge1} setCharge={setCharge} setTotalCharge={setTotalCharge}/>
  }if(check === 2){
    output = <Task countValue={countValue1} setCount={setCount} />
  }if(check === 3){
    output = <Ref/>
  }

    return(
        <div className="App" >
            <Background/>
            {output}
            <ActiveButton check={check} setcheck={setcheck}/>
        </div>
    )

}

export default App;
