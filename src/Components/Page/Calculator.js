import React, { useState } from 'react';
import "./style.css";
// import Button from '../Buttons/Button';
const Calculator = () =>
{

    const [ displayValue, setDisplayValue ] = useState( "" );
    const [ previousValue, setPreviousValue ] = useState( '' );
    const [ operator, setOperator ] = useState( '' );


    //display the number
    const handleClick = ( num ) =>
    {



        setDisplayValue( displayValue + num.toString() );






    };
    //clear everything
    const handleClear = () =>
    {
        setDisplayValue( "" );
    };

    //for decimal point
    const handleDecimalClick = () =>
    {
        if ( !displayValue.includes( '.' ) )
        {
            setDisplayValue( displayValue + '.' );
        }
    };

    const handleOperator = ( op ) =>
    {
        if ( operator !== ( "" ) )
        {
            calculate();
        };
        setOperator( op );
        setPreviousValue( displayValue );
        setDisplayValue("" );

    };
    const handleEqualClick = () =>
    {
        calculate();
    };

    const calculate = () =>
    {
        let result;
        const prevValue = parseFloat( previousValue );
        const currentValue = parseFloat( displayValue );

        if ( isNaN( currentValue ) || isNaN( prevValue ) ) return;
        switch ( operator )
        {
            case '+':
                result = prevValue + currentValue;
                break;
            case '-':
                result = prevValue - currentValue;
                break;
            case '*':
                result = prevValue * currentValue;
                break;
            case '/':
                result = prevValue / currentValue;
                break;


            default:
                return;
        }
        setDisplayValue( result.toString() );
        setPreviousValue( "" );
        setOperator( '' );
    };

    const handlePercentageClick = () => {
        const currentValue = parseFloat(displayValue);
        const percentValue = currentValue / 100;
        setDisplayValue(percentValue.toString());
      };


    return (

        <div className='main-div'>

            <div className='display'>
                <div className='top'>
                    5:22
                </div>

                <div className='middle'>
                    <span className='text'>{ displayValue }</span>
                </div>
                <div className='button'>

                    <button className='view-button function' onClick={ handleClear}>c</button>
                    <button className='view-button function'>+/-</button>
                    <button className='view-button function' onClick={()=>handlePercentageClick("%")} >%</button>
                    <button className='view-button operator' onClick={ () => handleOperator( "/" ) }>÷</button>
                    <button className='view-button' onClick={ () => handleClick( 7 ) } >7</button>
                    <button className='view-button' onClick={ () => handleClick( 8 ) }>8</button>
                    <button className='view-button' onClick={ () => handleClick( 9 ) }>9</button>
                    <button className='view-button operator' onClick={ () => handleOperator( "*" ) }>x</button>
                    <button className='view-button' onClick={ () => handleClick( 4 ) }>4</button>
                    <button className='view-button' onClick={ () => handleClick( 5 ) }>5</button>
                    <button className='view-button' onClick={ () => handleClick( 6 ) }>6</button>
                    <button className='view-button operator' onClick={ () => handleOperator( "-" ) }>-</button>
                    <button className='view-button' number="1" onClick={ () => handleClick( 1 ) }>1</button>
                    <button className='view-button' onClick={ () => handleClick( 2 ) }>2</button>
                    <button className='view-button' onClick={ () => handleClick( 3 ) }>3</button>
                    <button className='view-button operator' onClick={ () => handleOperator( "+" ) }>+</button>
                    <button className='view-button   number-0' onClick={ () => handleClick( 0 ) }>0</button>
                    <button className='view-button ' onClick={ () => handleDecimalClick( "." ) }>.</button>
                    <button className='view-button operator ' onClick={ handleEqualClick }>=</button>


                </div>
                <div className='bottom'>____________</div>
            </div>

        </div>


    );
};

export default Calculator;