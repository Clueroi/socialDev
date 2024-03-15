import {useController} from 'react-hook-form'

import Textarea from './textarea'

const ControlledTextarea = ({ name, control, defaultValue="",...props}) => {
    const {
        field:{value, onChange}
    } = useController({name, control, defaultValue})
    return(
        <Textarea {...props} value={value} onChange={onChange}/>
    )
}

export default ControlledTextarea