import React, { Component } from 'react'
import styled, { keyframes }  from 'styled-components'

const log = console.log.bind(console);

const Wrapper = styled.section`
    width : 100%;
    height : 12rem;
    position : fixed;
    bottom : 10rem;
    z-index:999;
`
const Content = styled.main`
    width : 100%;
    height : 100%;
    background-color: pink; 
    overflow : scroll; 
`



const handleInit = (num) => {
    let arr = new Array(num);
    for(let i = 0; i< arr.length; i++){
        arr[i]= i
    }
    return arr;
}



class MCalendar extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : handleInit(20)
        }
    }

    handleAnimation = (f, t) => {
        const rotateY = keyframes`
          from {
            transform: translateY(${f});
          }
        
          to {
            transform: translateY(-12rem);
          }
        `;
        return rotateY
    }
    //animation: ${rotateY} 3s linear infinite;
    renderItem = (idx) => {
        const rotateY = this.handleAnimation(0);
        const Item = styled.div`
                width : 100%
                height : 2rem;
                border-bottom : 1px solid;
                
        `
        return (<Item key = {idx}>{idx}</Item>)
    }

    handleTouch = (e) => {
        log('e',e.target.parentElement)
        e.target.parentElement.style.transform = `translateY(-${e.touches[0].clientY}px)`;
    }

    render() {
        const { data } = this.state
        log('data',data)
        const _this = this
        return(
            <Wrapper>
                <Content onTouchMove = {e => this.handleTouch(e)}>
                        {data.map((itm,idx)=>(
                            _this.renderItem(idx)
                        ))}
                </Content>
            </Wrapper>
        )
    }
}

export default MCalendar
