export default function MyBtn(props){

    const { title } = props.languageProp

    return (
       <li><button className="btn btn-primary">{title}</button></li>
    )
}