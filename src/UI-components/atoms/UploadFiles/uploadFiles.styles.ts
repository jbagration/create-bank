export const deleteButtonStyle = {
    flexBasis: '10%',
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
}
export const uploadButtonStyle = (isUploaded: boolean) => {
    const style = isUploaded
        ? {
              padding: '0 20px',
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
          }
        : {
              padding: '0 20px',
          }

    return style
}

export const nameButtonStyles = {
    marginLeft: '11px',
    maxWidth: '400px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}
