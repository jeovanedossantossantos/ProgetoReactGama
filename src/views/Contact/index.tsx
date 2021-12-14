import React, { useState, useCallback, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { api } from '../../services/api';


interface IData {
    
    name: string;
    email: string;
    

}
const Contact: React.FC = () => {


    const [data, setData] = useState<IData>({} as IData);
    const [submit, setSubmit] = useState(false);
    const handleSubit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        api.post('', data).then(response => {
            if (response.status === 200) {
                setSubmit(true);
            }

        })
    }, [data])
    return (
        <Container>
            <div className="form-wrap">
                <h1>Contact</h1>

                {data?.name} <br />
                {data?.email}
                
                <div className="card">
                    {submit ? (

                        <div>
                            <h1>Obrigado</h1>

                        </div>
                    ) : (
                        <form onSubmit={handleSubit}>
                            <input
                                type="text"
                                placeholder="nome"
                                onChange={e => setData({ ...data, name: e.target.value })}
                            />
                            
                            <input type="text"
                                placeholder="email"
                                onChange={e => setData({ ...data, email: e.target.value })}
                            />
                            <input type="submit" value="Cadastra" />

                        </form>

                    )
                    }{

                    }

                </div>
                <Link to={"/"}>Home</Link>
            </div>


        </Container>
    )
}

export default Contact