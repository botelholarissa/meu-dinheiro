import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from '../Summary/styles';

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <img src={incomeImg} alt="Círculo verde sem preenchimento com seta verde para cima." />
                    <h2>Entrada</h2>
                </header>
                <strong>R$17.400,00</strong>

            </div>
            <div>
                <header>
                    <img src={outcomeImg} alt="Círculo vermelho sem preenchimento com seta vermelha para baixo." />
                    <h2>Saída</h2>
                </header>
                <strong>R$1259,00</strong>
            </div>
            <div>
                <header>
                    <img src={totalImg} alt="Cifrão branco em fundo branco." />
                    <h2>Total</h2>
                </header>
                <strong>R$16.141,00</strong>
            </div>
        </Container>
    );
};