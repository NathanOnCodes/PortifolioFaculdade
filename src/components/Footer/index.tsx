import * as FooterRoot from "../../types/FooterStyles"

interface IFooterProps {
  style?: Object
}

export const Footer =  ({style} : IFooterProps) => {
    return (
      <FooterRoot.Container style={style}>
        Desenvolvido por Nathan &copy;
      </FooterRoot.Container>
    )
  }