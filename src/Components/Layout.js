import React from 'react'
import styled from 'styled-components'

const Layout = ({children}) => {
    return (
        <StyledBody>
            <StyledHeader />
            <div className="body-children">
                {children}
            </div>
        </StyledBody>
    )
}

const StyledHeader = styled.div`
    with: 100%;
`;

const StyledBody = styled.div`
    with: 100%;
`;

export default Layout
