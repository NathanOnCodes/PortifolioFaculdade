import styled from "styled-components";

export const Container = styled.div``;
export const Card = styled.div`
        height: 170px;
        width: 200px;
        padding: 30px;
        gap: 15px;
        display: flex;
        flex-direction: column;
        background-color:  #FFFFFF;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
        border-radius: 8px;
`
export const TextPrimary = styled.span``;
export const Scrollbar = styled.p`
  text-align: center;
  flex-wrap: wrap;
  overflow-y: auto;
  font-size: 1em;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export const Img = styled.image`max-width: 180px; max-height: 180px; margin: auto;`;
export const Btn = styled.a`
        text-decoration: none;
        color: black;
        text-align: center;
        border: 1px solid black;
        padding: 5px;
        border-radius: 4px;
        &:hover{
                background-color: black;
                color: white;
        }
`;