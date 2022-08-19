import { FormEvent } from 'react';
import Modal from 'react-modal';
import { InternalModalContainer, TransactionButton, TransactionGroup, SubmitTransactionButton, CloseModalButton } from './styles';
import closeModalImg from '../../assets/close.svg';
import incomeModalImg from '../../assets/income.svg';
import outcomeModalImg from '../../assets/outcome.svg';

interface TransactionModalProps{
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function TransactionModal({ isOpen, onRequestClose }: TransactionModalProps){
    function submitNewTransaction(event: FormEvent){
        event.preventDefault();

    }

    return(
        <>
            <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal-content" overlayClassName="overlay-transaction-modal">
            <CloseModalButton onClick={onRequestClose}>
                <img src={closeModalImg} alt="Botão de fechar modal" />
            </CloseModalButton>

                <InternalModalContainer onSubmit={submitNewTransaction}>
                    <h2>Cadastrar transação</h2>
                    <input type="text" name="title" id="title" placeholder="Título" />
                    <input type="number" name="amount" id="amount" placeholder="Valor" />

                    <TransactionGroup>
                        <TransactionButton className="transaction-type-button">
                            <img src={incomeModalImg} alt="" />
                            <p>Entrada</p>
                        </TransactionButton>
                        <TransactionButton className="transaction-type-button">
                            <img src={outcomeModalImg} alt="" />
                            <p>Saída</p>
                        </TransactionButton>
                    </TransactionGroup>

                    <input type="text" name="category" id="category" placeholder="Categoria"/>

                    <SubmitTransactionButton type="submit">Cadastrar</SubmitTransactionButton>
                </InternalModalContainer>
            </Modal>            
        </>
        );
}