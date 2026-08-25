/* ==================================================
   VERSION
================================================== */

const APP_VERSION =
  "Ver.1.0";


/* ==================================================
   CONSTANTS
================================================== */

const MAX_LENGTH =
  80;

const MAX_LINES =
  2;

const CUSTOM_QUESTION_MAX_LENGTH =
  40;


/* ==================================================
   TRANSPARENT PIXEL
================================================== */

const TRANSPARENT_PIXEL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjYGBg+A8AAQQBAHAgZQsAAAAASUVORK5CYII=";


/* ==================================================
   QUESTIONS
================================================== */

const QUESTIONS = {

  ja: [

    "キャラクター名と、その名前の由来は？",
    "出身地はどこ？",
    "年齢・誕生日は？",
    "性格を一言で表すと？",
    "得意なこと・苦手なことは？",
    "好きな食べ物・嫌いな食べ物は？",
    "普段はどんな仕事や生活をしている？",
    "戦う理由、冒険を続ける理由は？",
    "大切にしている人・場所・物は？",
    "密かに抱えている夢や目標は？",
    "一番信頼している相手は？",
    "苦手なタイプの人は？",
    "怒るとどうなる？",
    "落ち込んだときはどう過ごす？",
    "恋愛には積極的？それとも慎重？",
    "休日があったら何をして過ごす？",
    "一番怖いものは？",
    "過去に後悔していることは？",
    "誰にも言っていない秘密は？",
    "自由質問"

  ],


  en: [

    "What is your character's name, and where did it come from?",
    "Where are they from?",
    "How old are they, and when is their birthday?",
    "How would you describe their personality in one phrase?",
    "What are they good at, and what are they bad at?",
    "What foods do they like and dislike?",
    "What kind of work or daily life do they usually have?",
    "Why do they fight or continue their adventures?",
    "Who, where, or what is most important to them?",
    "What secret dream or goal do they have?",
    "Who do they trust the most?",
    "What kind of person do they find difficult to deal with?",
    "What are they like when they get angry?",
    "What do they do when they feel down?",
    "Are they forward or cautious when it comes to romance?",
    "How would they spend a day off?",
    "What are they most afraid of?",
    "What do they regret about their past?",
    "What is a secret they have never told anyone?",
    "Custom Question"

  ]

};


/* ==================================================
   TRANSLATIONS
================================================== */

const translations = {

  ja: {

    siteSubtitle:
      "キャラクター設定 20の質問",

    siteDescription:
      "FFXIVのキャラクター設定などを20の質問に記入し、背景画像・文字色などを設定すると、プロフィールカード4枚に出力できます",

    mobileNote:
      "（スマホ表示では縦長表示になります）",

    hashtagBefore:
      "SNSでご利用の際には",

    hashtagAfter:
      "をお使いください",

    questionCardTitle:
      "質問カード",

    questionCardNote:
      "背景色・文字色は固定です",

    questionCardMainTitle:
      "キャラクター設定 20の質問",

    questionsInputTitle:
      "20の質問",

    inputGuide:
      "各回答は最大80文字・2行まで入力できます。20番のみ質問文を自由に設定できます。",

    customQuestionTitle:
      "20. 自由質問",

    customQuestionLabel:
      "質問文",

    customQuestionPlaceholder:
      "例：このキャラクターが一番幸せな時は？",

    answerLabel:
      "回答",

    settingsTitle:
      "回答カード設定",

    answerCard1Settings:
      "回答カード1（Q01 - Q07）",

    answerCard2Settings:
      "回答カード2（Q08 - Q14）",

    answerCard3Settings:
      "回答カード3（Q15 - Q20）",

    backgroundImage:
      "背景画像",

    backgroundX:
      "背景画像の横位置",

    backgroundY:
      "背景画像の縦位置",

    backgroundScale:
      "背景画像の拡大率",

    textColor:
      "文字色",

    overlayColor:
      "背景カバー色",

    overlayOpacity:
      "背景カバーの濃さ",

    white:
      "白",

    black:
      "黒",

    removeBackground1:
      "回答1背景を解除",

    removeBackground2:
      "回答2背景を解除",

    removeBackground3:
      "回答3背景を解除",

    previewTitle:
      "回答カードプレビュー",

    previewNote:
      "実際の1200 × 1200pxカードを縮小表示しています",

    answerCard1:
      "回答カード1",

    answerCard2:
      "回答カード2",

    answerCard3:
      "回答カード3",

    generate:
      "4枚の画像を書き出す",

    preparing:
      "画像を準備しています…",

    cloning:
      current =>
        `${current} / 4 枚目を準備しています…`,

    generating:
      current =>
        `${current} / 4 枚目を生成しています…`,

    exportNote:
      "質問カードとあわせて4枚生成されます",

    exportSize:
      "PNG形式・1200 × 1200px",

    iosGuide:
      "iPhone / iPadでは生成された画像を長押しして保存できます。",

    generatedAlert:
      "4枚の画像を生成しました。",

    cardGenerationError:
      number =>
        `カード${number}の画像生成に失敗しました。`,

    backgroundLoadError:
      "背景画像の読み込みに失敗しました。",

    openImage:
      "画像を開く",

    shareSave:
      "共有 / 保存",

    card:
      "カード"

  },


  en: {

    siteSubtitle:
      "20 Questions for Your Character",

    siteDescription:
      "Answer 20 questions about your FFXIV character, customize the background images and text colors, and export four profile cards.",

    mobileNote:
      "On smartphones, the page is displayed in a vertical layout.",

    hashtagBefore:
      "When sharing on social media, please use",

    hashtagAfter:
      "",

    questionCardTitle:
      "Question Card",

    questionCardNote:
      "Background and text colors are fixed.",

    questionCardMainTitle:
      "20 CHARACTER QUESTIONS",

    questionsInputTitle:
      "20 Questions",

    inputGuide:
      "Each answer can contain up to 80 characters and 2 lines. Question 20 can be customized.",

    customQuestionTitle:
      "20. Custom Question",

    customQuestionLabel:
      "Question",

    customQuestionPlaceholder:
      "Example: When is this character happiest?",

    answerLabel:
      "Answer",

    settingsTitle:
      "Answer Card Settings",

    answerCard1Settings:
      "Answer Card 1 (Q01 - Q07)",

    answerCard2Settings:
      "Answer Card 2 (Q08 - Q14)",

    answerCard3Settings:
      "Answer Card 3 (Q15 - Q20)",

    backgroundImage:
      "Background Image",

    backgroundX:
      "Horizontal Position",

    backgroundY:
      "Vertical Position",

    backgroundScale:
      "Image Scale",

    textColor:
      "Text Color",

    overlayColor:
      "Overlay Color",

    overlayOpacity:
      "Overlay Opacity",

    white:
      "White",

    black:
      "Black",

    removeBackground1:
      "Clear Card 1 Background",

    removeBackground2:
      "Clear Card 2 Background",

    removeBackground3:
      "Clear Card 3 Background",

    previewTitle:
      "Answer Card Preview",

    previewNote:
      "The actual 1200 × 1200px cards are shown at a reduced size.",

    answerCard1:
      "Answer Card 1",

    answerCard2:
      "Answer Card 2",

    answerCard3:
      "Answer Card 3",

    generate:
      "Export 4 Images",

    preparing:
      "Preparing images…",

    cloning:
      current =>
        `Preparing card ${current} / 4…`,

    generating:
      current =>
        `Generating image ${current} / 4…`,

    exportNote:
      "Four images, including the question card, will be generated.",

    exportSize:
      "PNG · 1200 × 1200px",

    iosGuide:
      "On iPhone / iPad, press and hold a generated image to save it.",

    generatedAlert:
      "Four images have been generated.",

    cardGenerationError:
      number =>
        `Failed to generate card ${number}.`,

    backgroundLoadError:
      "Failed to load the background image.",

    openImage:
      "Open Image",

    shareSave:
      "Share / Save",

    card:
      "Card"

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
    translations[savedLanguage]
  ) {

    currentLanguage =
      savedLanguage;

  }

}

catch (error) {

}


/* ==================================================
   VERSION
================================================== */

document
  .querySelectorAll(
    ".version-text"
  )
  .forEach(
    element => {

      element.textContent =
        APP_VERSION;

    }
  );


/* ==================================================
   INITIAL BACKGROUNDS
================================================== */

document
  .querySelectorAll(
    ".card-background-image"
  )
  .forEach(
    image => {

      image.src =
        TRANSPARENT_PIXEL;

    }
  );


/* ==================================================
   LANGUAGE
================================================== */

function setLanguage(
  language
) {

  if (
    !translations[language]
  ) {

    language =
      "ja";

  }


  currentLanguage =
    language;


  try {

    localStorage.setItem(
      "ffxiv-profile-language",
      language
    );

  }

  catch (error) {

  }


  document.documentElement.lang =
    language;


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
          typeof t[key] ===
          "string"
        ) {

          element.textContent =
            t[key];

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


  const mainTitle =
    document.getElementById(
      "question-card-main-title"
    );


  if (
    mainTitle
  ) {

    mainTitle.textContent =
      t.questionCardMainTitle;

  }


  for (
    let i = 1;
    i <= 19;
    i++
  ) {

    const text =
      QUESTIONS[
        language
      ][
        i - 1
      ];


    document
      .querySelectorAll(
        `[data-question="${i}"]`
      )
      .forEach(
        element => {

          element.textContent =
            text;

        }
      );


    document
      .querySelectorAll(
        `[data-input-question="${i}"]`
      )
      .forEach(
        element => {

          element.textContent =
            `${String(i).padStart(2,"0")}. ${text}`;

        }
      );


    document
      .querySelectorAll(
        `[data-answer-question="${i}"]`
      )
      .forEach(
        element => {

          element.textContent =
            `${String(i).padStart(2,"0")}. ${text}`;

        }
      );

  }


  updateQ20Title();


  const q20Input =
    document.getElementById(
      "q20-title"
    );


  if (
    q20Input
  ) {

    q20Input.placeholder =
      t.customQuestionPlaceholder;

  }


  const generateButton =
    document.getElementById(
      "generate-button"
    );


  if (
    generateButton &&
    !generateButton.disabled
  ) {

    generateButton.textContent =
      t.generate;

  }


  const iosGuide =
    document.getElementById(
      "ios-export-guide"
    );


  if (
    iosGuide
  ) {

    iosGuide.textContent =
      t.iosGuide;

  }


  requestAnimationFrame(
    () => {

      updatePreviewScales();

      fitAllAnswerCards();

    }
  );

}


/* ==================================================
   LANGUAGE BUTTONS
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
   IOS / IPADOS
================================================== */

function isIOSDevice() {

  return (
    /iPad|iPhone|iPod/.test(
      navigator.userAgent
    )
    ||
    (
      navigator.platform ===
      "MacIntel"
      &&
      navigator.maxTouchPoints > 1
    )
  );

}


const isIOS =
  isIOSDevice();


const iosGuide =
  document.getElementById(
    "ios-export-guide"
  );


if (
  isIOS &&
  iosGuide
) {

  iosGuide.hidden =
    false;

}


/* ==================================================
   ANSWERS
================================================== */

for (
  let i = 1;
  i <= 20;
  i++
) {

  const input =
    document.getElementById(
      `q${i}`
    );


  const output =
    document.getElementById(
      `answer-${i}`
    );


  const counter =
    document.getElementById(
      `count-q${i}`
    );


  if (
    !input ||
    !output
  ) {

    continue;

  }


  input.addEventListener(
    "keydown",
    event => {

      if (
        event.key !==
        "Enter"
      ) {

        return;

      }


      if (
        input.value
          .split("\n")
          .length
        >=
        MAX_LINES
      ) {

        event.preventDefault();

      }

    }
  );


  const update =
    () => {

      let value =
        input.value
          .replace(
            /\r\n/g,
            "\n"
          )
          .replace(
            /\r/g,
            "\n"
          );


      const lines =
        value.split(
          "\n"
        );


      if (
        lines.length >
        MAX_LINES
      ) {

        value =
          lines
            .slice(
              0,
              MAX_LINES
            )
            .join(
              "\n"
            );

      }


      if (
        value.length >
        MAX_LENGTH
      ) {

        value =
          value.slice(
            0,
            MAX_LENGTH
          );

      }


      input.value =
        value;


      output.textContent =
        value;


      output.style.setProperty(
        "--answer-font-size",
        `${getAnswerFontSize(value.length)}px`
      );


      if (
        counter
      ) {

        counter.textContent =
          value.length;

      }


      requestAnimationFrame(
        fitAllAnswerCards
      );

    };


  input.addEventListener(
    "input",
    update
  );


  update();

}


/* ==================================================
   FONT SIZE
================================================== */

function getAnswerFontSize(
  length
) {

  if (
    length <= 25
  ) {

    return 24;

  }

  if (
    length <= 45
  ) {

    return 22;

  }

  if (
    length <= 60
  ) {

    return 20;

  }


  return 18;

}


/* ==================================================
   FIT
================================================== */

function fitAllAnswerCards() {

  document
    .querySelectorAll(
      ".answer-card"
    )
    .forEach(
      card => {

        card.classList.remove(
          "compact-1",
          "compact-2"
        );


        if (
          cardFits(
            card
          )
        ) {

          return;

        }


        card.classList.add(
          "compact-1"
        );


        if (
          cardFits(
            card
          )
        ) {

          return;

        }


        card.classList.remove(
          "compact-1"
        );


        card.classList.add(
          "compact-2"
        );

      }
    );

}


function cardFits(
  card
) {

  const blocks =
    card.querySelectorAll(
      ".answer-block"
    );


  if (
    !blocks.length
  ) {

    return true;

  }


  const last =
    blocks[
      blocks.length - 1
    ];


  return (
    last.offsetTop
    +
    last.offsetHeight
    <=
    1045
  );

}


/* ==================================================
   Q20
================================================== */

const q20Title =
  document.getElementById(
    "q20-title"
  );


function updateQ20Title() {

  if (
    !q20Title
  ) {

    return;

  }


  let value =
    q20Title.value
      .replace(
        /[\r\n]/g,
        ""
      )
      .slice(
        0,
        CUSTOM_QUESTION_MAX_LENGTH
      );


  q20Title.value =
    value;


  const displayText =
    value.trim()
    ||
    QUESTIONS[
      currentLanguage
    ][19];


  const preview =
    document.getElementById(
      "question-20-preview"
    );


  const answer =
    document.getElementById(
      "answer-question-20"
    );


  const counter =
    document.getElementById(
      "count-q20-title"
    );


  if (
    preview
  ) {

    preview.textContent =
      displayText;

  }


  if (
    answer
  ) {

    answer.textContent =
      `20. ${displayText}`;

  }


  if (
    counter
  ) {

    counter.textContent =
      value.length;

  }

}


if (
  q20Title
) {

  q20Title.addEventListener(
    "input",
    updateQ20Title
  );

}


/* ==================================================
   FILE READER
================================================== */

function readImageAsDataURL(
  file
) {

  return new Promise(
    (
      resolve,
      reject
    ) => {

      const reader =
        new FileReader();


      reader.onload =
        () => {

          resolve(
            reader.result
          );

        };


      reader.onerror =
        reject;


      reader.readAsDataURL(
        file
      );

    }
  );

}


/* ==================================================
   WAIT IMAGE
================================================== */

function waitForImage(
  image
) {

  return new Promise(
    resolve => {

      if (
        !image
      ) {

        resolve();

        return;

      }


      const src =
        image.getAttribute(
          "src"
        );


      if (
        !src ||
        src === TRANSPARENT_PIXEL ||
        image.complete
      ) {

        resolve();

        return;

      }


      let finished =
        false;


      const finish =
        () => {

          if (
            finished
          ) {

            return;

          }


          finished =
            true;


          clearTimeout(
            timeout
          );


          resolve();

        };


      const timeout =
        setTimeout(
          finish,
          3000
        );


      image.addEventListener(
        "load",
        finish,
        {
          once: true
        }
      );


      image.addEventListener(
        "error",
        finish,
        {
          once: true
        }
      );

    }
  );

}


/* ==================================================
   WAIT BACKGROUNDS
================================================== */

async function waitForAllBackgroundImages() {

  const images =
    Array.from(
      document.querySelectorAll(
        ".card-background-image"
      )
    );


  const realImages =
    images.filter(
      image => {

        const src =
          image.getAttribute(
            "src"
          );


        return (
          src &&
          src !== TRANSPARENT_PIXEL
        );

      }
    );


  await Promise.all(
    realImages.map(
      waitForImage
    )
  );


  await nextFrame();

}


/* ==================================================
   NEXT FRAME
================================================== */

function nextFrame() {

  return new Promise(
    resolve => {

      requestAnimationFrame(
        () => {

          requestAnimationFrame(
            resolve
          );

        }
      );

    }
  );

}


/* ==================================================
   SETTINGS
================================================== */

function setupCardSettings(
  options
) {

  const card =
    document.getElementById(
      options.cardId
    );


  const image =
    document.getElementById(
      options.backgroundImageId
    );


  const upload =
    document.getElementById(
      options.backgroundUploadId
    );


  const removeButton =
    document.getElementById(
      options.removeButtonId
    );


  const x =
    document.getElementById(
      options.bgXId
    );


  const xValue =
    document.getElementById(
      options.bgXValueId
    );


  const y =
    document.getElementById(
      options.bgYId
    );


  const yValue =
    document.getElementById(
      options.bgYValueId
    );


  const scale =
    document.getElementById(
      options.bgScaleId
    );


  const scaleValue =
    document.getElementById(
      options.bgScaleValueId
    );


  const overlay =
    document.querySelector(
      options.overlaySelector
    );


  const opacity =
    document.getElementById(
      options.overlayOpacityId
    );


  const opacityValue =
    document.getElementById(
      options.overlayOpacityValueId
    );


  if (
    !card ||
    !image ||
    !upload ||
    !removeButton ||
    !x ||
    !y ||
    !scale ||
    !overlay ||
    !opacity
  ) {

    console.error(
      "Missing card settings:",
      options
    );


    return;

  }


  image.src =
    TRANSPARENT_PIXEL;


  let overlayColor =
    document.querySelector(
      `input[name="${options.overlayRadioName}"]:checked`
    )?.value
    ||
    "black";


  function updateBackground() {

    const xNumber =
      Number(
        x.value
      );


    const yNumber =
      Number(
        y.value
      );


    const scaleNumber =
      Number(
        scale.value
      );


    image.style.objectPosition =
      `${xNumber}% ${yNumber}%`;


    image.style.transform =
      `scale(${scaleNumber / 100})`;


    image.style.transformOrigin =
      `${xNumber}% ${yNumber}%`;


    if (
      xValue
    ) {

      xValue.textContent =
        `${xNumber}%`;

    }


    if (
      yValue
    ) {

      yValue.textContent =
        `${yNumber}%`;

    }


    if (
      scaleValue
    ) {

      scaleValue.textContent =
        `${scaleNumber}%`;

    }

  }


  function updateOverlay() {

    const value =
      Number(
        opacity.value
      );


    const rgb =
      overlayColor ===
      "white"
      ?
      "255,255,255"
      :
      "0,0,0";


    overlay.style.backgroundColor =
      `rgba(${rgb},${value})`;


    if (
      opacityValue
    ) {

      opacityValue.textContent =
        `${Math.round(value * 100)}%`;

    }

  }


  function applyTextTheme(
    color
  ) {

    card.classList.remove(
      "text-white",
      "text-black",
      "light-theme"
    );


    if (
      color ===
      "black"
    ) {

      card.classList.add(
        "text-black",
        "light-theme"
      );

    }

    else {

      card.classList.add(
        "text-white"
      );

    }

  }


  upload.addEventListener(
    "change",
    async event => {

      const file =
        event.target.files[
          0
        ];


      if (
        !file
      ) {

        return;

      }


      try {

        const dataUrl =
          await readImageAsDataURL(
            file
          );


        image.src =
          dataUrl;


        await waitForImage(
          image
        );


        updateBackground();

      }

      catch (error) {

        console.error(
          error
        );


        alert(
          translations[
            currentLanguage
          ].backgroundLoadError
        );

      }

    }
  );


  removeButton.addEventListener(
    "click",
    () => {

      upload.value =
        "";


      image.src =
        TRANSPARENT_PIXEL;


      x.value =
        50;


      y.value =
        50;


      scale.value =
        100;


      updateBackground();

    }
  );


  x.addEventListener(
    "input",
    updateBackground
  );


  y.addEventListener(
    "input",
    updateBackground
  );


  scale.addEventListener(
    "input",
    updateBackground
  );


  opacity.addEventListener(
    "input",
    updateOverlay
  );


  document
    .querySelectorAll(
      `input[name="${options.overlayRadioName}"]`
    )
    .forEach(
      radio => {

        radio.addEventListener(
          "change",
          () => {

            if (
              radio.checked
            ) {

              overlayColor =
                radio.value;


              updateOverlay();

            }

          }
        );

      }
    );


  document
    .querySelectorAll(
      `input[name="${options.textRadioName}"]`
    )
    .forEach(
      radio => {

        radio.addEventListener(
          "change",
          () => {

            if (
              radio.checked
            ) {

              applyTextTheme(
                radio.value
              );

            }

          }
        );

      }
    );


  const checkedText =
    document.querySelector(
      `input[name="${options.textRadioName}"]:checked`
    );


  applyTextTheme(
    checkedText
      ?
      checkedText.value
      :
      "white"
  );


  updateBackground();

  updateOverlay();

}


/* ==================================================
   SETUPS
================================================== */

setupCardSettings({

  cardId:
    "card-2",

  backgroundImageId:
    "answer1-background-image",

  backgroundUploadId:
    "answer1-background-upload",

  removeButtonId:
    "remove-answer1-background",

  bgXId:
    "answer1-bg-x",

  bgXValueId:
    "answer1-bg-x-value",

  bgYId:
    "answer1-bg-y",

  bgYValueId:
    "answer1-bg-y-value",

  bgScaleId:
    "answer1-bg-scale",

  bgScaleValueId:
    "answer1-bg-scale-value",

  overlaySelector:
    ".answer1-overlay",

  overlayOpacityId:
    "answer1-overlay-opacity",

  overlayOpacityValueId:
    "answer1-opacity-value",

  overlayRadioName:
    "answer1-overlay-color",

  textRadioName:
    "answer1-text-color"

});


setupCardSettings({

  cardId:
    "card-3",

  backgroundImageId:
    "answer2-background-image",

  backgroundUploadId:
    "answer2-background-upload",

  removeButtonId:
    "remove-answer2-background",

  bgXId:
    "answer2-bg-x",

  bgXValueId:
    "answer2-bg-x-value",

  bgYId:
    "answer2-bg-y",

  bgYValueId:
    "answer2-bg-y-value",

  bgScaleId:
    "answer2-bg-scale",

  bgScaleValueId:
    "answer2-bg-scale-value",

  overlaySelector:
    ".answer2-overlay",

  overlayOpacityId:
    "answer2-overlay-opacity",

  overlayOpacityValueId:
    "answer2-opacity-value",

  overlayRadioName:
    "answer2-overlay-color",

  textRadioName:
    "answer2-text-color"

});


setupCardSettings({

  cardId:
    "card-4",

  backgroundImageId:
    "answer3-background-image",

  backgroundUploadId:
    "answer3-background-upload",

  removeButtonId:
    "remove-answer3-background",

  bgXId:
    "answer3-bg-x",

  bgXValueId:
    "answer3-bg-x-value",

  bgYId:
    "answer3-bg-y",

  bgYValueId:
    "answer3-bg-y-value",

  bgScaleId:
    "answer3-bg-scale",

  bgScaleValueId:
    "answer3-bg-scale-value",

  overlaySelector:
    ".answer3-overlay",

  overlayOpacityId:
    "answer3-overlay-opacity",

  overlayOpacityValueId:
    "answer3-opacity-value",

  overlayRadioName:
    "answer3-overlay-color",

  textRadioName:
    "answer3-text-color"

});


/* ==================================================
   PREVIEW SCALE
================================================== */

function updatePreviewScales() {

  document
    .querySelectorAll(
      ".card-frame"
    )
    .forEach(
      frame => {

        const card =
          frame.querySelector(
            ".profile-card"
          );


        if (
          !card
        ) {

          return;

        }


        const padding =
          4;


        const width =
          Math.max(
            0,
            frame.clientWidth -
            padding * 2
          );


        const scale =
          width /
          1200;


        card.style.setProperty(
          "--preview-scale",
          scale
        );


        card.style.left =
          `${padding}px`;


        card.style.top =
          `${padding}px`;

      }
    );

}


window.addEventListener(
  "resize",
  () => {

    requestAnimationFrame(
      updatePreviewScales
    );

  }
);


/* ==================================================
   DATA URL -> BLOB
================================================== */

function dataURLToBlob(
  dataUrl
) {

  const parts =
    dataUrl.split(
      ","
    );


  const mime =
    parts[0]
      .match(
        /:(.*?);/
      )?.[1]
      ||
      "image/png";


  const binary =
    atob(
      parts[1]
    );


  const bytes =
    new Uint8Array(
      binary.length
    );


  for (
    let i = 0;
    i < binary.length;
    i++
  ) {

    bytes[i] =
      binary.charCodeAt(
        i
      );

  }


  return new Blob(
    [
      bytes
    ],
    {
      type:
        mime
    }
  );

}


/* ==================================================
   EXPORT CLONE
================================================== */

function createExportClone(
  sourceCard
) {

  const workspace =
    document.getElementById(
      "export-workspace"
    );


  if (
    !workspace
  ) {

    throw new Error(
      "export workspace missing"
    );

  }


  workspace.innerHTML =
    "";


  const clone =
    sourceCard.cloneNode(
      true
    );


  /*
    clone内で重複IDを作らない
  */

  clone.removeAttribute(
    "id"
  );


  clone.querySelectorAll(
    "[id]"
  )
  .forEach(
    element => {

      element.removeAttribute(
        "id"
      );

    }
  );


  clone.classList.add(
    "export-clone"
  );


  clone.style.setProperty(
    "--preview-scale",
    "1"
  );


  clone.style.transform =
    "none";


  clone.style.left =
    "0";


  clone.style.top =
    "0";


  clone.style.width =
    "1200px";


  clone.style.height =
    "1200px";


  workspace.appendChild(
    clone
  );


  return clone;

}


/* ==================================================
   PREPARE CLONE IMAGES
================================================== */

async function prepareCloneImages(
  clone
) {

  const images =
    Array.from(
      clone.querySelectorAll(
        "img"
      )
    );


  for (
    const image of images
  ) {

    const src =
      image.getAttribute(
        "src"
      );


    if (
      !src
    ) {

      image.src =
        TRANSPARENT_PIXEL;

    }


    await waitForImage(
      image
    );

  }


  await nextFrame();

}


/* ==================================================
   GENERATE CLONE
================================================== */

async function generateCardImage(
  sourceCard,
  index
) {

  const clone =
    createExportClone(
      sourceCard
    );


  try {

    await prepareCloneImages(
      clone
    );


    await nextFrame();


    /*
      WebKitに描画時間を返す
    */

    if (
      isIOS
    ) {

      await sleep(
        350
      );

    }


    const options = {

      width:
        1200,

      height:
        1200,

      canvasWidth:
        1200,

      canvasHeight:
        1200,

      pixelRatio:
        1,

      cacheBust:
        false,

      backgroundColor:
        index === 1
          ?
          "#f4f1e9"
          :
          "#101722",

      style: {

        position:
          "relative",

        left:
          "0",

        top:
          "0",

        transform:
          "none",

        transformOrigin:
          "top left",

        width:
          "1200px",

        height:
          "1200px"

      }

    };


    /*
      iPhone / iPad

      cloneに対してのみtoPng
    */

    if (
      isIOS
    ) {

      const dataUrl =
        await htmlToImage.toPng(
          clone,
          options
        );


      return dataURLToBlob(
        dataUrl
      );

    }


    /*
      PC
    */

    const blob =
      await htmlToImage.toBlob(
        clone,
        options
      );


    if (
      !blob
    ) {

      throw new Error(
        `card-${index} blob is null`
      );

    }


    return blob;

  }

  finally {

    const workspace =
      document.getElementById(
        "export-workspace"
      );


    if (
      workspace
    ) {

      workspace.innerHTML =
        "";

    }

  }

}


/* ==================================================
   EXPORT
================================================== */

const generateButton =
  document.getElementById(
    "generate-button"
  );


const mobileExportResults =
  document.getElementById(
    "mobile-export-results"
  );


let generatedObjectUrls =
  [];


if (
  generateButton
) {

  generateButton.addEventListener(
    "click",
    async () => {

      const t =
        translations[
          currentLanguage
        ];


      let currentCard =
        0;


      generateButton.disabled =
        true;


      generateButton.textContent =
        t.preparing;


      clearGeneratedResults();


      try {

        if (
          typeof htmlToImage ===
          "undefined"
        ) {

          throw new Error(
            "html-to-image not loaded"
          );

        }


        /*
          フォント待機
        */

        if (
          document.fonts
        ) {

          try {

            await Promise.race(
              [

                document.fonts.ready,

                sleep(
                  3000
                )

              ]
            );

          }

          catch (error) {

          }

        }


        await waitForAllBackgroundImages();


        fitAllAnswerCards();


        await nextFrame();


        const generated =
          [];


        for (
          let i = 1;
          i <= 4;
          i++
        ) {

          currentCard =
            i;


          generateButton.textContent =
            t.cloning(
              i
            );


          const sourceCard =
            document.getElementById(
              `card-${i}`
            );


          if (
            !sourceCard
          ) {

            throw new Error(
              `card-${i} missing`
            );

          }


          /*
            ボタン表示更新を確実に反映
          */

          await nextFrame();


          if (
            isIOS
          ) {

            await sleep(
              250
            );

          }


          generateButton.textContent =
            t.generating(
              i
            );


          await nextFrame();


          const blob =
            await generateCardImage(
              sourceCard,
              i
            );


          generated.push(
            {

              index:
                i,

              blob:
                blob,

              filename:
                `ffxiv-profile-${i}.png`

            }
          );


          /*
            各カード処理後に
            WebKitへ処理を返す
          */

          await sleep(
            isIOS
              ?
              1000
              :
              300
          );


          await nextFrame();

        }


        /* ==================================================
           IOS / IPAD
        ================================================== */

        if (
          isIOS
        ) {

          showIOSExportResults(
            generated
          );


          alert(
            t.generatedAlert
          );

        }


        /* ==================================================
           PC
        ================================================== */

        else {

          for (
            const item of generated
          ) {

            downloadBlob(
              item.blob,
              item.filename
            );


            await sleep(
              300
            );

          }

        }

      }

      catch (
        error
      ) {

        console.error(
          "Image generation error:",
          error
        );


        if (
          currentCard > 0
        ) {

          alert(
            t.cardGenerationError(
              currentCard
            )
          );

        }

        else {

          alert(
            currentLanguage ===
            "ja"

            ?
            "画像生成の準備に失敗しました。"

            :
            "Failed to prepare image generation."
          );

        }

      }

      finally {

        /*
          cloneを必ず消す
        */

        const workspace =
          document.getElementById(
            "export-workspace"
          );


        if (
          workspace
        ) {

          workspace.innerHTML =
            "";

        }


        generateButton.disabled =
          false;


        generateButton.textContent =
          translations[
            currentLanguage
          ].generate;

      }

    }
  );

}


/* ==================================================
   IOS RESULTS
================================================== */

function showIOSExportResults(
  generated
) {

  if (
    !mobileExportResults
  ) {

    return;

  }


  const t =
    translations[
      currentLanguage
    ];


  mobileExportResults.hidden =
    false;


  generated.forEach(
    item => {

      const url =
        URL.createObjectURL(
          item.blob
        );


      generatedObjectUrls.push(
        url
      );


      const wrapper =
        document.createElement(
          "div"
        );


      wrapper.className =
        "mobile-export-item";


      const title =
        document.createElement(
          "h4"
        );


      title.textContent =
        `${t.card} ${item.index}`;


      const image =
        document.createElement(
          "img"
        );


      image.src =
        url;


      image.alt =
        `FFXIV Character Profile Card ${item.index}`;


      const actions =
        document.createElement(
          "div"
        );


      actions.className =
        "mobile-export-actions";


      const openLink =
        document.createElement(
          "a"
        );


      openLink.href =
        url;


      openLink.target =
        "_blank";


      openLink.rel =
        "noopener";


      openLink.textContent =
        t.openImage;


      actions.appendChild(
        openLink
      );


      try {

        const file =
          new File(
            [
              item.blob
            ],
            item.filename,
            {
              type:
                "image/png"
            }
          );


        if (
          navigator.share &&
          navigator.canShare &&
          navigator.canShare(
            {
              files:
                [
                  file
                ]
            }
          )
        ) {

          const shareButton =
            document.createElement(
              "button"
            );


          shareButton.type =
            "button";


          shareButton.textContent =
            t.shareSave;


          shareButton.addEventListener(
            "click",
            async () => {

              try {

                await navigator.share(
                  {

                    files:
                      [
                        file
                      ],

                    title:
                      `FFXIV Character Profile Card ${item.index}`

                  }
                );

              }

              catch (error) {

                if (
                  error.name !==
                  "AbortError"
                ) {

                  console.error(
                    error
                  );

                }

              }

            }
          );


          actions.appendChild(
            shareButton
          );

        }

      }

      catch (error) {

        console.warn(
          error
        );

      }


      wrapper.appendChild(
        title
      );


      wrapper.appendChild(
        image
      );


      wrapper.appendChild(
        actions
      );


      mobileExportResults.appendChild(
        wrapper
      );

    }
  );


  mobileExportResults.scrollIntoView(
    {

      behavior:
        "smooth",

      block:
        "start"

    }
  );

}


/* ==================================================
   CLEAR GENERATED RESULTS
================================================== */

function clearGeneratedResults() {

  generatedObjectUrls.forEach(
    url => {

      URL.revokeObjectURL(
        url
      );

    }
  );


  generatedObjectUrls =
    [];


  if (
    mobileExportResults
  ) {

    mobileExportResults.innerHTML =
      "";


    mobileExportResults.hidden =
      true;

  }

}


/* ==================================================
   DOWNLOAD
================================================== */

function downloadBlob(
  blob,
  filename
) {

  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    filename;


  document.body.appendChild(
    link
  );


  link.click();


  link.remove();


  setTimeout(
    () => {

      URL.revokeObjectURL(
        url
      );

    },
    2000
  );

}


/* ==================================================
   SLEEP
================================================== */

function sleep(
  milliseconds
) {

  return new Promise(
    resolve => {

      setTimeout(
        resolve,
        milliseconds
      );

    }
  );

}


/* ==================================================
   INITIAL
================================================== */

window.addEventListener(
  "load",
  async () => {

    setLanguage(
      currentLanguage
    );


    updatePreviewScales();


    fitAllAnswerCards();


    try {

      await waitForAllBackgroundImages();

    }

    catch (error) {

      console.warn(
        error
      );

    }

  }
);