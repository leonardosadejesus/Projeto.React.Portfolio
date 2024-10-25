import { useState } from "react"

function Form() {

    function cadastrarUsuario(e){
        e.preventdefault()
        console.log('Cadastrou o usuário!')
        console.log(`Usuário ${name} foi cadastrado com  senha: ${password}`)
    }

    const [name,setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor= "name">Nome:</label>
                    <input type="text" placeholder="Digite o seu nome" onChange= {(e) => setName(e.target.value)} />
                </div>
                <div><label htmlFor= "password">Senha:</label>

                    <input type="password" placeholder="Digite a sua senha" onChange= {(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form