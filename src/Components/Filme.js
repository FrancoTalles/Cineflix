import styled from "styled-components"

export default function Filme (props){
    const {filme} = props;
    const {id, overview, posterURL, releaseDate, title} = filme
    console.log(id)
    console.log(title)
    return (
        <Cartaz key={id}>
            <img src={posterURL} alt={title} />
        </Cartaz>
    )
}

const Cartaz = styled.div`
    width: 145px;
    height: 209px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 19px;
    img{
        width: 129px;
        height: 193px;
        margin: 8px;

    }
`