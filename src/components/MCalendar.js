import React, { Component } from 'react'
import styled, { keyframes }  from 'styled-components'


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
            transform: translateY(0);
          }
        
          to {
            transform: translateY(-12rem);
          }
        `;
        return rotateY
    }

    renderItem = (idx) => {
        const rotateY = this.handleAnimation();
        const Item = styled.div`
                width : 100%
                height : 2rem;
                border-bottom : 1px solid;
                animation: ${rotateY} 3s linear infinite;
        `
        return (<Item>{idx}</Item>)
    }

    handleTouch = (e) => {
        console.log(e.touches[0].clientY);
    }

    render() {
        const { data } = this.state
        const _this = this
        return(
            <Wrapper>
                <Content onTouchMove = {e => this.handleTouch(e)}>
                        {_this.renderItem(2)}
                </Content>
            </Wrapper>
        )
    }
}

export default MCalendar
