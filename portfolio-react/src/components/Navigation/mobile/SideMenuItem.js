import React from "react";
import styled from "styled-components";




export const SideMenuItem = ({ src, text, navigate, children }) => {
    return (
        <Item onClick={navigate} >
            {children ? children
                : <React.Fragment>
                    <Icon src={src}></Icon>
                    <Text>
                        {text}
                    </Text>
                </React.Fragment>
            }
        </Item>
    )
}


const Item = styled.div`
    white-space: nowrap;
    cursor: pointer;
    font-family: 'DM Mono', monospace;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 12px;
    &:not(:last-of-type){
        border-bottom: 1px black solid;
    }
    width: 90%;
    margin: 0 5%;
    padding: 20px 0 20px 0;
`
//https://stackoverflow.com/questions/9877379/margin-right-broken-on-width-100

const Icon = styled.img`
    height: 40px;
`

const Text = styled.span`
`