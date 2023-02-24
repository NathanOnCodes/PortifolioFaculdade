import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import * as Component from '../../types/AboutStyledComponents/MainBody'
import Grid from '../../types/DataGrid'

export const About = () => {
  return (
    <>
      <Grid columns={1} gap="0" style={{ height: "100vh", display: "grid", gridTemplateRows: "1fr 6fr 1fr" }}>
         <Header style={{color: "white"}} />
         <Grid columns={0} gap="0">
            <Component.Container>

              <Component.Content style={{ width: "70%", display: "flex", alignItems: "center", marginRight: "100px"}}>
                     {/* <Component.ImgPrincipal style={{borderRadius: "5%", width: "30%", height: "65%", marginTop: "35px", margin: "auto"}} src={"https://raw.githubusercontent.com/NathanCavalcanteFerreira/PortifolioFaculdade/master/src/assets/foto.jpg"} /> */}
                     <Component.LowContainer>
                        <Component.HighTypography style={{fontSize: "42px"}}>Desenvolvedor Fullstack Nathan</Component.HighTypography>
                        <Component.LowTypography style={{ fontSize: "22px"}}>
                            Olá! seja bem vindo(a) ao meu portfólio. <br />
                            Sou desenvolvedor FullStack e estudante de Análise e Desenvolvimento de sistemas com bolsa integral pelo Senac <br />
                            com conhecimento no ecossistema React e Go.  <br />
                            Tenho a missão de impactar vidas com a tecnologia.
                        </Component.LowTypography>
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

