import styled from "styled-components";




export const SideMenuItem = ({ src, text, navigate }) => {
    return (
        <Item onClick={navigate} >
            <Icon src={src}></Icon>
            <Text>
                {text}
            </Text>
        </Item>
    )
}


const Item = styled.div`
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