export default function MyBtn({ languageProp, onActive }) {
    const { title } = languageProp;


    return (
       <li><button 
       onClick={onActive} 
       className="btn btn-primary">{title}</button></li>
    )
}