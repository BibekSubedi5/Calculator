import React, { useState } from 'react';
import "./style.css";

const Calculator = () =>
{
  const [ displayValue, setDisplayValue ] = useState( '0' );
  const [ previousValue, setPreviousValue ] = useState( '' );
  const [ operator, setOperator ] = useState( '' );

  const handleNumberClick = ( num ) =>
  {
    if ( displayValue === '0' )
    {
      setDisplayValue( num.toString() );
    } else
    {
      setDisplayValue( displayValue + num.toString() );
    }
  };

  const handleDecimalClick = () =>
  {
    if ( !displayValue.includes( '.' ) )
    {
      setDisplayValue( displayValue + '.' );
    }
  };

  const handleClearClick = () =>
  {
    setDisplayValue( '0' );
    setPreviousValue( '' );
    setOperator( '' );
  };

  const handleOperatorClick = ( op ) =>
  {
    if ( operator !== '' )
    {
      calculate();
    }
    setOperator( op );
    setPreviousValue( displayValue );
    setDisplayValue( '0' );
  };
  const handleEqualsClick = () =>
  {
    calculate();
  };

  const calculate = () =>
  {
    let result;
    const currentValue = parseFloat( displayValue );
    const prevValue = parseFloat( previousValue );

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
    setPreviousValue( '' );
    setOperator( '' );
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
          <button className='view-button function' onClick={ handleClearClick }>c</button>
          <button className='view-button function'>+/-</button>
          <button className='view-button function' >%</button>
          <button className='view-button operator' onClick={ () => handleOperatorClick( '/' ) }>÷</button>
          <button className='view-button' onClick={ () => handleNumberClick( 7 ) }>7</button>
          <button className='view-button' onClick={ () => handleNumberClick( 8 ) }>8</button>
          <button className='view-button' onClick={ () => handleNumberClick( 9 ) }>9</button>
          <button className='view-button operator' onClick={ () => handleOperatorClick( '*' ) }>x</button>
          <button className='view-button' onClick={ () => handleNumberClick( 4 ) }>4</button>
          <button className='view-button' onClick={ () => handleNumberClick( 5 ) }>5</button>
          <button className='view-button' onClick={ () => handleNumberClick( 6 ) }>6</button>
          <button className='view-button operator' onClick={ () => handleOperatorClick( '-' ) }>-</button>
          <button className='view-button' onClick={ () => handleNumberClick( 1 ) }>1</button>
          <button className='view-button' onClick={ () => handleNumberClick( 2 ) }>2</button>
          <button className='view-button' onClick={ () => handleNumberClick( 3 ) }>3</button>
          <button className='view-button operator' onClick={ () => handleOperatorClick( '+' ) }>+</button>
          <button className='view-button   number-0' onClick={ () => handleNumberClick( 0 ) }>0</button>
          <button className='view-button ' onClick={ () => handleDecimalClick( '.' ) }>.</button>
          <button className='view-button operator ' onClick={ handleEqualsClick }>=</button>


        </div>
        <div className='bottom'>____________</div>
      </div>

    </div>


  );
};

export default Calculator;