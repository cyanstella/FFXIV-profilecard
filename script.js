/* ==================================================
   基本設定
================================================== */

const MAX_LENGTH = 80;

/*
  最大2行
  = 改行は1回まで
*/
const MAX_LINES = 2;


/* ==================================================
   回答・文字数・行数・フォントサイズ
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

     すでに2行ある場合、
     3行目を作るEnterを無効化
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
     入力内容更新
  ================================================== */

  const updateAnswer = () => {

    let value =
      input.value;


    /*
      Windows形式の改行を統一
    */

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


    /*
      3行以上になっていた場合は
      2行までに制限

      コピペした場合にも有効
    */

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


    /*
      最大80文字
    */

    if (value.length > MAX_LENGTH) {

      value =
        value.slice(
          0,
          MAX_LENGTH
        );

    }


    /*
      textareaへ修正内容を戻す
    */

    if (input.value !== value) {

      input.value =
        value;

    }


    const text =
      input.value;


    const length =
      text.length;


    /*
      プレビューへ反映
    */

    answer.textContent =
      text;


    /*
      文字数によって
      フォントサイズを変更
    */

    answer.style.fontSize =
      getAnswerFontSize(
        length
      );


    /*
      文字数カウンター
    */

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
   質問背景
================================================== */

const questionBackgroundUpload =
  document.getElementById(
    "question-background-upload"
  );


const questionBackgrounds =
  document.querySelectorAll(
    ".question-background"
  );


let questionBackgroundData =
  null;


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


      questionBackgrounds.forEach(
        (background) => {

          background.style.backgroundImage =
            `url("${questionBackgroundData}")`;

        }
      );

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
   回答背景
================================================== */

const answerBackgroundUpload =
  document.getElementById(
    "answer-background-upload"
  );


const answerBackgrounds =
  document.querySelectorAll(
    ".answer-background"
  );


let answerBackgroundData =
  null;


answerBackgroundUpload.addEventListener(
  "change",
  async (event) => {

    const file =
      event.target.files[0];


    if (!file) {
      return;
    }


    try {

      answerBackgroundData =
        await readImageAsDataURL(
          file
        );


      answerBackgrounds.forEach(
        (background) => {

          background.style.backgroundImage =
            `url("${answerBackgroundData}")`;

        }
      );

    }

    catch (error) {

      console.error(error);


      alert(
        "回答用背景画像の読み込みに失敗しました。"
      );

    }

  }
);


/* ==================================================
   背景解除
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


      questionBackgrounds.forEach(
        (background) => {

          background.style.backgroundImage =
            "";

        }
      );

    }
  );


document
  .getElementById(
    "remove-answer-background"
  )
  .addEventListener(
    "click",
    () => {

      answerBackgroundData =
        null;


      answerBackgroundUpload.value =
        "";


      answerBackgrounds.forEach(
        (background) => {

          background.style.backgroundImage =
            "";

        }
      );

    }
  );


/* ==================================================
   OVERLAY
================================================== */

const questionOpacityControl =
  document.getElementById(
    "question-overlay-opacity"
  );


const questionOpacityValue =
  document.getElementById(
    "question-opacity-value"
  );


const questionOverlays =
  document.querySelectorAll(
    ".question-overlay"
  );


const answerOpacityControl =
  document.getElementById(
    "answer-overlay-opacity"
  );


const answerOpacityValue =
  document.getElementById(
    "answer-opacity-value"
  );


const answerOverlays =
  document.querySelectorAll(
    ".answer-overlay"
  );


let questionOverlayColor =
  "black";


let answerOverlayColor =
  "black";


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


  questionOverlays.forEach(
    (overlay) => {

      overlay.style.backgroundColor =
        `rgba(${rgb}, ${opacity})`;

    }
  );


  questionOpacityValue.textContent =
    `${Math.round(
      opacity * 100
    )}%`;

}


/* ==================================================
   回答カバー更新
================================================== */

function updateAnswerOverlay() {

  const opacity =
    Number(
      answerOpacityControl.value
    );


  const rgb =
    answerOverlayColor === "white"
      ? "255, 255, 255"
      : "0, 0, 0";


  answerOverlays.forEach(
    (overlay) => {

      overlay.style.backgroundColor =
        `rgba(${rgb}, ${opacity})`;

    }
  );


  answerOpacityValue.textContent =
    `${Math.round(
      opacity * 100
    )}%`;

}


/* ==================================================
   カバー濃度
================================================== */

questionOpacityControl.addEventListener(
  "input",
  updateQuestionOverlay
);


answerOpacityControl.addEventListener(
  "input",
  updateAnswerOverlay
);


/* ==================================================
   質問カバー色
================================================== */

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


/* ==================================================
   回答カバー色
================================================== */

document
  .querySelectorAll(
    'input[name="answer-overlay-color"]'
  )
  .forEach(
    (radio) => {

      radio.addEventListener(
        "change",
        () => {

          if (!radio.checked) {
            return;
          }


          answerOverlayColor =
            radio.value;


          updateAnswerOverlay();

        }
      );

    }
  );


/* ==================================================
   質問文字色
================================================== */

const questionCard =
  document.getElementById(
    "card-1"
  );


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


          if (radio.value === "black") {

            questionCard.classList.add(
              "text-black"
            );

          }

          else {

            questionCard.classList.add(
              "text-white"
            );

          }

        }
      );

    }
  );


/* ==================================================
   回答文字色
================================================== */

const answerCards =
  document.querySelectorAll(
    ".answer-card"
  );


document
  .querySelectorAll(
    'input[name="answer-text-color"]'
  )
  .forEach(
    (radio) => {

      radio.addEventListener(
        "change",
        () => {

          if (!radio.checked) {
            return;
          }


          answerCards.forEach(
            (card) => {

              card.classList.remove(
                "text-white",
                "text-black"
              );


              if (radio.value === "black") {

                card.classList.add(
                  "text-black"
                );

              }

              else {

                card.classList.add(
                  "text-white"
                );

              }

            }
          );

        }
      );

    }
  );


/* ==================================================
   初期状態
================================================== */

updateQuestionOverlay();

updateAnswerOverlay();


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

              width: 1200,

              height: 1200,

              canvasWidth: 1200,

              canvasHeight: 1200,

              pixelRatio: 1,

              cacheBust: true,

              style: {

                width: "1200px",

                height: "1200px",

                margin: "0"

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


        await sleep(400);

      }

    }

    catch (error) {

      console.error(error);


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
    document.createElement("a");


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