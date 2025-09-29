export default function MyBtn(props){

    const { title, isActive } = props.languageProp

    return (
       <li><button 
       onClick={isActive} 
       className="btn btn-primary">{title}</button></li>
    )
}