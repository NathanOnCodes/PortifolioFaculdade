import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import Grid from "../../types/DataGrid"
import * as Component from "../../types/HomeStyledComponents/MainBody"


export const Home = () => {
   return (
      <>
         <Grid columns={1} gap="0" style={{ height: "100vh", display: "grid", gridTemplateRows: "1fr 6fr 1fr" }}>
            <Header />
            <Grid columns={0} gap="16px">
               <Component.Container>
                  <Component.Content style={
                     {
                        display: "flex",
                        margin: "auto",
                        justifyContent: "center",
                        flexDirection: "column"
                     }
                  }>
                     <Component.HighTypography style={{ fontSize: "42px", fontWeight: "bold",}}>Desenvolvedor Fullstack Nathan</Component.HighTypography>
                     <Component.LowTypography style={{ fontSize: "22px"}}>
                        Olá! seja bem vindo(a) ao meu portfólio. <br />
                        Sou desenvolvedor FullStack com conhecimento no ecossistema React e Go.  <br />
                        Tenho a missão de impactar vidas com a tecnologia.
                     </Component.LowTypography>

                     <Component.LowContainer>
                        <Component.MidTypography style={{ fontSize: "42px", marginBottom: "0" }} > Acesse minhas redes: </Component.MidTypography>
                        <Component.BtnSocialNetWork target="_blank" href="https://www.google.com" > Instagram  </Component.BtnSocialNetWork>
                        <Component.BtnSocialNetWork target="_blank" href="https://www.google.com"> Github </Component.BtnSocialNetWork>
                        <Component.BtnSocialNetWork target="_blank" href="https://www.google.com"> LinkedIn </Component.BtnSocialNetWork>
                        <Component.BtnSocialNetWork target="_blank" href="https://www.google.com"> Artigos no Medium </Component.BtnSocialNetWork>
                        <Component.BtnSocialNetWork target="_blank" href={require("../../assets/exercicio-estrutura-de-dados-nathan.pdf")} download={"CurriculoPDF"} rel="noreferrer"> Meu Currículo </Component.BtnSocialNetWork>
                     </Component.LowContainer>
                  </Component.Content>

                  <Component.Content >
                     <Component.ImgPrincipal style={{width: "100%", height: "80%", marginTop: "35px" }} src={require("../../assets/SvgDeveloper-removebg.png")} />
                  </Component.Content>

               </Component.Container>


            </Grid>
            <Grid columns={0} gap="0">
               <Footer />
            </Grid>
         </Grid>
      </>
   )
}