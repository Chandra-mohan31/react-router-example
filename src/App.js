import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);

  const incrementCount = () => {
    
    if(count < 10){
       setCount(count+1);

    }else{
      alert('count exeeded the limit!')
    }
  }
  const decrementCount = () => {
    
    if(count>0){
    setCount(count - 1);
    }else{
      alert("count cant be decreased further!");
    }
  }
  // const divStyle = {
  //   display:"flex",
  //   justifyContent: "center",
  //   alignItems: "center"
    
  // }
  return (
    <div className="App">
      
      <h1 className='app_heading'>Counter App</h1>
       <div className='counter_div'>
       <MyButton btnText="+" clickFunc={incrementCount} />

        <h1 className='count'>{count}</h1>
         <MyButton btnText="-" clickFunc={decrementCount} />
       </div>
       <button className='default_btn' onClick={()=>{
        setCount(0);
       }}>
        Reset
       </button>
    {/* <AddCircleIcon sx={{color:'white',fontSize:"90px"}} /> */}

    </div>

  );
}


export default App;
