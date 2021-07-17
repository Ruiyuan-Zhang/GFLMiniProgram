import React from 'react'

export function rootContainer(container) {
    const EnhanceContainer = require('@/pages/Enhance').Enhance
    return React.createElement(EnhanceContainer, null, container)
}