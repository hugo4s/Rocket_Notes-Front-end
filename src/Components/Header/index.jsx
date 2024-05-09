import { Container , Profile, Logout} from "./styles";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from 'react-router-dom'

export function Header(){

    return(
        <Container>
            <Profile to="/proile">
                <img src="https://github.com/hugo4s.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Rodrigo Gonçalves</strong>
                </div>
            </Profile>

            <Logout>
                <RiLogoutBoxRLine/>
            </Logout>
        </Container>
    )
}