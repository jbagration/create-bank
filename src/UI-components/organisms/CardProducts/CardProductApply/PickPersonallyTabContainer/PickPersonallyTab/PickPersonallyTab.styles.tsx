export const bankListBoxStyles = {
    mainBox: {
        border: '1px solid #eeeeee',
        borderRadius: '2px',
        marginTop: '16px',
        maxWidth: '500px',
        marginLeft: 0,
        padding: 0,
    },
    itemBox: {
        padding: '16px',
        display: 'flex',
        borderBottom: '1px solid #eeeeee',
    },
    itemWrapperRight: {
        marginLeft: '24px',
    },
    itemShedule: {
        marginLeft: '50px',
        marginTop: '16px',
    },
    itemStatusValueTrue: {
        color: '#4cAf50',
        marginTop: '16px',
        width: '150px',
    },
    itemStatusValueFalse: {
        color: '#f2453d',
        marginTop: '16px',
        width: '150px',
    },
    itemFlex: {
        display: 'flex',
    },
} as const

export const closeButtonStyles = {
    margin: '0 20px 0 0',
    order: '3',
    cursor: 'pointer',
}
