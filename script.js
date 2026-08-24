/* ==================================================
   基本設定
================================================== */

const MAX_LENGTH = 80;

const MAX_LINES = 2;


/* ==================================================
   回答入力
================================================== */

for (let i = 1; i <= 20; i++) {

  const input =
    document.getElementById(`q${i}`);

  const answer =
    document.getElementById(`answer-${i}`);

  const count =
    document.getElementById(`count-q${i}`);


  if (!input || !answer) {
    continue;
  }


  /* ==================================================
     ENTERキー制限
  ================================================== */

  input.addEventListener(
    "keydown",
    (event) => {

      if (event.key !== "Enter") {
        return;
      }


      const currentLines =
        input.value.split("\n").length;


      if (currentLines >= MAX_LINES) {

        event.preventDefault();

      }

    }
  );


  /* ==================================================
     入力更新
  ================================================== */

  const updateAnswer = () => {

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


    /* 最大2行 */

    let lines =
      value.split("\n");


    if (lines.length > MAX_LINES) {

      lines =
        lines.slice(
          0,
          MAX_LINES
        );


      value =
        lines.join("\n");

    }


    /* 最大80文字 */

    if (value.length > MAX_LENGTH) {

      value =
        value.slice(
          0,
          MAX_LENGTH
        );

    }


    if (input.value !== value) {

      input.value =
        value;

    }


    const text =
      input.value;


    const length =
      text.length;


    answer.textContent =
      text;


    answer.style.fontSize =
      getAnswerFontSize(
        length
      );


    if (count) {

      count.textContent =
        length;


      const counter =
        count.parentElement;


      counter.classList.remove(
        "is-warning",
        "is-limit"
      );


      if (length >= MAX_LENGTH) {

        counter.classList.add(
          "is-limit"
        );

      }

      else if (length >= 60) {

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
   フォントサイズ
================================================== */

function getAnswerFontSize(length) {

  if (length <= 25) {
    return "24px";
  }

  if (length <= 45) {
    return "22px";
  }

  if (length <= 60) {
    return "20px";
  }

  return "18px";
}


/* ==================================================
   IMAGE → DATA URL
================================================== */

function readImageAsDataURL(file) {

  return new Promise(
    (resolve, reject) => {

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
   質問カード設定
================================================== */

const questionCard =
  document.getElementById(
    "card-1"
  );


const questionBackgroundUpload =
  document.getElementById(
    "question-background-upload"
  );


const questionBackground =
  document.querySelector(
    ".question-background"
  );


const questionOverlay =
  document.querySelector(
    ".question-overlay"
  );


const questionOpacityControl =
  document.getElementById(
    "question-overlay-opacity"
  );


const questionOpacityValue =
  document.getElementById(
    "question-opacity-value"
  );


let questionBackgroundData =
  null;


let questionOverlayColor =
  "black";


/* ==================================================
   質問背景画像
================================================== */

questionBackgroundUpload.addEventListener(
  "change",
  async (event) => {

    const file =
      event.target.files[0];


    if (!file) {
      return;
    }


    try {

      questionBackgroundData =
        await readImageAsDataURL(
          file
        );


      questionBackground.style.backgroundImage =
        `url("${questionBackgroundData}")`;

    }

    catch (error) {

      console.error(error);


      alert(
        "質問用背景画像の読み込みに失敗しました。"
      );

    }

  }
);


/* ==================================================
   質問背景解除
================================================== */

document
  .getElementById(
    "remove-question-background"
  )
  .addEventListener(
    "click",
    () => {

      questionBackgroundData =
        null;


      questionBackgroundUpload.value =
        "";


      questionBackground.style.backgroundImage =
        "";

    }
  );


/* ==================================================
   質問カバー更新
================================================== */

function updateQuestionOverlay() {

  const opacity =
    Number(
      questionOpacityControl.value
    );


  const rgb =
    questionOverlayColor === "white"
      ? "255, 255, 255"
      : "0, 0, 0";


  questionOverlay.style.backgroundColor =
    `rgba(${rgb}, ${opacity})`;


  questionOpacityValue.textContent =
    `${Math.round(
      opacity * 100
    )}%`;

}


/* カバー濃度 */

questionOpacityControl.addEventListener(
  "input",
  updateQuestionOverlay
);


/* カバー色 */

document
  .querySelectorAll(
    'input[name="question-overlay-color"]'
  )
  .forEach(
    (radio) => {

      radio.addEventListener(
        "change",
        () => {

          if (!radio.checked) {
            return;
          }


          questionOverlayColor =
            radio.value;


          updateQuestionOverlay();

        }
      );

    }
  );


/* 文字色 */

document
  .querySelectorAll(
    'input[name="question-text-color"]'
  )
  .forEach(
    (radio) => {

      radio.addEventListener(
        "change",
        () => {

          if (!radio.checked) {
            return;
          }


          questionCard.classList.remove(
            "text-white",
            "text-black"
          );


          questionCard.classList.add(
            radio.value === "black"
              ? "text-black"
              : "text-white"
          );

        }
      );

    }
  );


updateQuestionOverlay();


/* ==================================================
   回答カード共通設定
================================================== */

function setupAnswerCard(options) {

  const {
    cardId,
    backgroundUploadId,
    backgroundSelector,
    removeButtonId,
    overlaySelector,
    opacityControlId,
    opacityValueId,
    overlayRadioName,
    textRadioName
  } = options;


  const card =
    document.getElementById(
      cardId
    );


  const upload =
    document.getElementById(
      backgroundUploadId
    );


  const background =
    document.querySelector(
      backgroundSelector
    );


  const removeButton =
    document.getElementById(
      removeButtonId
    );


  const overlay =
    document.querySelector(
      overlaySelector
    );


  const opacityControl =
    document.getElementById(
      opacityControlId
    );


  const opacityValue =
    document.getElementById(
      opacityValueId
    );


  let backgroundData =
    null;


  let overlayColor =
    "black";


  /* ==================================================
     背景画像
  ================================================== */

  upload.addEventListener(
    "change",
    async (event) => {

      const file =
        event.target.files[0];


      if (!file) {
        return;
      }


      try {

        backgroundData =
          await readImageAsDataURL(
            file
          );


        background.style.backgroundImage =
          `url("${backgroundData}")`;

      }

      catch (error) {

        console.error(error);


        alert(
          "背景画像の読み込みに失敗しました。"
        );

      }

    }
  );


  /* ==================================================
     背景解除
  ================================================== */

  removeButton.addEventListener(
    "click",
    () => {

      backgroundData =
        null;


      upload.value =
        "";


      background.style.backgroundImage =
        "";

    }
  );


  /* ==================================================
     カバー更新
  ================================================== */

  function updateOverlay() {

    const opacity =
      Number(
        opacityControl.value
      );


    const rgb =
      overlayColor === "white"
        ? "255, 255, 255"
        : "0, 0, 0";


    overlay.style.backgroundColor =
      `rgba(${rgb}, ${opacity})`;


    opacityValue.textContent =
      `${Math.round(
        opacity * 100
      )}%`;

  }


  /* カバー濃度 */

  opacityControl.addEventListener(
    "input",
    updateOverlay
  );


  /* カバー色 */

  document
    .querySelectorAll(
      `input[name="${overlayRadioName}"]`
    )
    .forEach(
      (radio) => {

        radio.addEventListener(
          "change",
          () => {

            if (!radio.checked) {
              return;
            }


            overlayColor =
              radio.value;


            updateOverlay();

          }
        );

      }
    );


  /* 文字色 */

  document
    .querySelectorAll(
      `input[name="${textRadioName}"]`
    )
    .forEach(
      (radio) => {

        radio.addEventListener(
          "change",
          () => {

            if (!radio.checked) {
              return;
            }


            card.classList.remove(
              "text-white",
              "text-black"
            );


            card.classList.add(
              radio.value === "black"
                ? "text-black"
                : "text-white"
            );

          }
        );

      }
    );


  updateOverlay();

}


/* ==================================================
   回答カード1
================================================== */

setupAnswerCard({

  cardId:
    "card-2",

  backgroundUploadId:
    "answer1-background-upload",

  backgroundSelector:
    ".answer1-background",

  removeButtonId:
    "remove-answer1-background",

  overlaySelector:
    ".answer1-overlay",

  opacityControlId:
    "answer1-overlay-opacity",

  opacityValueId:
    "answer1-opacity-value",

  overlayRadioName:
    "answer1-overlay-color",

  textRadioName:
    "answer1-text-color"

});


/* ==================================================
   回答カード2
================================================== */

setupAnswerCard({

  cardId:
    "card-3",

  backgroundUploadId:
    "answer2-background-upload",

  backgroundSelector:
    ".answer2-background",

  removeButtonId:
    "remove-answer2-background",

  overlaySelector:
    ".answer2-overlay",

  opacityControlId:
    "answer2-overlay-opacity",

  opacityValueId:
    "answer2-opacity-value",

  overlayRadioName:
    "answer2-overlay-color",

  textRadioName:
    "answer2-text-color"

});


/* ==================================================
   回答カード3
================================================== */

setupAnswerCard({

  cardId:
    "card-4",

  backgroundUploadId:
    "answer3-background-upload",

  backgroundSelector:
    ".answer3-background",

  removeButtonId:
    "remove-answer3-background",

  overlaySelector:
    ".answer3-overlay",

  opacityControlId:
    "answer3-overlay-opacity",

  opacityValueId:
    "answer3-opacity-value",

  overlayRadioName:
    "answer3-overlay-color",

  textRadioName:
    "answer3-text-color"

});


/* ==================================================
   PNG EXPORT
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

      if (document.fonts) {

        await document.fonts.ready;

      }


      await sleep(300);


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


        await sleep(100);


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

              style: {

                width:
                  "1200px",

                height:
                  "1200px",

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

    catch (error) {

      console.error(
        error
      );


      document
        .querySelectorAll(
          ".profile-card"
        )
        .forEach(
          (card) => {

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
   WAIT
================================================== */

function sleep(ms) {

  return new Promise(
    (resolve) => {

      setTimeout(
        resolve,
        ms
      );

    }
  );

}