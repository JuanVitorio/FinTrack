import React, { useEffect, useState } from 'react';
import { getTransacoes } from '../src/services/TransactionService';
import { Transaction } from '../src/types/Transaction';

const Transacoes = () => {
  const [transacoes, setTransacoes] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransacoes = async () => {
      try {
        const data = await getTransacoes();
        setTransacoes(data);
      } catch (error) {
        console.error('Erro ao buscar transações:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransacoes();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Transações</h1>
      <ul>
        {transacoes.map((t) => (
          <li key={t.id}>
            <strong>{t.name}</strong> - R${t.amount} ({t.category}) <br />
            <small>{t.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transacoes;
