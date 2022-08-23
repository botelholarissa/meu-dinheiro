import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from './styles';

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";


// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

interface Transaction {
    id: string;
    title: string;
    amount: number;
    category: string;
    transactionType: string;
    createdAt: string;
}

interface SummaryProps {
    transactions: Transaction[];
}


export function SummaryMobile({ transactions }: SummaryProps) {

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.transactionType === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdrawals -= transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdrawals: 0,
        total: 0,
    });

    return (
        <Container>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide className="swiper-slide">
                    <div>
                        <header>
                            <h2>Entrada</h2>
                            <img src={incomeImg} alt="Círculo verde sem preenchimento com seta verde para cima." />
                        </header>
                        <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.deposits)}</strong>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div>
                        <header>
                            <h2>Saída</h2>
                            <img src={outcomeImg} alt="Círculo vermelho sem preenchimento com seta vermelha para baixo." />
                        </header>
                        <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.withdrawals)}</strong>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div>
                        <header>
                            <h2>Total</h2>
                            <img src={totalImg} alt="Cifrão branco em fundo branco." />
                        </header>
                        <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.total)}</strong>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};