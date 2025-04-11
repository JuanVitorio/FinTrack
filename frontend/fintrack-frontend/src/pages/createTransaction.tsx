import React, { useState } from 'react';
import { postTransacao } from '../services/TransactionService';
import { Transaction, Category } from '../types/Transaction';

const CriarTransacao = () => {
  const [formData, setFormData] = useState<Transaction>({
    name: '',
    amount: 0,
    category: 'expense' // valor inicial padrão
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'valor' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const nova = await postTransacao(formData);
      console.log('Transação criada:', nova);
      alert('Transação adicionada!');
    } catch (error) {
      console.error('Erro ao criar transação:', error);
      alert('Erro ao enviar');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nova Transação</h2>

      <label>Nome:</label>
      <input type="text" name="nome" value={formData.name} onChange={handleChange} />

      <label>Valor:</label>
      <input type="number" name="valor" value={formData.amount} onChange={handleChange} />

      <label>Categoria:</label>
      <select name="categoria" value={formData.category} onChange={handleChange}>
        <option value="expense">Despesa</option>
        <option value="income">Receita</option>
      </select>

      <button type="submit">Salvar</button>
    </form>
  );
};

export default CriarTransacao;
