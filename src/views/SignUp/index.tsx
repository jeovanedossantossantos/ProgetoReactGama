
import React, { useCallback, useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Container } from "./style";

interface IDate {
    
    name: string;
    email: string;
    
    senha: string;
    
}
const SignUp: React.FC = () => {

    const [data, setDate] = useState<IDate>({} as IDate)
    const [load, setLoad] = useState(false)
    const history = useHistory()
    const hadleSumbmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        api.post('users', data).then(
            
            response => {
                setLoad(false)
                // console.log(response.data)
                // console.log("ok 1")
                toast.success("Cadastro realizado com sucesso!", {
                    hideProgressBar: false,
                    onClose: () => history.push('/signin')
                })

            }

        ).catch(e => {toast.error("Oops, algo deu errado!")})
            .finally(()=>setLoad(false))
    }, [data, history])
    if (load) {
        return(
            <div>
                <h1>Agurde</h1>
            </div>
        )
    }
    return (
        <Container>

            <div className="card">
                <h5>Cadastres</h5>
                <form onSubmit={hadleSumbmit}>
                    
                    <input
                        type="text"
                        placeholder="Infomer seu nome"
                        onChange={e => setDate({ ...data, name: e.target.value })}
                    />
                   
                   
                    <input
                        type="email"
                        placeholder="Informe seus email"
                        onChange={e => setDate({ ...data, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Infomer seu Senha"
                        onChange={e => setDate({ ...data, senha: e.target.value })}
                    />
                   
                    
                    <button type="submit" value="Cadastra">Cadastra</button>
                </form>
            </div>
        </Container>
    );
}
export default SignUp


