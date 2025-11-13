import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  mr: {
    translation: {
      nav: {
        home: "मुख्यपृष्ठ",
        resources: "संसाधने",
        community: "समुदाय",
        contact: "संपर्क",
        login: "लॉगिन",
        logout: "लॉगआउट",
      },
      hero: {
        title: "महिला विकास",
        subtitle: "स्त्रियांसाठी प्रगतीचा नवा मार्ग",
        cta: "सुरू करा",
      },
      about: {
        title: "आमच्या बद्दल",
        description:
          "महिला विकास ग्रामीण महिला उद्यमींना व्यावसायिक शिक्षा, मार्गदर्शन आणि समुदाय समर्थन प्रदान करते। आपण प्रत्येक महिलाला त्याच्या स्वप्न पूर्ण करण्यास मदत करतो।",
      },
      stories: {
        title: "यशस्वी कहाणी",
        story1_name: "प्रिया शर्मा",
        story1_desc: "खेती से होम बिजनेस में परिवर्तन - आज ₹50,000/माह कमाई",
        story2_name: "सुजाता काळे",
        story2_desc: "कौशल प्रशिक्षण से बुटीक व्यवसाय शुरू किया",
        story3_name: "मीरा गायकवाड",
        story3_desc: "डिजिटल साक्षरता पाठ्यक्रम के बाद ऑनलाइन व्यापार",
      },
      resources: {
        title: "संसाधने",
        training: "प्रशिक्षण",
        training_desc: "व्यावसायिक कौशल और डिजिटल साक्षरता",
        schemes: "सरकारी योजना",
        schemes_desc: "महिला उद्यमियों के लिए सरकारी सहायता",
        funding: "वित्तपोषण",
        funding_desc: "ऋण और अनुदान के विकल्प",
        marketing: "विपणन सुझाव",
        marketing_desc: "आपके उत्पाद को बेचने के तरीके",
      },
      community: {
        title: "समुदाय",
        subtitle: "महिला उद्यमियों के साथ जुड़ें",
        message_placeholder: "अपनी कहानी साझा करें...",
        post_button: "पोस्ट करें",
      },
      contact: {
        title: "संपर्क करें",
        name: "नाम",
        email: "ईमेल",
        message: "संदेश",
        submit: "भेजें",
        success: "धन्यवाद! हम जल्द ही संपर्क करेंगे।",
      },
      footer: {
        credit: "Developed by Pawan",
        rights: "सभी अधिकार सुरक्षित।",
      },
    },
  },
  hi: {
    translation: {
      nav: {
        home: "मुखपृष्ठ",
        resources: "संसाधन",
        community: "समुदाय",
        contact: "संपर्क",
        login: "लॉगिन",
        logout: "लॉगआउट",
      },
      hero: {
        title: "महिला विकास",
        subtitle: "महिलाओं के लिए उन्नति का नया रास्ता",
        cta: "शुरू करें",
      },
      about: {
        title: "हमारे बारे में",
        description:
          "महिला विकास ग्रामीण महिला उद्यमियों को व्यावसायिक शिक्षा, मार्गदर्शन और सामुदायिक समर्थन प्रदान करता है। हम हर महिला को अपने सपने पूरे करने में मदद करते हैं।",
      },
      stories: {
        title: "सफलता की कहानियां",
        story1_name: "प्रिया शर्मा",
        story1_desc: "खेती से घरेलू व्यवसाय में बदलाव - आज ₹50,000/महीने की आय",
        story2_name: "सुजाता काले",
        story2_desc: "कौशल प्रशिक्षण से बुटीक व्यवसाय शुरू किया",
        story3_name: "मीरा गायकवाड",
        story3_desc: "डिजिटल साक्षरता पाठ्यक्रम के बाद ऑनलाइन व्यापार",
      },
      resources: {
        title: "संसाधन",
        training: "प्रशिक्षण",
        training_desc: "व्यावसायिक कौशल और डिजिटल साक्षरता",
        schemes: "सरकारी योजनाएं",
        schemes_desc: "महिला उद्यमियों के लिए सरकारी सहायता",
        funding: "वित्तपोषण",
        funding_desc: "ऋण और अनुदान विकल्प",
        marketing: "विपणन सुझाव",
        marketing_desc: "अपने उत्पाद बेचने के तरीके",
      },
      community: {
        title: "समुदाय",
        subtitle: "महिला उद्यमियों से जुड़ें",
        message_placeholder: "अपनी कहानी साझा करें...",
        post_button: "पोस्ट करें",
      },
      contact: {
        title: "हमसे संपर्क करें",
        name: "नाम",
        email: "ईमेल",
        message: "संदेश",
        submit: "भेजें",
        success: "धन्यवाद! हम जल्द ही संपर्क करेंगे।",
      },
      footer: {
        credit: "Developed by Pawan",
        rights: "सभी अधिकार सुरक्षित।",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        resources: "Resources",
        community: "Community",
        contact: "Contact",
        login: "Login",
        logout: "Logout",
      },
      hero: {
        title: "Mahila Vikas",
        subtitle: "A new path of progress for rural women entrepreneurs",
        cta: "Get Started",
      },
      about: {
        title: "About Us",
        description:
          "Mahila Vikas empowers rural women entrepreneurs by providing business education, mentorship, and community support. We help every woman achieve her dreams.",
      },
      stories: {
        title: "Success Stories",
        story1_name: "Priya Sharma",
        story1_desc: "Transformed from farming to home business - Now earning ₹50,000/month",
        story2_name: "Sujata Kale",
        story2_desc: "Started boutique business after skills training",
        story3_name: "Mira Gayakwad",
        story3_desc: "Online business after digital literacy program",
      },
      resources: {
        title: "Resources",
        training: "Training",
        training_desc: "Business skills and digital literacy",
        schemes: "Government Schemes",
        schemes_desc: "Government support for women entrepreneurs",
        funding: "Funding",
        funding_desc: "Loan and grant options",
        marketing: "Marketing Tips",
        marketing_desc: "Ways to sell your products",
      },
      community: {
        title: "Community",
        subtitle: "Connect with women entrepreneurs",
        message_placeholder: "Share your story...",
        post_button: "Post",
      },
      contact: {
        title: "Contact Us",
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send",
        success: "Thank you! We will get back to you soon.",
      },
      footer: {
        credit: "Developed by Pawan",
        rights: "All rights reserved.",
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "mr",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
