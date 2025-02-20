type Color = "red" | "blue" | "red" | "blue" | "green" 
type ButtonProps = {
  text: string,
  color?: string,
  edad: number,
  BackgroundColor: Color,
  TextColor: Color,
  size: "small" | "medium" | "large"
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
        <Tittle text= "Soy un botton" color= "rojo" edad={20} 
         BackgroundColor="red" TextColor="blue" size="large"
        />

    </div>
  );
}

export default Home
