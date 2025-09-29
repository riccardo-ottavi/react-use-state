
import MyBtn from "./MyBtn"
import languages from "./product/languages"

import { useState } from "react";




export default function MyBtnList(){
    const [activeBtn , setActiveBtn] = useState(null);
    return(
        <div className="btn-list">
            <ul>
                {languages.map(language => (
                    <MyBtn     
                        languageProp = {language} 
                        title = {language.title}
                        isActive = {activeBtn === language.id}
                        onActive = {() => setActiveBtn(activeBtn === language.id ? null : language.id)}
                        key={language.id}
                                       
                    />
                ))}
            </ul>
        </div>      
    )
}