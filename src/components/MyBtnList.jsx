
import MyBtn from "./MyBtn"
import languages from "./product/languages"
import LanguageCard from "./LanguageCard";

import { useState } from "react";




export default function MyBtnList(){
const [activeBtn, setActiveBtn] = useState(null);
const [description, setDescription] = useState("nessun linguaggio selezionato");
    return(
        <div className="btn-list">
            <ul>
                {languages.map(language => (
                    <MyBtn     
                        languageProp = {language} 
                        title = {language.title}
                        isActive = {activeBtn === language.id}
                        onActive = {() => {
                            console.log("bottone premuto: " , language.id)
                            setActiveBtn(activeBtn === language.id ? null : language.id)
                            setDescription(language.description);
                        }}
                        key={language.id}             
                    />
                ))}
            </ul>
            <LanguageCard description={description} />
        </div>      
    )
}