
type ButtonProps = {
  text: string,
  color?: string,
  edad: number,
}

function Tittle({text, color, edad}: ButtonProps ) {
  return (
    <div> 
         <h1>
           {text} 
          </h1>
          <p> {color} </p>
          <p> {edad} </p>
    </div>
  )
}

 function Home() {
  return (
    <div>
        <Tittle text= "Soy un botton" color= "rojo" edad={20} />
    </div>
  );
}

export default Home
