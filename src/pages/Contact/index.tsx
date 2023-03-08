import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import Grid from "../../types/DataGrid"
import * as Component from "../../types/ContactStyledComponents"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export const Contact: React.FC = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail  =  (e: Event) : void  => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }   
        emailjs.send("service_sxh4l4g", "template_ppvr3al", templateParams, "HdhB-fGIiUJf8UYh5")
        .then((response) => {
            setName('')
            setEmail('')
            setMessage('')
        },
            (error) => {
                console.log("Erro: ", error)
            }
        )
    }
    return (
        <>
            <Grid columns={1} gap="10px" style={{
                backgroundColor: "rgb(240, 239, 243)", height: "40vh", display: "grid", gridTemplateRows: "1fr 1fr 1fr"
            }}>
                <Header />
                <Component.TypographHigh> Contato </Component.TypographHigh>
                <Component.TypographMedium> Envie uma mensagem por e-mail: </Component.TypographMedium>

                <Component.Form onSubmit={() => { }}>
                    <Component.Input
                        type="text"
                        placeholder="Digite seu Nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <Component.Input
                        type="text"
                        placeholder="Digite seu E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <Component.TextArea
                        placeholder="Digite sua mensagem..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />

                    <Component.InputSubmit 
                        type="submit"
                        value="Enviar"
                        onClick={() => sendEmail}
                    />

                </Component.Form>
            </Grid>
            <Footer />
        </>
    )
}