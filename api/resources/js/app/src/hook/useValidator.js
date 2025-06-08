import { useState } from "react";

const useValidator = (initialModel, errorModel, validationRules) => {

    const [model, setModel] = useState(initialModel);
    const [error, setError] = useState(errorModel); //o error model é o erro de login

    /* para realizar uma alteração no campo */
    const handleChangeField = (e) => {

        const {name, value} = e.target;
        setModel((prev) => ({
            ...prev, [name] : value

        }));
        
    }
    /*esse prev pega o valor atual que o campo dentro de [] possui, e passa o value que será o novo valor que ele vai receber */

    const hasErrors = (erros) => {
        return Object.values(erros).some(value => value === true);
    }

    /*para validar todos os campos */
    const validateAll = () => {

        let erros = {}; //é um objeto de erros
        Object.keys(validationRules).forEach((field) => {
            const validationFunction = validationRules[field];
            const value = model[field]; //com o field nós pegamos o valor
            const mensagens = validationFunction(value,model);
            erros[`${field}Mensagem`] = mensagens;
            const hasErros = Array.isArray(mensagens) &&
                             mensagens.some(msg => typeof msg === 'string' && msg.trim().length > 0);

            erros[field] = hasErros;
            console.log(erros);
            //erros[`${field}Mensagem`] = validationFunction(value, model);
            //erros[field] = !!(erros[`${field}Mensagem`] && erros[`${field}Mensagem`].length > 0);            
        })
        
        return erros;

    }

    const formValid = () => {
        const erros = validateAll();
        setError(erros);
        return !hasErrors(erros);
    }

    return {
        model,
        setModel,
        error,
        setError,
        handleChangeField,
        //validateAll,
        formValid,
    }

}

export default useValidator;