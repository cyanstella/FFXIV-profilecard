/* ==================================================
   基本設定
================================================== */

const MAX_LENGTH = 80;
const MAX_LINES = 2;


/* ==================================================
   回答文字測定用
================================================== */

/*
  書き出しカードでは

  1200px
  - 左右padding 90px × 2
  = 回答欄 約1020px

  この幅で実際に文字を測定して、
  2行を超える場合はフォントを縮小する。
*/

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

    pointerEvents:
      "none",

    width:
      "1020px",

    margin:
      "0",

    padding:
      "0",

    border:
      "0",

    fontFamily:
      '"Hiragino Mincho ProN", "Yu Mincho", serif',

    fontWeight:
      "400",

    lineHeight:
      "1.42",

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
   回答入力
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


  /* ==================================================
     ENTER制限
  ================================================== */

  input.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key !== "Enter"
      ) {

        return;

      }


      const currentLines =
        input.value
          .split("\n")
          .length;


      if (
        currentLines >=
        MAX_LINES
      ) {

        event.preventDefault();

      }

    }
  );


  /* ==================================================
     更新
  ================================================== */

  const updateAnswer =
    () => {

      let value =
        input.value;


      /* 改行コード統一 */

      value =
        value.replace(
          /\r\n/g,
          "\n"
        );


      value =
        value.replace(
          /\r/g,
          "\n"
        );


      /* 明示改行は最大2行 */

      let lines =
        value.split("\n");


      if (
        lines.length >
        MAX_LINES
      ) {

        lines =
          lines.slice(
            0,
            MAX_LINES
          );


        value =
          lines.join("\n");

      }


      /* 最大80文字 */

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
        文字数による基準サイズを取得後、
        さらに実際の横幅で2行に収まるか測定。
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


      /* 文字数 */

      if (count) {

        count.textContent =
          length;


        const counter =
          count.parentElement;


        counter.classList.remove(
          "is-warning",
          "is-limit"
        );


        if (
          length >=
          MAX_LENGTH
        ) {

          counter.classList.add(
            "is-limit"
          );

        }

        else if (
          length >= 60
        ) {

          counter.classList.add(
            "is-warning"
          );

        }

      }

    };


  input.addEventListener(
    "input",
    updateAnswer
  );


  updateAnswer();

}


/* ==================================================
   基準フォントサイズ
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
   2行に収まるサイズを自動計算
================================================== */

function getFittedAnswerFontSize(
  text,
  baseSize
) {

  if (!text) {

    return baseSize;

  }


  /*
    最小14pxまで1pxずつ縮小
  */

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


    /*
      line-height 1.42

      2行分 + 丸め誤差を少し許容
    */

    const twoLineHeight =
      size *
      1.42 *
      2 +
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
   FILE → DATA URL
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
   カード設定共通
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


  /* ==================================================
     背景アップロード
  ================================================== */

  backgroundUpload.addEventListener(
    "change",
    async (
      event
    ) => {

      const file =
        event.target.files[0];


      if (!file) {

        return;

      }


      try {

        const dataUrl =
          await readImageAsDataURL(
            file
          );


        background.style.backgroundImage =
          `url("${dataUrl}")`;


        updateBackgroundTransform();

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


  /* ==================================================
     位置・拡大
  ================================================== */

  function updateBackgroundTransform() {

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


    const scale =
      scalePercent /
      100;


    background.style.backgroundPosition =
      `${x}% ${y}%`;


    background.style.transform =
      `scale(${scale})`;


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
    updateBackgroundTransform
  );


  bgY.addEventListener(
    "input",
    updateBackgroundTransform
  );


  bgScale.addEventListener(
    "input",
    updateBackgroundTransform
  );


  /* ==================================================
     背景解除
  ================================================== */

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


      updateBackgroundTransform();

    }
  );


  /* ==================================================
     OVERLAY
  ================================================== */

  function updateOverlay() {

    const opacity =
      Number(
        overlayOpacity.value
      );


    const rgb =
      overlayColor ===
      "white"
        ? "255, 255, 255"
        : "0, 0, 0";


    overlay.style.backgroundColor =
      `rgba(${rgb}, ${opacity})`;


    overlayOpacityValue.textContent =
      `${Math.round(
        opacity *
        100
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


  /* ==================================================
     文字色
  ================================================== */

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


  updateBackgroundTransform();

  updateOverlay();

}


/* ==================================================
   質問カード
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


/* ==================================================
   回答カード1
================================================== */

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


/* ==================================================
   回答カード2
================================================== */

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


/* ==================================================
   回答カード3
================================================== */

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
   EXPORT
================================================== */

const generateButton =
  document.getElementById(
    "generate-button"
  );


generateButton.addEventListener(
  "click",
  async () => {

    generateButton.disabled =
      true;


    generateButton.textContent =
      "画像を生成しています…";


    try {

      if (
        document.fonts
      ) {

        await document.fonts.ready;

      }


      await sleep(
        250
      );


      for (
        let i = 1;
        i <= 4;
        i++
      ) {

        const card =
          document.getElementById(
            `card-${i}`
          );


        card.classList.add(
          "exporting"
        );


        /*
          ブラウザに1200pxレイアウトを
          確実に反映させる
        */

        await nextFrame();

        await nextFrame();


        const dataUrl =
          await htmlToImage.toPng(
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

                width:
                  "1200px",

                height:
                  "1200px",

                maxWidth:
                  "none",

                margin:
                  "0"

              }

            }
          );


        card.classList.remove(
          "exporting"
        );


        downloadImage(
          dataUrl,
          `ffxiv-profile-${i}.png`
        );


        await sleep(
          400
        );

      }

    }

    catch (
      error
    ) {

      console.error(
        error
      );


      document
        .querySelectorAll(
          ".profile-card"
        )
        .forEach(
          (
            card
          ) => {

            card.classList.remove(
              "exporting"
            );

          }
        );


      alert(
        "画像の生成に失敗しました。"
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
   DOWNLOAD
================================================== */

function downloadImage(
  dataUrl,
  filename
) {

  const link =
    document.createElement(
      "a"
    );


  link.download =
    filename;


  link.href =
    dataUrl;


  document.body.appendChild(
    link
  );


  link.click();


  link.remove();

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

          resolve();

        }
      );

    }
  );

}


/* ==================================================
   WAIT
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