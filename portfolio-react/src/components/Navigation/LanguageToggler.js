import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage, getLanguage } from "../../state/langSlice";

export const LanguageToggler = () => {

    const dispatch = useDispatch()
    const { code, words } = useSelector(getLanguage);

    console.log(code)

    return (
        <Wrapper>
            <Flex>
                <Item
                    onClick={() => dispatch(setLanguage("en"))}
                    active={code === 'en' ? "1px black solid" : undefined} >
                    en
                </Item>
                <Item
                    onClick={() => dispatch(setLanguage("hu"))}
                    active={code === 'hu' ? "1px black solid" : undefined} >
                    hu
                </Item>
            </Flex>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`
const Flex = styled.div`
    display: flex;
    gap: 5px;
`
const Item = styled.div`
    font-family: 'DM Mono', monospace;
    font-weight: 700;
    text-transform: uppercase;
    font-size: var(--fs-m);
    border: ${props => props.active};
    border-radius: 25%;
    padding: 5px;
    cursor: pointer;
`
