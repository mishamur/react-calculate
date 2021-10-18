import React, {useState} from "react";
import './Calculate.css';
import buttons from "./buttons";
import MyMath from "./MyMath";


function Calculate(){
const[output, setOutValue] = useState('');
const[ num1 , setNum1Value] = useState('');
const[ num2, setNum2Value] = useState('');
const[ oper, setOperValue] = useState(null);

    function butOperationClick(operation) {
       setOperValue(operation);
       setOutValue(output + operation);
    }

    function butEqualClick(){
        let result;
        switch (oper){
            case "+" :
                result = MyMath.add(num1, num2);
                setOutValue(result);
                break;

            case "*" :
                result = MyMath.add(num1, num2);
                setOutValue(result);
                break;

            case "/" :
                result = MyMath.add(num1, num2);
                setOutValue(result);
                break;

            case "-" :
                result = MyMath.add(num1, num2);
                setOutValue(result);
                break;
        }
        setNum1Value(result);
        setNum2Value('');
        setOperValue(null);
        console.log(output);
    }

    function butClearClick(){
       setOutValue('');
        setNum1Value('');
        setNum2Value('');
        setOperValue(null);
    }
    function butNumberClick(value) {
        setOutValue(output + value.toString());
        if (oper === null){
            setNum1Value(num1 + '' + value);
            console.log('first:' + num1);
        }
        else{
            setNum2Value(num2 + '' + value);
            console.log('second:' + num2);
        }

    }


    return(
        <div className={'container'}>
            <div>
                <input type={'text'} value={output} readOnly />
            </div>
            <div>
                {buttons.map((value) => {
                    if(value.className === 'number'){
                        return <button onClick={ () =>{
                            butNumberClick(value.value);
                        }} key={value.value} className={value.className}>{value.value}</button>
                    }
                    else  if(value.className === 'operation'){
                        return <button onClick={ () =>{
                            butOperationClick(value.value);
                        }} key={value.value} className={value.className}>{value.value}</button>
                    }
                    else if (value.className === 'equal'){
                        return <button onClick={ () =>{
                            butEqualClick();
                        }} key={value.value} className={value.className}>{value.value}</button>
                    }
                    else{
                        return <button onClick={ () =>{
                            butClearClick(value.value);
                        }} key={value.value} className={value.className}>{value.value}</button>
                    }
                })}
            </div>

        </div>
    );
}



export default Calculate;