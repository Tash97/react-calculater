import { useState, useEffect } from 'react'
import Numbers from './Numbers'

function Calculator() {
    const [integers, setIntegers] = useState<Array<string>>([])
    const [num, setNum] = useState<Array<string | number>>([0])
  
    const typeNumber = (numb: string) =>{
        if(num.length !== 8 && num[0] !== 'Too Big'){
            setNum(num => {
                return [...num, numb]
            })
        }
    }

    const setAside = (expression: string) =>{
        if(num[0] !== undefined && num[0] !== 'Too Big'){
            let entry = num.join('')
            setIntegers(integers => {
                return [...integers, entry, expression]
            })
            let newNum = num.filter(() =>{})
            setNum(newNum)
        }
    }

    useEffect(() => {
        if(integers.length === 4){
            if(integers[1] === '+'){
                let answer = Number(integers[0]) + Number(integers[2])
                if(answer.toString().length <= 8 ){
                    setIntegers(integers =>{
                        return [answer.toString(), integers[3]]
                    })
                    setNum([answer])
                } else{
                    setNum(['Too Big'])
                    setIntegers([])
                }
            } 
            if(integers[1] === '-'){
                let answer = Number(integers[0]) - Number(integers[2])
                if(answer.toString().length <= 8 ){
                    setIntegers(integers =>{
                        return [answer.toString(), integers[3]]
                    })
                    setNum([answer])
                } else{
                    setNum(['Too Big'])
                    setIntegers([])
                }
            } 
            if(integers[1] === '*'){
                let answer = Number(integers[0]) * Number(integers[2])
                if(answer.toString().length <= 8 ){
                    setIntegers(integers =>{
                        return [answer.toString(), integers[3]]
                    })
                    setNum([answer])
                }else if(answer.toFixed(2).toString().length <= 8 ){
                    setIntegers(integers =>{
                        return [answer.toFixed(2).toString(), integers[3]]
                    })
                    setNum([+answer.toFixed(2)])
                } else{
                    setNum(['Too Big'])
                    setIntegers([])
                } 
            } 
            if(integers[1] === '/'){
                let answer = Number(integers[0]) / Number(integers[2])
                if(answer.toString().length <= 8 ){
                    setIntegers(integers =>{
                        return [answer.toString(), integers[3]]
                    })
                    setNum([answer])
                }else if(answer.toFixed(2).toString().length <= 8 ){
                    setIntegers(integers =>{
                        return [answer.toFixed(2).toString(), integers[3]]
                    })
                    setNum([+answer.toFixed(2)])
                } else{
                    setNum(['Too Big'])
                    setIntegers([])
                } 
            } 
        }
        if(num[0] !== undefined){
            if( typeof num[0] === 'number' && num.length > 1){                
                let hi = num.filter(item => typeof item === 'string')
                setNum(hi)
                
            }
        }
    })

    const equals = () => {
        if(num[0] !== 'Too Big' && integers.length !== 0){
            let entry = num.join('')
            setIntegers(integers => {
                return [...integers, entry]
            })
        }
    }

    useEffect(() => {
        if(integers.length === 3){
            if(integers[1] === '+'){
                let answer = Number(integers[0]) + Number(integers[2])
                if(answer.toString().length <= 8 ){
                    setIntegers([])
                    setNum([answer.toString()])
                } else{
                    setNum(['Too Big'])
                    setIntegers([])
                }
            }
            if(integers[1] === '-'){
                let answer = Number(integers[0]) - Number(integers[2])
                if(answer.toString().length <= 8 ){
                    setIntegers([])
                    setNum([answer.toString()])
                } else{
                    setNum(['Too Big'])
                    setIntegers([])
                }
            }
            if(integers[1] === '*'){
                let answer = Number(integers[0]) * Number(integers[2])
                if(answer.toString().length <= 8 ){
                    setIntegers([])
                    setNum([answer.toString()])
                } else if(answer.toFixed(2).toString().length <= 8 ){
                    setIntegers([])
                    setNum([answer.toFixed(2).toString()])
                } else{
                    setNum(['Too Big'])
                    setIntegers([])
                }
            }
            if(integers[1] === '/'){
                let answer = Number(integers[0]) / Number(integers[2])
                if(answer.toString().length <= 8 ){
                    setIntegers([])
                    setNum([answer.toString()])
                }else if(answer.toFixed(2).toString().length <= 8 ){
                    setIntegers([])
                    setNum([answer.toFixed(2).toString()])
                } else{
                    setNum(['Too Big'])
                    setIntegers([])
                }
            }
        }
        
    })

    const clear = () => {
        setIntegers([])
        setNum([0])
    }

    const posNeg = () => {
        if(num[0] !== undefined && num.length !== 8){
            if(num[0] !== '-' && num[0].toString().length === 1){
                setNum(num =>{
                    return ['-', ...num]
                })
            } else if(num[0] === '-'){
                let pos = num.filter(digit => digit !== '-')
                setNum(pos)
            } else if(num[0].toString().length > 1){
                let stringy = num.toString()
                if(stringy[0][0] === '-'){
                    let poss = stringy.split('').filter(digit => digit !== '-').join('')
                    setNum([poss])
                } else if(stringy[0][0] !== '-'){
                    setNum(num =>{
                        return ['-', ...num]
                    })
                }
            }
        } else if(num[0] === '-' && num.length === 8){
            let stringy = num.toString()
            if(num[0] === '-'){
                let pos = num.filter(digit => digit !== '-')
                setNum(pos)
            } else if(stringy[0][0] === '-'){
                let poss = stringy.split('').filter(digit => digit !== '-').join('')
                setNum([poss])
            }
        }
    }
    
    const onePercent = () => {
        let percent = Number(num.join('')) / 100;
        if(percent.toString().length <= 8){
            setNum([percent.toString()])
        } else{
            setNum(['Too Big'])
        }
    }
    return (
        <div className="flex w-full h-screen  bg-slate-600 justify-center">
            <div className="flex flex-col w-1/4 h-5/6 p-6 mt-4 bg-black text-white rounded-2xl">
                <div className="flex flex-col rounded w-full h-2/5 mb-6 pb-4 pr-2 bg-white text-black text-7xl justify-end text-right"><Numbers number={num} /></div>
                <div className="flex flex-col justify-between w-full h-full ">
                    <div className="flex flex-row justify-between w-5/5 h-1/6">
                        <button onClick={clear} className="rounded-2xl w-1/4 mr-2 bg-red-400 text-2xl "><i className="fa-solid fa-c"></i></button>
                        <button onClick={posNeg} className="rounded-2xl w-1/4 mr-2 bg-red-400 text-2xl "><i className="fa-solid fa-plus-minus"></i></button>
                        <button onClick={onePercent} className="rounded-2xl w-1/4 mr-2 bg-red-400 text-2xl "><i className="fa-solid fa-percent"></i></button>
                        <button onClick={() => {setAside('/')}} className="rounded-2xl w-1/4 bg-red-400 text-2xl "><i className="fa-solid fa-divide"></i></button>
                    </div>
                    <div className="flex flex-row justify-between w-5/5 h-1/6">
                        <button onClick={() => {typeNumber('7')}} className="rounded-2xl w-1/4 mr-2 bg-red-400 text-2xl "><i className="fa-solid fa-7"></i></button>
                        <button onClick={() => {typeNumber('8')}} className="rounded-2xl w-1/4 mr-2 bg-red-400 text-2xl "><i className="fa-solid fa-8"></i></button>
                        <button onClick={() => {typeNumber('9')}} className="rounded-2xl w-1/4 mr-2 bg-red-400 text-2xl "><i className="fa-solid fa-9"></i></button>
                        <button onClick={() => {setAside('*')}} className="rounded-2xl w-1/4 bg-red-400 text-2xl "><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="flex flex-row justify-between w-5/5 h-1/6">
                        <button onClick={() => {typeNumber('4')}} className="rounded-2xl w-1/4 mr-2  bg-red-400 text-2xl "><i className="fa-solid fa-4"></i></button>
                        <button onClick={() => {typeNumber('5')}} className="rounded-2xl w-1/4 mr-2  bg-red-400 text-2xl "><i className="fa-solid fa-5"></i></button>
                        <button onClick={() => {typeNumber('6')}} className="rounded-2xl w-1/4 mr-2  bg-red-400 text-2xl "><i className="fa-solid fa-6"></i></button>
                        <button onClick={() => {setAside('-')}} className="rounded-2xl w-1/4  bg-red-400 text-2xl"><i className="fa-solid fa-minus"></i></button>
                    </div>
                    <div className="flex flex-row justify-between w-5/5 h-1/6">
                        <button onClick={() => {typeNumber('1')}} className="rounded-2xl w-1/4 mr-2  bg-red-400 text-2xl "><i className="fa-solid fa-1"></i></button>
                        <button onClick={() => {typeNumber('2')}} className="rounded-2xl w-1/4 mr-2  bg-red-400 text-2xl "><i className="fa-solid fa-2"></i></button>
                        <button onClick={() => {typeNumber('3')}} className="rounded-2xl w-1/4 mr-2  bg-red-400 text-2xl "><i className="fa-solid fa-3"></i></button>
                        <button onClick={() => {setAside('+')}} className="rounded-2xl w-1/4  bg-red-400 text-2xl"><i className="fa-solid fa-plus"></i></button>
                    </div>
                    <div className="flex flex-row justify-between w-5/5 h-1/6">
                        <button onClick={() => {typeNumber('0')}} className="rounded-2xl w-2/4 mr-2 bg-red-400 text-2xl "><i className="fa-solid fa-0"></i></button>
                        <button onClick={() => {typeNumber('.')}} className="rounded-2xl w-1/4 mr-2 bg-red-400 text-2xl ">.</button>
                        <button onClick={equals} className="rounded-2xl w-1/4 bg-red-400 text-2xl "><i className="fa-solid fa-equals"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Calculator