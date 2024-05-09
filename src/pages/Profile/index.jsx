import { Container } from "./styles"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Input } from '../../Components/Input'
import { Link } from 'react-router-dom'
import { Button } from '../../Components/Button'

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https:github.com/hugo4s.png" alt="Foto do usuário" />
                    <label htmlFor="avatar"><FiCamera/></label>
                    <input id="avatar" type="file" />
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}