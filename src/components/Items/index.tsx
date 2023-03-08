
import * as Component from "../../types/ItemsStyledComponents"

interface IPropsItems {
    currentItems: any[],
}



export const Items: React.FC<IPropsItems> = ({ currentItems }) => {
    return (
        <>
            {
                currentItems?.length > 0 && currentItems?.map((item) => (
                    <Component.Card key={item.id}>
                        <Component.TextPrimary style={{
                            fontSize: "1.2em", margin: "auto", textAlign: "center", alignItems: "center"
                        }}>
                            {item.name}
                        </Component.TextPrimary>
                        
                        {item.description &&
                            <Component.Scrollbar>
                                {item.description}
                            </Component.Scrollbar>
                        }
                        <Component.Btn href={item.html_url} target="_blank"> Acesse o Repositório aqui </ Component.Btn>

                        {/* <Component.Btn href={require(`${html_url}`)}> Acesse o repositório desse projeto </Component.Btn> */}
                    </Component.Card>
                ))
            }
        </>
    )
}

