import { Container } from "./styles";

export function StatementTable(){
   return (
    <Container>
        <table>
            <thead>
                <th>Título</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
            </thead>

            <tbody>
                <tr>
                    <td>Bota bonitona verde</td>
                    <td className="withdraw">{new Intl.NumberFormat('pt-BR',  {style: 'currency', currency: 'BRL'}).format(-398)}</td>
                    <td>Vesuário</td>
                    <td>21/07/2022</td>
                </tr>

                <tr>
                    <td>Camisa fogo nos racista</td>
                    <td className="deposit">{new Intl.NumberFormat('pt-BR',  {style: 'currency', currency: 'BRL'}).format(308)}</td>
                    <td>Vesuário</td>
                    <td>12/08/2022</td>
                </tr>
            </tbody>
        </table>
    </Container>
   ); 
}