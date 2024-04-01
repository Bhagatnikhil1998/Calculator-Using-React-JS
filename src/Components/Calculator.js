import { useState } from "react";
import * as math from "mathjs";

export default function Calculator()
{
    const[value, setvalue]=useState('');
    const[Result, setResult]=useState(0);

   var handleDelete=()=>{
         setvalue(value.slice(0, -1));
    }

    var handleClear=()=>{
         setvalue('');
         setResult(0);
    }
   
    const handleEquals = () => {
        try {
         
          const resultValue = math.evaluate(value);
          setvalue(String(resultValue));
          setResult(resultValue);
         
        } catch (error) {
        
           setvalue("Error");
           setResult(0);
        }
      };
      
    
    return(
        <>
        <div className="container">
            <div className="calculator">
                <form>
                    <div className="display">
                        <input type="text" value={value}/>
                    </div>
                    <div>
                        <input type="button" value="AC" className="ACbutton" onClick={handleClear}/>
                        <input type="button" value="DE" className="DEbutton" onClick={handleDelete}/>
                        <input type="button" value="." onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value="/" className="dividebutton" onClick={e => setvalue(value + e.target.value)}/>
                  </div>
                  <div>
                        <input type="button" value="7" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value="8" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value="9" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value="*" className="Multibutton" onClick={e => setvalue(value + e.target.value)}/>
                  </div>
                  <div>
                        <input type="button" value="4" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value="5" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value="6" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value="+" className="Additionbutton" onClick={e => setvalue(value + e.target.value)}/>
                  </div>
                  <div>
                        <input type="button" value="1" onClick={e => setvalue(value + e.target.value)} />
                        <input type="button" value="2" onClick={e => setvalue(value + e.target.value)} />
                        <input type="button" value="3" onClick={e => setvalue(value + e.target.value)} />
                        <input type="button" value="-" className="Minusbutton" onClick={e => setvalue(value + e.target.value)}/>
                  </div>
                  <div>
                        <input type="button" value="00" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value="0" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value="=" className="equal" onClick={handleEquals}/>
                       
                  </div>
                </form>
               </div>
              </div>

        </>

    );
}