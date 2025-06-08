import React, { Fragment } from 'react'

const MensagemErro = ({
    error,
    mensagem
}) => {
    const unique = [...new Set(mensagem)];

  return (
    <Fragment>
        {
            error && (
                <div className="invalid-feedback">
                    {
                        unique.map((mens, index)=>(
                                <p key={index}>
                                    <span style={{ margin: "0", color: "red" }}>{mens}</span>
                                </p>
                        ))
                    }
                </div>
            )
        }
    </Fragment>
  )
}

export default MensagemErro

/*
0 - valor invalido para o email
1 - obrigatorio informar o email
    o map é um foreach
*/