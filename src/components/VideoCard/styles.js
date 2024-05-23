import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Logo from "../Logo";
export const Container = styled(Link)`
    text-decoration:none;
    underline: none;
    display: flex;
    flex-direction: ${({doubleSection})=> doubleSection ? 'row' : 'column'};
    flex-wrap: ${({doubleSection})=> doubleSection ? 'nowrap' : 'wrap'};
    justify-content: flex-start;
    width: ${({doubleSection, displayEssentials})=> doubleSection ? '50%' : displayEssentials ? 'auto' : '30%'};
    padding: 30px 0;
`

export const ThumbNail = styled(Logo)`
    padding: 4px;
`

export const Details = styled.div`
    display: flex;
    gap:10px;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6px;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.5px;
    color: ${({isDark})=> isDark ? 'var(--blue-gray)' : 'var(--dark-charcoal-2)'};
    
    `
    export const ChannelName = styled.div`
    font-size: 16px;    
    padding: 8px 0;
    `
    export const ChannelStats = styled.div`
    font-size: 15px;  
    font-weight: 300;
    `
    export const ChannelDescription = styled.div`
    font-size: ${({doubleSection})=> doubleSection ? '22px' : '16px'};
    font-weight: ${({doubleSection})=> doubleSection ? '500' : '400'};
    color: ${({isDark})=> isDark ? 'var(--secondary-dark-color)' : 'var(--dark-charcoal)'};
`

