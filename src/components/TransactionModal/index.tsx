import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { InternalModalContainer, TransactionButton, TransactionGroup, SubmitTransactionButton, CloseModalButton } from './styles';
import closeModalImg from '../../assets/close.svg';
import incomeModalImg from '../../assets/income.svg';
import outcomeModalImg from '../../assets/outcome.svg';
import { api } from '../../services/api';

interface Transaction {
    id: string;
    title: string;
    amount: number;
    category: string;
    transactionType: string;
    createdAt: string;
}


interface TransactionModalProps{
    isOpen: boolean;
    onRequestClose: ()=> void;
    setTransactions: (transactions: Transaction[]) => void;
    transactions: Transaction[];
}

export function TransactionModal({ isOpen, onRequestClose, setTransactions, transactions }: TransactionModalProps){

    const [  transactionType, setTransactionType ] = useState('deposit');
    const [ title, setTitle ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const [ category, setCategory ] = useState('');
    
    async function submitNewTransaction(event: FormEvent){
        event.preventDefault();

        const response = await api.post('transactions', {...{
            title,
            category,
            amount,
            transactionType
        }, createdAt: new Date()});
        const transaction  = response.data;
        setTransactions([...transactions, transaction]);

        onRequestClose();
    }

    return(
        <>
            <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal-content" overlayClassName="overlay-transaction-modal" ariaHideApp={false}>
            <CloseModalButton onClick={onRequestClose}>
                <img src={closeModalImg} alt="Botão de fechar modal" />
            </CloseModalButton>

                <InternalModalContainer onSubmit={submitNewTransaction}>
                    <h2>Cadastrar transação</h2>
                    <input type="text" name="title" id="title" placeholder="Título" onChange={event => setTitle(event.target.value)}/>
                    <input type="number" name="amount" id="amount" placeholder="Valor" onChange={event => setAmount(Number(event.target.value))}/>

                    <TransactionGroup>
                        <TransactionButton className="transaction-type-button" onClick={() => {setTransactionType('deposit')}} background={transactionType === 'deposit' ? '#33CC95': 'buttonface'} type="button">
                            <img src={incomeModalImg} alt="" />
                            <p>Entrada</p>
                        </TransactionButton>
                        <TransactionButton className="transaction-type-button" onClick={() => {setTransactionType('withdraw')}} background={transactionType === 'withdraw' ? '#e52e4d': 'buttonface' } type="button">
                            <img src={outcomeModalImg} alt="" />
                            <p>Saída</p>
                        </TransactionButton>
                    </TransactionGroup>

                    <input type="text" name="category" id="category" placeholder="Categoria" onChange={event => setCategory(event.target.value)}/>

                    <SubmitTransactionButton type="submit">Cadastrar</SubmitTransactionButton>
                </InternalModalContainer>
            </Modal>            
        </>
        );
}