
import MyBtn from "./MyBtn"
import languages from "./product/languages"

export default function MyBtnList(){
    return(
        <div className="btn-list">
            <ul>
                {languages.map(language => (
                    <MyBtn key={language.id} languageProp = {language} title = {language.title}/>
                ))}
            </ul>
        </div>      
    )
}