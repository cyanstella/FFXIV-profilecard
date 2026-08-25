/* ==================================================
   VERSION
================================================== */

const APP_VERSION =
  "Ver.1.0";


/* ==================================================
   TRANSLATIONS
================================================== */

const translations = {

  ja: {

    title:
      "免責事項",

    aboutTitle:
      "本サイトについて",

    about1:
      "本サイト「FFXIV Character Profile Card」は、FINAL FANTASY XIVのキャラクタープロフィールカードを作成するための、個人制作による非公式ツールです。",

    about2:
      "本サイトは株式会社スクウェア・エニックスおよびFINAL FANTASY XIV公式とは関係ありません。",

    operationTitle:
      "動作について",

    operation1:
      "端末、OS、ブラウザの種類やバージョン、使用する画像データなどの環境によって、表示崩れ、画像生成の失敗、背景画像の未反映、文字位置のずれ、画像保存の失敗などが発生する場合があります。",

    operation2:
      "すべての端末・OS・ブラウザ環境での正常な動作を保証するものではありません。",

    dataTitle:
      "入力データについて",

    data1:
      "本サイトで入力した文章や選択した画像は、基本的に利用中のブラウザ上で処理されます。",

    data2:
      "ブラウザの更新、再読み込み、終了などによって入力内容が失われる場合があります。必要な文章や生成した画像については、利用者自身で保存してください。",

    responsibilityTitle:
      "利用に関する責任",

    responsibility1:
      "本サイトの利用によって生じたデータの消失、端末やブラウザ上の不具合、その他の損害について、制作者は責任を負いかねます。",

    responsibility2:
      "本サイトは利用者自身の責任においてご利用ください。",

    rightsTitle:
      "画像・文章等の権利について",

    rights1:
      "本サイトで使用する画像や文章については、第三者の著作権、肖像権、その他の権利を侵害しないよう、利用者自身の責任でご確認ください。",

    contactTitle:
      "連絡先",

    contactText:
      "ご連絡は、X（旧Twitter）までお願いいたします。",

    back:
      "← FFXIV Character Profile Cardへ戻る"

  },


  en: {

    title:
      "Disclaimer",

    aboutTitle:
      "About This Website",

    about1:
      "FFXIV Character Profile Card is an independently created unofficial tool for creating character profile cards for FINAL FANTASY XIV.",

    about2:
      "This website is not affiliated with or endorsed by SQUARE ENIX CO., LTD. or the official FINAL FANTASY XIV service.",

    operationTitle:
      "Operation and Compatibility",

    operation1:
      "Depending on the device, operating system, browser, browser version, or image data being used, display issues, failed image generation, missing background images, differences in text positioning, or image saving problems may occur.",

    operation2:
      "Normal operation is not guaranteed on every device, operating system, or browser environment.",

    dataTitle:
      "Input Data",

    data1:
      "Text entered and images selected on this website are generally processed within the browser being used.",

    data2:
      "Entered information may be lost when the browser is refreshed, reloaded, or closed. Please save any important text or generated images yourself.",

    responsibilityTitle:
      "Responsibility for Use",

    responsibility1:
      "The creator assumes no responsibility for loss of data, problems with devices or browsers, or any other damages arising from the use of this website.",

    responsibility2:
      "Please use this website at your own responsibility.",

    rightsTitle:
      "Rights to Images and Text",

    rights1:
      "Users are responsible for ensuring that images and text used with this website do not infringe copyrights, portrait rights, or any other rights belonging to third parties.",

    contactTitle:
      "Contact",

    contactText:
      "Please contact me via X (formerly Twitter).",

    back:
      "← Back to FFXIV Character Profile Card"

  }

};


/* ==================================================
   LANGUAGE STATE
================================================== */

let currentLanguage =
  "ja";


try {

  const savedLanguage =
    localStorage.getItem(
      "ffxiv-profile-language"
    );


  if (
    translations[
      savedLanguage
    ]
  ) {

    currentLanguage =
      savedLanguage;

  }

}

catch (
  error
) {}


/* ==================================================
   VERSION
================================================== */

const versionText =
  document.getElementById(
    "version-text"
  );


if (
  versionText
) {

  versionText.textContent =
    APP_VERSION;

}


/* ==================================================
   LANGUAGE
================================================== */

function setLanguage(
  language
) {

  if (
    !translations[
      language
    ]
  ) {

    language =
      "ja";

  }


  currentLanguage =
    language;


  document.documentElement.lang =
    language;


  try {

    localStorage.setItem(
      "ffxiv-profile-language",
      language
    );

  }

  catch (
    error
  ) {}


  const t =
    translations[
      language
    ];


  document
    .querySelectorAll(
      "[data-i18n]"
    )
    .forEach(
      element => {

        const key =
          element.dataset.i18n;


        if (
          typeof t[
            key
          ] ===
          "string"
        ) {

          element.textContent =
            t[
              key
            ];

        }

      }
    );


  document
    .querySelectorAll(
      ".language-button"
    )
    .forEach(
      button => {

        button.classList.toggle(
          "active",
          button.dataset.language ===
          language
        );

      }
    );


  if (
    language ===
    "en"
  ) {

    document.title =
      "Disclaimer | FFXIV Character Profile Card";

  }

  else {

    document.title =
      "免責事項 | FFXIV Character Profile Card";

  }

}


/* ==================================================
   LANGUAGE BUTTON
================================================== */

document
  .querySelectorAll(
    ".language-button"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          setLanguage(
            button.dataset.language
          );

        }
      );

    }
  );


/* ==================================================
   INITIALIZE
================================================== */

setLanguage(
  currentLanguage
);