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

    generating:
      (current) =>
        `${current} / 4 枚目を生成しています…`,

    exportNote:
      "質問カードとあわせて4枚生成されます",

    exportSize:
      "PNG形式・1200 × 1200px",

    iosGuide:
      "iPhoneでは生成された画像を長押しして「写真に保存」できます。",

    generatedAlert:
      "4枚の画像を生成しました。\n下に表示された画像を長押しして保存できます。",

    errorAlert:
      "画像の生成に失敗しました。",

    cardGenerationError:
      (cardNumber) =>
        `カード${cardNumber}の画像生成に失敗しました。\nページを再読み込みしてもう一度お試しください。`,

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

    generating:
      (current) =>
        `Generating image ${current} / 4…`,

    exportNote:
      "Four images, including the question card, will be generated.",

    exportSize:
      "PNG · 1200 × 1200px",

    iosGuide:
      "On iPhone, press and hold a generated image to save it to Photos.",

    generatedAlert:
      "Four images have been generated.\nPress and hold the images below to save them.",

    errorAlert:
      "Image generation failed.",

    cardGenerationError:
      (cardNumber) =>
        `Failed to generate card ${cardNumber}.\nPlease reload the page and try again.`,

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
   CURRENT LANGUAGE
================================================== */

let currentLanguage =
  localStorage.getItem(
    "ffxiv-profile-language"
  )
  ||
  "ja";


if (
  !translations[currentLanguage]
) {

  currentLanguage =
    "ja";

}


/* ==================================================
   VERSION
================================================== */

document
  .querySelectorAll(
    ".version-text"
  )
  .forEach(
    (element) => {

      element.textContent =
        APP_VERSION;

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


  localStorage.setItem(
    "ffxiv-profile-language",
    language
  );


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
      (
        element
      ) => {

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
      (
        button
      ) => {

        button.classList.toggle(
          "active",
          button.dataset.language ===
          language
        );

      }
    );


  const questionCardMainTitle =
    document.getElementById(
      "question-card-main-title"
    );


  if (
    questionCardMainTitle
  ) {

    questionCardMainTitle.textContent =
      t.questionCardMainTitle;

  }


  for (
    let i = 1;
    i <= 19;
    i++
  ) {

    const questionText =
      QUESTIONS[language][
        i - 1
      ];


    document
      .querySelectorAll(
        `[data-question="${i}"]`
      )
      .forEach(
        (
          element
        ) => {

          element.textContent =
            questionText;

        }
      );


    document
      .querySelectorAll(
        `[data-input-question="${i}"]`
      )
      .forEach(
        (
          element
        ) => {

          element.textContent =
            `${String(i).padStart(2,"0")}. ${questionText}`;

        }
      );


    document
      .querySelectorAll(
        `[data-answer-question="${i}"]`
      )
      .forEach(
        (
          element
        ) => {

          element.textContent =
            `${String(i).padStart(2,"0")}. ${questionText}`;

        }
      );

  }


  updateQ20Title();


  const q20TitleInput =
    document.getElementById(
      "q20-title"
    );


  if (
    q20TitleInput
  ) {

    q20TitleInput.placeholder =
      t.customQuestionPlaceholder;

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


  requestAnimationFrame(
    () => {

      fitAllAnswerCards();

      updatePreviewScales();

    }
  );

}


/* ==================================================
   LANGUAGE BUTTON
================================================== */

document
  .querySelectorAll(
    ".language-button"
  )
  .forEach(
    (
      button
    ) => {

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
   IOS DETECTION
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
   ANSWER MEASURE
================================================== */

const answerMeasure =
  document.createElement(
    "div"
  );


answerMeasure.setAttribute(
  "aria-hidden",
  "true"
);


Object.assign(
  answerMeasure.style,
  {

    position:
      "fixed",

    left:
      "-99999px",

    top:
      "0",

    visibility:
      "hidden",

    width:
      "1020px",

    margin:
      "0",

    padding:
      "0",

    fontFamily:
      '"Hiragino Mincho ProN", "Yu Mincho", serif',

    fontWeight:
      "400",

    lineHeight:
      "1.38",

    whiteSpace:
      "pre-wrap",

    overflowWrap:
      "anywhere",

    wordBreak:
      "break-word"

  }
);


document.body.appendChild(
  answerMeasure
);


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


  const answer =
    document.getElementById(
      `answer-${i}`
    );


  const count =
    document.getElementById(
      `count-q${i}`
    );


  if (
    !input ||
    !answer
  ) {

    continue;

  }


  input.addEventListener(
    "keydown",
    (
      event
    ) => {

      if (
        event.key !==
        "Enter"
      ) {

        return;

      }


      const lines =
        input.value
          .split("\n")
          .length;


      if (
        lines >=
        MAX_LINES
      ) {

        event.preventDefault();

      }

    }
  );


  const updateAnswer =
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


      let lines =
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


      if (
        input.value !==
        value
      ) {

        input.value =
          value;

      }


      const text =
        input.value;


      answer.textContent =
        text;


      const baseSize =
        getAnswerBaseFontSize(
          text.length
        );


      const fittedSize =
        getFittedAnswerFontSize(
          text,
          baseSize
        );


      answer.style.setProperty(
        "--answer-font-size",
        `${fittedSize}px`
      );


      updateCounter(
        count,
        text.length,
        MAX_LENGTH,
        60
      );


      requestAnimationFrame(
        fitAllAnswerCards
      );

    };


  input.addEventListener(
    "input",
    updateAnswer
  );


  updateAnswer();

}


/* ==================================================
   ANSWER FONT
================================================== */

function getAnswerBaseFontSize(
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


function getFittedAnswerFontSize(
  text,
  baseSize
) {

  if (
    !text
  ) {

    return baseSize;

  }


  const MIN_FONT_SIZE =
    14;


  for (
    let size = baseSize;
    size >= MIN_FONT_SIZE;
    size--
  ) {

    answerMeasure.style.fontSize =
      `${size}px`;


    answerMeasure.textContent =
      text;


    const maxHeight =
      (
        size
        *
        1.38
        *
        2
      )
      +
      3;


    if (
      answerMeasure.scrollHeight <=
      maxHeight
    ) {

      return size;

    }

  }


  return MIN_FONT_SIZE;

}


/* ==================================================
   FIT CARDS
================================================== */

function fitAllAnswerCards() {

  document
    .querySelectorAll(
      ".answer-card"
    )
    .forEach(
      fitAnswerCard
    );

}


function fitAnswerCard(
  card
) {

  card.classList.remove(
    "compact-1",
    "compact-2"
  );


  if (
    cardContentFits(
      card
    )
  ) {

    return;

  }


  card.classList.add(
    "compact-1"
  );


  if (
    cardContentFits(
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


function cardContentFits(
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


  const lastBlock =
    blocks[
      blocks.length - 1
    ];


  return (
    lastBlock.offsetTop
    +
    lastBlock.offsetHeight
    <=
    1045
  );

}


/* ==================================================
   COUNTER
================================================== */

function updateCounter(
  countElement,
  length,
  max,
  warning
) {

  if (
    !countElement
  ) {

    return;

  }


  countElement.textContent =
    length;


  const counter =
    countElement.parentElement;


  counter.classList.remove(
    "is-warning",
    "is-limit"
  );


  if (
    length >= max
  ) {

    counter.classList.add(
      "is-limit"
    );

  }

  else if (
    length >= warning
  ) {

    counter.classList.add(
      "is-warning"
    );

  }

}


/* ==================================================
   Q20
================================================== */

const q20Title =
  document.getElementById(
    "q20-title"
  );


const q20TitleCount =
  document.getElementById(
    "count-q20-title"
  );


const question20Preview =
  document.getElementById(
    "question-20-preview"
  );


const answerQuestion20 =
  document.getElementById(
    "answer-question-20"
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
      );


  if (
    value.length >
    CUSTOM_QUESTION_MAX_LENGTH
  ) {

    value =
      value.slice(
        0,
        CUSTOM_QUESTION_MAX_LENGTH
      );

  }


  q20Title.value =
    value;


  const defaultText =
    QUESTIONS[
      currentLanguage
    ][19];


  const displayText =
    value.trim()
    ||
    defaultText;


  if (
    question20Preview
  ) {

    question20Preview.textContent =
      displayText;

  }


  if (
    answerQuestion20
  ) {

    answerQuestion20.textContent =
      `20. ${displayText}`;

  }


  updateCounter(
    q20TitleCount,
    value.length,
    CUSTOM_QUESTION_MAX_LENGTH,
    32
  );


  requestAnimationFrame(
    fitAllAnswerCards
  );

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
        () => {

          reject(
            reader.error
          );

        };


      reader.readAsDataURL(
        file
      );

    }
  );

}


/* ==================================================
   WAIT IMAGE
================================================== */

async function waitForImage(
  image
) {

  if (
    !image ||
    !image.getAttribute(
      "src"
    )
  ) {

    return;

  }


  if (
    typeof image.decode ===
    "function"
  ) {

    try {

      await image.decode();

      return;

    }

    catch (
      error
    ) {

    }

  }


  if (
    image.complete &&
    image.naturalWidth > 0
  ) {

    return;

  }


  await new Promise(
    (
      resolve
    ) => {

      const finish =
        () => {

          resolve();

        };


      image.addEventListener(
        "load",
        finish,
        {
          once:
            true
        }
      );


      image.addEventListener(
        "error",
        finish,
        {
          once:
            true
        }
      );

    }
  );

}


/* ==================================================
   WAIT BACKGROUND IMAGES
================================================== */

async function waitForAllBackgroundImages() {

  const images =
    Array.from(
      document.querySelectorAll(
        ".card-background-image[src]"
      )
    );


  await Promise.all(
    images.map(
      waitForImage
    )
  );


  await nextFrame();

  await nextFrame();

}


/* ==================================================
   NEXT FRAME
================================================== */

function nextFrame() {

  return new Promise(
    (
      resolve
    ) => {

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
   CARD SETTINGS
================================================== */

function setupCardSettings(
  options
) {

  const {

    cardId,

    backgroundImageId,

    backgroundUploadId,

    removeButtonId,

    bgXId,

    bgXValueId,

    bgYId,

    bgYValueId,

    bgScaleId,

    bgScaleValueId,

    overlaySelector,

    overlayOpacityId,

    overlayOpacityValueId,

    overlayRadioName,

    textRadioName

  } = options;


  const card =
    document.getElementById(
      cardId
    );


  const backgroundImage =
    document.getElementById(
      backgroundImageId
    );


  const backgroundUpload =
    document.getElementById(
      backgroundUploadId
    );


  const removeButton =
    document.getElementById(
      removeButtonId
    );


  const bgX =
    document.getElementById(
      bgXId
    );


  const bgXValue =
    document.getElementById(
      bgXValueId
    );


  const bgY =
    document.getElementById(
      bgYId
    );


  const bgYValue =
    document.getElementById(
      bgYValueId
    );


  const bgScale =
    document.getElementById(
      bgScaleId
    );


  const bgScaleValue =
    document.getElementById(
      bgScaleValueId
    );


  const overlay =
    document.querySelector(
      overlaySelector
    );


  const overlayOpacity =
    document.getElementById(
      overlayOpacityId
    );


  const overlayOpacityValue =
    document.getElementById(
      overlayOpacityValueId
    );


  /* safety */

  if (
    !card ||
    !backgroundImage ||
    !backgroundUpload ||
    !removeButton ||
    !bgX ||
    !bgXValue ||
    !bgY ||
    !bgYValue ||
    !bgScale ||
    !bgScaleValue ||
    !overlay ||
    !overlayOpacity ||
    !overlayOpacityValue
  ) {

    console.error(
      "Card settings initialization failed:",
      options
    );


    return;

  }


  let overlayColor =
    "black";


  /* upload */

  backgroundUpload.addEventListener(
    "change",
    async (
      event
    ) => {

      const file =
        event.target.files[0];


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


        backgroundImage.src =
          dataUrl;


        await waitForImage(
          backgroundImage
        );


        updateBackgroundImage();

      }

      catch (
        error
      ) {

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


  /* background */

  function updateBackgroundImage() {

    const x =
      Number(
        bgX.value
      );


    const y =
      Number(
        bgY.value
      );


    const scale =
      Number(
        bgScale.value
      );


    backgroundImage.style.objectPosition =
      `${x}% ${y}%`;


    backgroundImage.style.transform =
      `scale(${scale / 100})`;


    backgroundImage.style.transformOrigin =
      `${x}% ${y}%`;


    bgXValue.textContent =
      `${x}%`;


    bgYValue.textContent =
      `${y}%`;


    bgScaleValue.textContent =
      `${scale}%`;

  }


  bgX.addEventListener(
    "input",
    updateBackgroundImage
  );


  bgY.addEventListener(
    "input",
    updateBackgroundImage
  );


  bgScale.addEventListener(
    "input",
    updateBackgroundImage
  );


  /* remove */

  removeButton.addEventListener(
    "click",
    () => {

      backgroundUpload.value =
        "";


      backgroundImage.removeAttribute(
        "src"
      );


      bgX.value =
        50;


      bgY.value =
        50;


      bgScale.value =
        100;


      backgroundImage.style.objectPosition =
        "50% 50%";


      backgroundImage.style.transform =
        "scale(1)";


      backgroundImage.style.transformOrigin =
        "50% 50%";


      updateBackgroundImage();

    }
  );


  /* overlay */

  function updateOverlay() {

    const opacity =
      Number(
        overlayOpacity.value
      );


    const rgb =
      overlayColor ===
      "white"

      ? "255,255,255"

      : "0,0,0";


    overlay.style.backgroundColor =
      `rgba(${rgb},${opacity})`;


    overlayOpacityValue.textContent =
      `${Math.round(
        opacity * 100
      )}%`;

  }


  overlayOpacity.addEventListener(
    "input",
    updateOverlay
  );


  document
    .querySelectorAll(
      `input[name="${overlayRadioName}"]`
    )
    .forEach(
      (
        radio
      ) => {

        radio.addEventListener(
          "change",
          () => {

            if (
              !radio.checked
            ) {

              return;

            }


            overlayColor =
              radio.value;


            updateOverlay();

          }
        );

      }
    );


  /* text */

  document
    .querySelectorAll(
      `input[name="${textRadioName}"]`
    )
    .forEach(
      (
        radio
      ) => {

        radio.addEventListener(
          "change",
          () => {

            if (
              !radio.checked
            ) {

              return;

            }


            card.classList.remove(
              "text-white",
              "text-black"
            );


            card.classList.add(
              radio.value ===
              "black"

              ? "text-black"

              : "text-white"
            );

          }
        );

      }
    );


  updateBackgroundImage();

  updateOverlay();

}


/* ==================================================
   CARD SETUPS
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
      (
        frame
      ) => {

        const card =
          frame.querySelector(
            ".profile-card"
          );


        if (
          !card
        ) {

          return;

        }


        const previewPadding =
          4;


        const availableWidth =
          Math.max(
            0,
            frame.clientWidth
            -
            previewPadding * 2
          );


        const scale =
          availableWidth /
          1200;


        card.style.setProperty(
          "--preview-scale",
          scale
        );


        card.style.left =
          `${previewPadding}px`;


        card.style.top =
          `${previewPadding}px`;

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


  if (
    parts.length < 2
  ) {

    throw new Error(
      "Invalid data URL"
    );

  }


  const mimeMatch =
    parts[0].match(
      /:(.*?);/
    );


  const mime =
    mimeMatch
      ? mimeMatch[1]
      : "image/png";


  const binary =
    atob(
      parts[1]
    );


  const array =
    new Uint8Array(
      binary.length
    );


  for (
    let i = 0;
    i < binary.length;
    i++
  ) {

    array[i] =
      binary.charCodeAt(
        i
      );

  }


  return new Blob(
    [
      array
    ],
    {
      type:
        mime
    }
  );

}


/* ==================================================
   GENERATE ONE CARD
================================================== */

async function generateCardImage(
  card,
  index
) {

  const options =
  {

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

      ? "#f4f1e9"

      : "#101722",

    style:
    {

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


  /* ==================================================
     IOS / IPADOS

     toBlobよりtoPngを優先
  ================================================== */

  if (
    isIOS
  ) {

    const dataUrl =
      await htmlToImage.toPng(
        card,
        options
      );


    if (
      !dataUrl
    ) {

      throw new Error(
        `card-${index} toPng failed`
      );

    }


    return dataURLToBlob(
      dataUrl
    );

  }


  /* ==================================================
     DESKTOP
  ================================================== */

  const blob =
    await htmlToImage.toBlob(
      card,
      options
    );


  if (
    !blob
  ) {

    throw new Error(
      `card-${index} toBlob failed`
    );

  }


  return blob;

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


      let generatingCardNumber =
        0;


      generateButton.disabled =
        true;


      generateButton.textContent =
        t.preparing;


      clearGeneratedResults();


      try {

        /* html-to-image確認 */

        if (
          typeof htmlToImage ===
          "undefined"
        ) {

          throw new Error(
            "html-to-image not loaded"
          );

        }


        if (
          document.fonts
        ) {

          await document.fonts.ready;

        }


        await waitForAllBackgroundImages();


        fitAllAnswerCards();


        await sleep(
          isIOS
            ? 700
            : 300
        );


        await nextFrame();


        const generated =
          [];


        for (
          let i = 1;
          i <= 4;
          i++
        ) {

          generatingCardNumber =
            i;


          generateButton.textContent =
            t.generating(
              i
            );


          const card =
            document.getElementById(
              `card-${i}`
            );


          if (
            !card
          ) {

            throw new Error(
              `card-${i} not found`
            );

          }


          /*
            iPhoneでは描画更新をしっかり待つ
          */

          await nextFrame();


          if (
            isIOS
          ) {

            await sleep(
              250
            );

          }


          const blob =
            await generateCardImage(
              card,
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
            WebKitで連続変換を急がない
          */

          await sleep(
            isIOS
              ? 1000
              : 450
          );

        }


        /* ==================================================
           IOS
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
           DESKTOP
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
              400
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
          generatingCardNumber > 0
        ) {

          alert(
            t.cardGenerationError(
              generatingCardNumber
            )
          );

        }

        else {

          alert(
            t.errorAlert
          );

        }

      }

      finally {

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
   IOS RESULT
================================================== */

function showIOSExportResults(
  generated
) {

  const t =
    translations[
      currentLanguage
    ];


  if (
    !mobileExportResults
  ) {

    return;

  }


  mobileExportResults.hidden =
    false;


  generated.forEach(
    (
      item
    ) => {

      const objectUrl =
        URL.createObjectURL(
          item.blob
        );


      generatedObjectUrls.push(
        objectUrl
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
        objectUrl;


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
        objectUrl;


      openLink.target =
        "_blank";


      openLink.rel =
        "noopener";


      openLink.textContent =
        t.openImage;


      actions.appendChild(
        openLink
      );


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

            catch (
              error
            ) {

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
   CLEAR RESULTS
================================================== */

function clearGeneratedResults() {

  generatedObjectUrls.forEach(
    (
      url
    ) => {

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
  ms
) {

  return new Promise(
    (
      resolve
    ) => {

      setTimeout(
        resolve,
        ms
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


    await waitForAllBackgroundImages();

  }
);