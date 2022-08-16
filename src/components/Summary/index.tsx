import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from '../Summary/styles';

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <h2>Entrada</h2>
                    <img src={incomeImg} alt="Círculo verde sem preenchimento com seta verde para cima." />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',  {style: 'currency', currency: 'BRL'}).format(17600)}</strong>
            </div>
            <div>
                <header>
                    <h2>Saída</h2>
                    <img src={outcomeImg} alt="Círculo vermelho sem preenchimento com seta vermelha para baixo." />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',  {style: 'currency', currency: 'BRL'}).format(1259)}</strong>
            </div>
            <div>
                <header>
                    <h2>Total</h2>
                    <img src={totalImg} alt="Cifrão branco em fundo branco." />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',  {style: 'currency', currency: 'BRL'}).format(16156)}</strong>
            </div>
        </Container>
    );
};