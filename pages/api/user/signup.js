
import { SignupUser } from "../../../modules/user/user.service"

function Signup(req, res){
    SignupUser()
    res.status(200).json({ Teste: 'ok'})
}   

export default Signup