import styled from "styled-components"
import {useForm} from 'react-hook-form'
import { joiResolver } from "@hookform/resolvers/joi"
import axios from  'axios'

import ControlledTextarea from "../input/ControlledTextarea"
import { createPostSchema } from "../../../modules/post/post.schema"
import Button from "../input/button"

const Paddingbutton = styled(Button)`
    margin-top:30px;
`

function EditPost({id, text, onSave}){

    const {control, handleSubmit, formState:{isValid}} = useForm({
        resolver: joiResolver(createPostSchema),
        mode:'all'
    })

    const handleSaveEdit = async (data) =>{
        try{
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
                id,
                text:data.text
            })
            if(response.status === 200){
                onSave()
            }
        } catch(err){
            console.error(err)
        }
        console.log('lo?')
    }

    return(

        <form onSubmit={handleSubmit(handleSaveEdit)}>
            <ControlledTextarea
            placeholder="Digite sua mensagem"
            rows='5' 
            control={control} 
            name="text" 
            maxLenght="256"
            defaultValue={text}
            />
            <Paddingbutton disabled={!isValid}> Salvar alterações </Paddingbutton>
        </form>
    )
} 

export default EditPost