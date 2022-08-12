import { Container, HeaderContent } from './styles';
import logoImg from '../../assets/logo.svg';


export function Header(){
    return (
        <Container>
            <HeaderContent>
                <img src={logoImg} alt="círculo azul turquesa com cifrão branco dentro e escrito 'meu dinheiro' ao lado" />
                <button type='button'>Nova Transação</button>
            </HeaderContent>
        </Container>
    )
}