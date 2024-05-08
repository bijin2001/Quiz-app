import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import '../App.css'



function Page4() {

  const [radioValue, setRadioValue] = useState('null');
  const [pointValue,setPointValue] = useState([]);


  const handleChange = (e) => {
    setRadioValue(e.currentTarget.value)
    let update = [...pointValue]
    if (e.currentTarget.value === 'op1'){
        
        update.push(5)
    }else{
        
        update.push(0)
    }

    setPointValue(update);
    console.log(pointValue);
}

  return (
    <>
    <div className='d-flex container justify-content-center align-items-center'>
        <h1 style={{ letterSpacing: '5px', color: '#eae9ee', marginTop: '6em' }}>WHAT CONSTELLATION IS THIS</h1>
    </div>

    <div className='container d-flex justify-content-center align-items-center mt-5' style={{ gap: '2em', width: '45em' }}>
        <ButtonGroup toggle>
            <ToggleButton type='radio'
                id='op1'
                name='op1'
                className='p-3'
                style={{ fontWeight: '600', letterSpacing: '5px', backgroundColor: radioValue === 'op1' ? '#28a745' : '#6c757d' }}
                value={'op1'}
                checked={radioValue === 'op1'}
                onChange={handleChange}>
                PEGASUS THE HORSE
            </ToggleButton>
        </ButtonGroup>

        <ButtonGroup toggle>
            <ToggleButton type='radio'
                id='op2'
                name='op2'
                className='p-3'
                style={{ fontWeight: '600', letterSpacing: '5px', backgroundColor: radioValue === 'op2' ? '#dc3545' : '#6c757d' }}
                value={'op2'}
                checked={radioValue === 'op2'}
                onChange={handleChange}>
                BOOTES THE HUNTER
            </ToggleButton>
        </ButtonGroup>


        <ButtonGroup toggle>
            <ToggleButton type='radio'
                id='op3'
                name='op3'
                className='p-3'
                style={{ fontWeight: '600', letterSpacing: '5px', backgroundColor: radioValue === 'op3' ? '#dc3545' : '#6c757d' }}
                value={'op3'}
                checked={radioValue === 'op3'}
                onChange={handleChange}>
                CYGNUS THE SWAN
            </ToggleButton>
        </ButtonGroup>

        <ButtonGroup toggle>
            <ToggleButton type='radio'
                id='op4'
                name='op4'
                className='p-3'
                style={{ fontWeight: '600', letterSpacing: '5px', backgroundColor: radioValue === 'op4' ? '#dc3545' : '#6c757d' }}
                value={'op4'}
                checked={radioValue === 'op4'}
                onChange={handleChange}>
                AQUILA THE EAGLE
            </ToggleButton>
        </ButtonGroup>

        <div>

        </div>


    </div>
        <>
            {radioValue !== 'null' && (
                <div className='d-flex justify-content-center'>
                    <Link to={'/Page5'}>
                    <button className='bn1' onClick={setPointValue} style={{fontWeight:'600',letterSpacing:'5px',color:'#eae9ee',marginTop:'6em',border:'none'}}>NEXT</button>
                    </Link>
                </div>
            )}

        </>


</>
)
}

export default Page4