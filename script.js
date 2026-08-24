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
   回答フォントサイズ
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
   FILE → DATA URL
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
   カード設定共通
================================================== */

function setupCardSettings(options) {

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
    async (event) => {

      const file =
        event.target.files[0];


      if (!file) {
        return;
      }


      try {

        const backgroundData =
          await readImageAsDataURL(
            file
          );


        background.style.backgroundImage =
          `url("${backgroundData}")`;


        updateBackgroundTransform();

      }

      catch (error) {

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
     背景位置・拡大率
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
      scalePercent / 100;


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
      overlayColor === "white"
        ? "255, 255, 255"
        : "0, 0, 0";


    overlay.style.backgroundColor =
      `rgba(${rgb}, ${opacity})`;


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


  /* ==================================================
     文字色
  ================================================== */

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
   回答1
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
   回答2
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
   回答3
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
   プレビュータブ
================================================== */

const previewTabs =
  document.querySelectorAll(
    ".preview-tab"
  );


const previewCards =
  document.querySelectorAll(
    ".preview-card"
  );


previewTabs.forEach(
  (tab) => {

    tab.addEventListener(
      "click",
      () => {

        const targetCardId =
          tab.dataset.card;


        previewTabs.forEach(
          (item) => {

            item.classList.remove(
              "is-active"
            );

          }
        );


        previewCards.forEach(
          (card) => {

            card.classList.remove(
              "is-active"
            );

          }
        );


        tab.classList.add(
          "is-active"
        );


        const targetCard =
          document.getElementById(
            targetCardId
          );


        if (targetCard) {

          targetCard.classList.add(
            "is-active"
          );

        }

      }
    );

  }
);


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


      await sleep(
        300
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


        await sleep(
          120
        );


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