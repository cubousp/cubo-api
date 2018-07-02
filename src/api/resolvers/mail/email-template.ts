const STAFF_EMAIL = 'lucas.mafra95@gmail.com'

export const emailTemplate = (
    name: string,
    email: string,
    phone: string,
    message: string,
) => ({
    from: 'formulario-site@cubo.com',
    html: `
     <p>
       A seguinte mensagem foi enviada através do formulário do site do CUBO:       
     </p>
     <br/>
     <p><i>${message}</i></p>
     <br/>
     <p><u>Informações do usuário:</u></p>
     <div>
        <span><b>Nome:</b> ${name}</span>
     </div>
     <div>
        <span><b>Email:</b> ${email}</span>
     </div>
     <div>
        <span><b>Telefone:</b> ${phone}</span>
     </div>
    `,
    subject: 'Novo contato - Formulário site CUBO',
    text: `
        A seguinte mensagem foi enviada através do formulário do site do CUBO
        Mensagem: "${message}"

        Informações do usuário:
        - Nome: ${name}
        - Email: ${email}
        - Telefone: ${phone}
    `,
    to: STAFF_EMAIL,
})
