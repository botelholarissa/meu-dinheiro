import { Container, HeaderContent } from './styles';
import logoImg from '../../assets/logo.svg';


interface HeaderProps{
    onRequestOpen: ()=> void;
}

export function Header({ onRequestOpen }: HeaderProps){
    return (
        <Container>
            <HeaderContent>
                <img src={logoImg} alt="círculo azul turquesa com cifrão branco dentro e escrito 'meu dinheiro' ao lado" />
                <button type='button' onClick={ onRequestOpen }>Nova Transação</button>
            </HeaderContent>
        </Container>
    )
}