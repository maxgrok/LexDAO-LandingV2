import React from 'react';

import './PageHeader.scss';

const PageHeader = ({children}) => {
    return (
        <header className="page-header">
            {children}

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path class="elementor-shape-fill" d="M738,99l262-93V0H0v5.6L738,99z"></path>
            </svg>
        </header>
    )
}

export default PageHeader;