export default function Background(){
    return(
        <img width={'100%'} height={'100%'} 
        src={`${process.env.PUBLIC_URL}/images/background1.png`} 
        alt="Coin"
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -12,
        }}/>
    )
}