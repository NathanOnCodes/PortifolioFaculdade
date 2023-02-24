import * as FooterRoot from "../../types/FooterStyles"

export const Footer =  () => {
    return (
      <FooterRoot.Container style={{
        backgroundColor: "grey",
        height: '75px',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "0", 
      
      }}>
        Desenvolvido por Nathan &copy;
      </FooterRoot.Container>
    )
  }