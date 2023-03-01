import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import Grid from "../../types/DataGrid"
import * as Component from "../../types/HomeStyledComponents/MainBody"


export const Home =  () => {
    return (
     <>
      <Grid columns={1} gap="0" style={{ backgroundColor: "rgb(240, 239, 243)" , height: "100vh", display: "grid", gridTemplateRows: "1fr 6fr 1fr" }}>
         <Header  />
         <Grid columns={0} gap="0">
            <Component.Container >
               <Component.Content style={{ width: "60%"}}>
                     <Component.HighTypography style={{fontSize: "42px", fontWeight: "bold"}}>Desenvolvedor Fullstack Nathan</Component.HighTypography>
                     <Component.LowTypography style={{ fontSize: "22px"}}>
                     Olá! seja bem vindo(a) ao meu portfólio. <br />
                     Sou desenvolvedor FullStack com conhecimento no ecossistema React e Go.  <br />
                     Tenho a missão de impactar vidas com a tecnologia.
                     </Component.LowTypography>
                     
                     <Component.LowContainer style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        alignItems: "center",
                        marginTop: "46px",
                     
                        fontSize: "21px"
                     }}>
                        <Component.MidTypography style={{  fontSize: "42px", marginBottom: "0"}} > Acesse minhas redes: </Component.MidTypography>
                        <Component.BtnSocialNetWork target="_blank" href="https://www.google.com" > Instagram  </Component.BtnSocialNetWork>
                        <Component.BtnSocialNetWork target="_blank" href="https://www.google.com"> Github </Component.BtnSocialNetWork>
                        <Component.BtnSocialNetWork target="_blank" href="https://www.google.com"> LinkedIn </Component.BtnSocialNetWork>
                        <Component.BtnSocialNetWork target="_blank" href={ require("../../assets/exercicio-estrutura-de-dados-nathan.pdf")} download={"CurriculoPDF"} rel="noreferrer"> Meu Currículo </Component.BtnSocialNetWork>
                     </Component.LowContainer>
                     
               </Component.Content>

               <Component.Content style={{ width: "35%"}}>
                     <Component.ImgPrincipal style={{borderRadius: "5%", width: "55%", height: "65%", marginRight: "50%", marginTop: "35px"}} src={"https://raw.githubusercontent.com/NathanCavalcanteFerreira/PortifolioFaculdade/master/src/assets/foto.jpg"} />
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