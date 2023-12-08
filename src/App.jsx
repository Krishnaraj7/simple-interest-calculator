import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";

function App() {
  const [interest, setInterest] = useState(0);
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);

  const [validPrincipal,setValidPrincipal] = useState(true)
  const [validRate,setValidRate] = useState(true)
  const [validYear,setValidYear] = useState(true)
  
  const validateInput =(e)=>{
    const {name,value} = e.target
    // console.log(`${name},${typeof value}`);
    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));

    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
      //valid pattern
      if (name==='principal') {
        setPrincipal(value)
        setValidPrincipal(true)
      }else if (name==='rate') {
        setRate(value)
        setValidRate(true) 
      }else{
        setYear(value)
        setValidYear(true)
      }
    }else{
      //invalid pattern
      if (name==='principal') {
        setPrincipal(value)
        setValidPrincipal(false)
      }else if (name==='rate') {
        setRate(value)
        setValidRate(false)
      }else{
        setYear(value)
        setValidYear(false)
      }
    }
  }

  const handleReset=()=>{
    setInterest(0)
    setPrincipal(0)
    setRate(0)
    setYear(0)
    setValidPrincipal(true)
    setValidRate(true)
    setValidYear(true)
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    if (!principal||!rate||!year) {
      alert("Please fill the form completely")
    }else{
      setInterest(principal*rate*year/100)
    }
  }
  return (
    <>
      <div
        style={{ width: "100%", height: "100vh" }}
        className="d-flex justify-content-center align-items-center bg-dark"
      >
        <div style={{ width: "550px" }} className="bg-light py-4 px-5 rounded">
          <span className="fw-bold fs-3">Simple interest calculator</span>
          <p>Calculate your simple interest </p>
          <div
            style={{ width: "100%", height: "150px" }}
            className="bg-warning rounded d-flex  justify-content-center align-items-center
          mt-3 text-light shadow flex-column "
          >
            <p className="fs-1 fw-bolder">₹{interest}</p>
            <p className="fw-bolder">Total Simple Interest</p>
          </div>
          <form className="mt-5" onSubmit={handleCalculate} >
            <div className="mb-3">
              <TextField
                className="w-100"
                id="outlined-basic"
                label="₹ Principle Amount"
                variant="outlined"
               name="principal"
               value={principal || ""}
              
               onChange={e=>validateInput(e)}
            
               
              />
            </div>
           {!validPrincipal&&<div className="mb-2 text-danger ">
            Invalid Principle amount
            </div>}
            <div className="mb-3">
              <TextField
                className="w-100"
                id="outlined-basic"
                label="Rate of interest (%)"
                variant="outlined"
                name="rate"
                value={rate || ""}
                onChange={e=>validateInput(e)}            
              />
               {!validRate&&<div className="mb-2 text-danger ">
            Invalid rate
            </div>}
            </div>
            <div className="mb-3">
              <TextField
                className="w-100"
                id="outlined-basic"
                label="Time Period (yr)"
                variant="outlined"
                name="year"
                value={year || ""}
                onChange={e=>validateInput(e)}
             
              />
               {!validYear&&<div className="mb-2 text-danger ">
            Invalid year
            </div>}
            </div>
          <Stack direction="row" spacing={2}>
              <Button type="submit" style={{height:'70px',width:'50%'}} className="bg-dark " variant="contained"
              disabled={validPrincipal && validRate && validYear?false:true}>CALCULATE</Button>
              <Button style={{height:'70px',width:'50%'}} className="text-black border-dark" variant="outlined"
              onClick={handleReset}>RESET</Button>
          </Stack>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
