/* ==================================================
   VERSION

   今後の改訂ではここだけ変更すれば、
   サイト下部と4枚の画像に自動反映される。
================================================== */

const APP_VERSION = "Ver.1.00";


/* ==================================================
   CONSTANTS
================================================== */

const MAX_LENGTH = 80;
const MAX_LINES = 2;

const CUSTOM_QUESTION_MAX_LENGTH = 40;


/* ==================================================
   VERSION DISPLAY
================================================== */

document
  .querySelectorAll(".version-text")
  .forEach((element) => {

    element.textContent =
      APP_VERSION;

  });


/* ==================================================
   DEVICE DETECTION
================================================== */

function isIOSDevice() {

  return (
    /iPad|iPhone|iPod/.test(
      navigator.userAgent
    ) ||

    (
      navigator.platform ===
      "MacIntel" &&

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
   ANSWER MEASURE ELEMENT
================================================== */

const answerMeasure =
  document.createElement("div");


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
   ANSWER INPUT
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


  /* Enterは最大2行 */

  input.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key !== "Enter"
      ) {

        return;

      }


      if (
        input.value
          .split("\n")
          .length >=
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
          .replace(/\r\n/g, "\n")
          .replace(/\r/g, "\n");


      /*
        明示的な改行は
        2行まで
      */

      let lines =
        value.split("\n");


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
            .join("\n");

      }


      /*
        最大80文字
      */

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


      const length =
        text.length;


      answer.textContent =
        text;


      /*
        回答単体が
        2行以内になるフォントを計算
      */

      const baseSize =
        getAnswerBaseFontSize(
          length
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
        length,
        MAX_LENGTH,
        60
      );


      /*
        回答更新後、
        カード全体も収まるか確認
      */

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
   FONT SIZE
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


/* ==================================================
   回答単体を2行に収める
================================================== */

function getFittedAnswerFontSize(
  text,
  baseSize
) {

  if (!text) {
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


    const twoLineHeight =
      (
        size *
        1.38 *
        2
      ) +
      3;


    if (
      answerMeasure.scrollHeight <=
      twoLineHeight
    ) {

      return size;

    }

  }


  return MIN_FONT_SIZE;

}


/* ==================================================
   CARD TOTAL HEIGHT FIT

   Q7 / Q14 が下にはみ出す問題対策。
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
    cardContentFits(card)
  ) {

    return;

  }


  card.classList.add(
    "compact-1"
  );


  if (
    cardContentFits(card)
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


  /*
    1200pxカード内で、
    1055pxより下へ来ると
    フッターと重なる可能性がある。
  */

  const bottom =
    lastBlock.offsetTop +
    lastBlock.offsetHeight;


  return (
    bottom <= 1055
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
   Q20 CUSTOM QUESTION
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


  const displayText =
    value.trim() ||
    "自由質問";


  question20Preview.textContent =
    displayText;


  answerQuestion20.textContent =
    `20. ${displayText}`;


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


  updateQ20Title();

}


/* ==================================================
   IMAGE FILE → DATA URL
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
   CARD SETTINGS
================================================== */

function setupCardSettings(
  options
) {

  const {
    cardId,

    backgroundSelector,

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


  const background =
    document.querySelector(
      backgroundSelector
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


  let overlayColor =
    "black";


  /* 背景画像 */

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


        background.style.backgroundImage =
          `url("${dataUrl}")`;


        updateBackground();

      }

      catch (
        error
      ) {

        console.error(
          error
        );


        alert(
          "背景画像の読み込みに失敗しました。"
        );

      }

    }
  );


  function updateBackground() {

    const x =
      Number(
        bgX.value
      );


    const y =
      Number(
        bgY.value
      );


    const scalePercent =
      Number(
        bgScale.value
      );


    background.style.backgroundPosition =
      `${x}% ${y}%`;


    background.style.transform =
      `scale(${scalePercent / 100})`;


    background.style.transformOrigin =
      `${x}% ${y}%`;


    bgXValue.textContent =
      `${x}%`;


    bgYValue.textContent =
      `${y}%`;


    bgScaleValue.textContent =
      `${scalePercent}%`;

  }


  bgX.addEventListener(
    "input",
    updateBackground
  );


  bgY.addEventListener(
    "input",
    updateBackground
  );


  bgScale.addEventListener(
    "input",
    updateBackground
  );


  removeButton.addEventListener(
    "click",
    () => {

      backgroundUpload.value =
        "";


      background.style.backgroundImage =
        "";


      bgX.value =
        50;


      bgY.value =
        50;


      bgScale.value =
        100;


      updateBackground();

    }
  );


  /* Overlay */

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
      (radio) => {

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


  /* Text color */

  document
    .querySelectorAll(
      `input[name="${textRadioName}"]`
    )
    .forEach(
      (radio) => {

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


  updateBackground();

  updateOverlay();

}


/* ==================================================
   CARD SETTINGS INSTANCES
================================================== */

setupCardSettings({

  cardId:
    "card-1",

  backgroundSelector:
    ".question-background",

  backgroundUploadId:
    "question-background-upload",

  removeButtonId:
    "remove-question-background",

  bgXId:
    "question-bg-x",

  bgXValueId:
    "question-bg-x-value",

  bgYId:
    "question-bg-y",

  bgYValueId:
    "question-bg-y-value",

  bgScaleId:
    "question-bg-scale",

  bgScaleValueId:
    "question-bg-scale-value",

  overlaySelector:
    ".question-overlay",

  overlayOpacityId:
    "question-overlay-opacity",

  overlayOpacityValueId:
    "question-opacity-value",

  overlayRadioName:
    "question-overlay-color",

  textRadioName:
    "question-text-color"

});


setupCardSettings({

  cardId:
    "card-2",

  backgroundSelector:
    ".answer1-background",

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

  backgroundSelector:
    ".answer2-background",

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

  backgroundSelector:
    ".answer3-background",

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

   1200pxのカードを、
   frameの横幅に合わせて縮小する。

   中のフォントサイズや配置は
   一切変更しない。
================================================== */

function updatePreviewScales() {

  document
    .querySelectorAll(
      ".card-frame"
    )
    .forEach(
      (frame) => {

        const card =
          frame.querySelector(
            ".profile-card"
          );


        if (
          !card
        ) {

          return;

        }


        const width =
          frame.clientWidth;


        const scale =
          width /
          1200;


        card.style.setProperty(
          "--preview-scale",
          scale
        );

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


updatePreviewScales();


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


generateButton.addEventListener(
  "click",
  async () => {

    generateButton.disabled =
      true;


    generateButton.textContent =
      "画像を生成しています…";


    clearGeneratedResults();


    try {

      if (
        document.fonts
      ) {

        await document.fonts.ready;

      }


      fitAllAnswerCards();


      await sleep(
        200
      );


      const generated =
        [];


      for (
        let i = 1;
        i <= 4;
        i++
      ) {

        generateButton.textContent =
          `${i} / 4 枚目を生成しています…`;


        const card =
          document.getElementById(
            `card-${i}`
          );


        /*
          プレビューではtransformで縮小しているため、
          html-to-image側だけtransform:noneにして
          1200pxそのまま取得する。
        */

        const blob =
          await htmlToImage.toBlob(
            card,
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
                true,

              backgroundColor:
                "#101722",

              style: {
                transform:
                  "none",

                transformOrigin:
                  "top left",

                width:
                  "1200px",

                height:
                  "1200px"
              }
            }
          );


        if (
          !blob
        ) {

          throw new Error(
            `card-${i} の画像生成に失敗しました`
          );

        }


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
          iPhoneのメモリ負荷対策
        */

        await sleep(
          300
        );

      }


      /*
        iPhone / iPad

        自動ダウンロードではなく、
        ページ内に画像を表示。
      */

      if (
        isIOS
      ) {

        showIOSExportResults(
          generated
        );


        alert(
          "4枚の画像を生成しました。\n下に表示された画像を長押しして保存できます。"
        );

      }

      else {

        /*
          PC / Android等
        */

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
        error
      );


      alert(
        "画像の生成に失敗しました。\nページを再読み込みしてもう一度お試しください。"
      );

    }

    finally {

      generateButton.disabled =
        false;


      generateButton.textContent =
        "4枚の画像を書き出す";

    }

  }
);


/* ==================================================
   iOS RESULT VIEW
================================================== */

function showIOSExportResults(
  generated
) {

  if (
    !mobileExportResults
  ) {

    return;

  }


  mobileExportResults.hidden =
    false;


  generated.forEach(
    (item) => {

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
        `カード ${item.index}`;


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


      /*
        新しい画面で画像を開く
      */

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
        "画像を開く";


      actions.appendChild(
        openLink
      );


      /*
        Web Share API対応端末なら
        共有ボタンを追加
      */

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
          "共有 / 保存";


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

              /*
                ユーザーが共有を閉じただけなら
                エラー表示しない
              */

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


  /*
    生成結果の位置へ移動
  */

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
   CLEAR OLD GENERATED IMAGES
================================================== */

function clearGeneratedResults() {

  generatedObjectUrls.forEach(
    (url) => {

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
   DESKTOP DOWNLOAD
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
   INITIAL LAYOUT
================================================== */

window.addEventListener(
  "load",
  () => {

    updatePreviewScales();

    fitAllAnswerCards();

  }
);