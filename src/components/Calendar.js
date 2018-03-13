import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(25px, auto);
  width : 300px;
  margin : 20px auto;
`;

const Item = styled.div`
    border : 1px solid;
    height : 35px;
    line-height : 35px;
`;


const initDate = () => {
    let arr = new Array(42);
    const _date = new Date().getDate();
    const _day = new Date().getDay();
    arr[_day+14] = _date;
    for(let i = 0; i< arr.length; i++){
        if(i>_day+14 && i< 35){
            arr[i] = arr[i-1]+1
        }
        if(i== 35){
            arr[i] = 1;
        }
        if(i>35){
            arr[i] = arr[i-1]+1
        }
        if(i<_day+14){
            arr[i] = 0
        }
    }

    // console.log('arr',arr)
    return arr;
}

initDate();

const arr_test = [1]

const handleSN = (arr) => {
    var countedNames = arr.reduce(function (allNames, name) {
        if (name in allNames) {
            allNames[name]++;
        }
        else {
            allNames[name] = 1;
        }
        return allNames;
    }, {});
    for(let key in countedNames){
        if(countedNames[key] === 1){
            return parseInt(key)
        }
    }
}

const handleMP = (nums) => {
    var missing = {};
    var found = {};
    nums.forEach((k, i) => {
        if (!found[i + 1]) {
            missing[i + 1] = true;
        }
        if (k > 0) {
            if (!found[k + 1]) {
                missing[k + 1] = true;
            }
            found[k] = true; // deal
            delete missing[k];
        }
    });
    return +Object.keys(missing)[0] || 1;
}

const arr1 = [1,2,0]
console.log('2222',handleMP(arr1))

class Calendar extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const arr = initDate();
        return(
            <Wrapper>
                {arr.map((item, idx)=>(
                    <Item key = {idx}>{item}</Item>
                ))}
            </Wrapper>

        )
    }
}

export default Calendar
