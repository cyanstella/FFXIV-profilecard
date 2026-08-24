/* =========================
   基本設定
========================= */

const MAX_LENGTH = 80;


/* =========================
   回答反映
   文字数
   自動フォントサイズ
========================= */

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


  const updateAnswer = () => {

    if (input.value.length > MAX_LENGTH) {

      input.value =
        input.value.slice(
          0,
          MAX_LENGTH
        );

    }


    const text =
      input.value;

    const length =
      text.length;


    answer.textContent =
      text;


    answer.style.fontSize =
      getAnswerFontSize(length);


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

      } else if (length >= 60) {

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


/* =========================
   フォントサイズ
========================= */

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


/* =========================
   Data URL
========================= */

function readImageAsDataURL(file) {

  return new Promise(
    (resolve, reject) => {

      const reader =
        new FileReader();


      reader.onload = () => {
        resolve(reader.result);
      };


      reader.onerror = () => {
        reject(reader.error);
      };


      reader.readAsDataURL(file);

    }
  );

}


/* =========================
   質問背景
========================= */

const questionBackgroundUpload =
  document.getElementById(
    "question-background-upload"
  );


const questionBackgrounds =
  document.querySelectorAll(
    ".question-background"
  );


let questionBackgroundData = null;


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
        await readImageAsDataURL(file);


      questionBackgrounds.forEach(
        (background) => {

          background.style.backgroundImage =
            `url("${questionBackgroundData}")`;

        }
      );

    } catch (error) {

      console.error(error);

      alert(
        "質問用背景画像の読み込みに失敗しました。"
      );

    }

  }
);


/* =========================
   回答背景
========================= */

const answerBackgroundUpload =
  document.getElementById(
    "answer-background-upload"
  );


const answerBackgrounds =
  document.querySelectorAll(
    ".answer-background"
  );


let answerBackgroundData = null;


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
        await readImageAsDataURL(file);


      answerBackgrounds.forEach(
        (background) => {

          background.style.backgroundImage =
            `url("${answerBackgroundData}")`;

        }
      );

    } catch (error) {

      console.error(error);

      alert(
        "回答用背景画像の読み込みに失敗しました。"
      );

    }

  }
);


/* =========================
   背景解除
========================= */

document
  .getElementById("remove-question-background")
  .addEventListener(
    "click",
    () => {

      questionBackgroundData = null;

      questionBackgroundUpload.value = "";


      questionBackgrounds.forEach(
        (background) => {

          background.style.backgroundImage = "";

        }
      );

    }
  );


document
  .getElementById("remove-answer-background")
  .addEventListener(
    "click",
    () => {

      answerBackgroundData = null;

      answerBackgroundUpload.value = "";


      answerBackgrounds.forEach(
        (background) => {

          background.style.backgroundImage = "";

        }
      );

    }
  );


/* =========================
   質問背景の暗さ
========================= */

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


questionOpacityControl.addEventListener(
  "input",
  () => {

    const opacity =
      Number(
        questionOpacityControl.value
      );


    questionOverlays.forEach(
      (overlay) => {

        overlay.style.backgroundColor =
          `rgba(5, 10, 20, ${opacity})`;

      }
    );


    questionOpacityValue.textContent =
      `${Math.round(opacity * 100)}%`;

  }
);


/* =========================
   回答背景の暗さ
========================= */

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


answerOpacityControl.addEventListener(
  "input",
  () => {

    const opacity =
      Number(
        answerOpacityControl.value
      );


    answerOverlays.forEach(
      (overlay) => {

        overlay.style.backgroundColor =
          `rgba(5, 10, 20, ${opacity})`;

      }
    );


    answerOpacityValue.textContent =
      `${Math.round(opacity * 100)}%`;

  }
);


/* =========================
   PNG書き出し
========================= */

const generateButton =
  document.getElementById(
    "generate-button"
  );


generateButton.addEventListener(
  "click",
  async () => {

    generateButton.disabled = true;

    generateButton.textContent =
      "画像を生成しています…";


    try {

      if (document.fonts) {
        await document.fonts.ready;
      }


      await sleep(300);


      for (let i = 1; i <= 4; i++) {

        const card =
          document.getElementById(
            `card-${i}`
          );


        /*
          書き出し専用スタイル
        */

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

    } catch (error) {

      console.error(error);


      document
        .querySelectorAll(".profile-card")
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

    } finally {

      generateButton.disabled = false;

      generateButton.textContent =
        "4枚の画像を書き出す";

    }

  }
);


/* =========================
   DOWNLOAD
========================= */

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


/* =========================
   WAIT
========================= */

function sleep(ms) {

  return new Promise(
    resolve =>
      setTimeout(
        resolve,
        ms
      )
  );

}