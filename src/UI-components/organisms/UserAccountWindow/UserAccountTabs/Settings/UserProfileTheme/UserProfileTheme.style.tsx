import { yellowColor } from 'src/themes/colors/yellow'
import { styled } from '@mui/system'

export const ContainerBox = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexDirection: 'row',
})

export const TypographyStyle = styled('div')({
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    textAlign: 'left',
})

export const SwitchStyle = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '& .MuiSwitch-switchBase': {
        color: '#fff',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: yellowColor[700],
    },
    '& .MuiSwitch-track': {
        backgroundColor: '#9E9E9E',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: yellowColor[700],
    },
})

export const IconStyle = styled('div')({
    marginTop: '8px',
})
