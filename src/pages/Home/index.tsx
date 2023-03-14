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
               <Component.Container style={{display: "flex", flexDirection: "column", justifyContent: "center", margin: "auto"}}>
                  <Component.Content style={{display: "flex", justifyContent: "center", marginTop: "3em"}} >
                     <Component.ImgPrincipal style={{width: "45%", height: "45%" }} alt="imagem do autor do site" src={require("../../assets/perfil.png")} />
                  </Component.Content>


                  <Component.Content style={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center"}}>
                     <Component.HighTypography>Desenvolvedor Fullstack Nathan</Component.HighTypography>
                     <Component.LowTypography>
                        Olá! seja bem vindo(a) ao meu portfólio. <br />
                        Sou desenvolvedor Full Stack com conhecimento no ecossistema React e Go.  <br />
                        Tenho a missão de impactar vidas com a tecnologia.
                     </Component.LowTypography>

                     <Component.LowContainer style={{ marginBottom: "10em", width: "98%", display: "flex", alignItems: "center"}}>
                        <Component.MidTypography > Acesse minhas redes: </Component.MidTypography>
                        <Component.BtnSocialNetWork target="_blank" href="https://instagram.com/eu_nathancavalcante?igshid=ZDdkNTZiNTM=" > Instagram  </Component.BtnSocialNetWork>
                        <Component.BtnSocialNetWork target="_blank" href="https://github.com/NathanCavalcanteFerreira"> Github </Component.BtnSocialNetWork>
                        <Component.BtnSocialNetWork target="_blank" href="https://www.linkedin.com/in/eunathancavalcante/"> LinkedIn </Component.BtnSocialNetWork>
                        <Component.BtnSocialNetWork target="_blank" href="https://medium.com/@eu_nathanferreira"> Artigos no Medium </Component.BtnSocialNetWork>
                        <Component.BtnSocialNetWork target="_blank" href={require("../../assets/NathanCavalcanteCurriculo.pdf")} download={"CurriculoPDF"} rel="noreferrer"> Meu Currículo </Component.BtnSocialNetWork>
                     </Component.LowContainer>
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