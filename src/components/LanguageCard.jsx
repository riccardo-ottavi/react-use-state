export default function LanguageCard(languageProp){
    const { title, description } = languageProp;
    return(
        <div className="lang-card">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
} 