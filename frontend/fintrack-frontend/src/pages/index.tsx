import React from 'react';
import Transacoes from "../../components/Transiction";
import Link from 'next/link';

export default function Home(){
  return(
    <div>
      <Transacoes/>
      <Link href={"/createTransaction"}>Adicionar item</Link>
    </div>

  )
}
