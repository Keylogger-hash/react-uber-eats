import i18n from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import {LanguageDetectorModule} from "i18next";
import {initReactI18next} from "react-i18next";


i18n.use(I18NextHttpBackend).use(initReactI18next).init({
    fallbackLng:'ru',
    debug:true,
    interpolation:{
        escapeValue: false
    }
})

export default i18n;